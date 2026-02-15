# Plaid-budget app

Plaid-budget app

Okay, let's reset and go through all the backend setup steps from the beginning, in a clear, sequential order. This will ensure we cover all the necessary pieces for your Plaid integration and PostgreSQL database connection.


## **The Backend Big Picture (Reminder)**

We're building the "brain" of your AI agent using AWS serverless services. This backend will:
1. **Securely store your API keys** (Plaid, PostgreSQL).
3. **Handle the Plaid Link flow**, allowing you to connect your bank account.
5. **Store your Plaid access tokens** in your PostgreSQL database.
7. Later, it will 
8. **fetch transactions**, **categorize them with AI**, and **update your budget**.


## **Step 1: Set Up Your Plaid Developer Account**

Before touching AWS, you need your Plaid API keys.
1. **Go to Plaid's Website:** Navigate to <u>[https://plaid.com/](https://plaid.com/)</u> and sign up or log in.
5. **Obtain API Keys:** Once in your Plaid Dashboard, go to **Platform > Developers > Keys**.
	* Note down your **Client ID**.
	* Note down your 
	* **Sandbox Key** (this is your PLAID_SECRET for testing).
	* (Keep the Production Key for when you're ready to go live later).


## **Step 2: Securely Store Credentials in AWS Secrets Manager (Two Secrets)**

You'll create *two separate secrets* here: one for Plaid and one for PostgreSQL.

**2.1. Store Plaid API Keys Secret**

This secret will hold your Plaid Client ID and Sandbox Key.
1. **Go to AWS Secrets Manager:** Log in to your AWS Console, search for "Secrets Manager", and go to the service.
3. **Click "Store a new secret"**.
5. **Secret type:** Choose **"Other type of secret"**.
9. **Key/value pairs:**	* **Key:** PLAID_CLIENT_ID | **Value:** (Paste your Plaid Client ID)
	* **Key:** PLAID_SECRET | **Value:** (Paste your Plaid Sandbox Key)
	* **Key:** PLAID_ENV | **Value:** sandbox (or development/production if you switch environments later)
10. Click **"Next"**.
13. **Secret name:** Enter a descriptive name, e.g., plaid/budget-tracker/api-keys.
15. Click 
16. **"Next"**, **"Next"**, then **"Store"**.
22. **Note the Secret ARN:** Once stored, click on the secret's name and copy its **Secret ARN** (e.g., arn:aws:secretsmanager:your-region:your-account-id:secret:plaid/budget-tracker/api-keys-xxxxxx). You'll use this in your Lambda environment variables.

**2.2. Store PostgreSQL Database Credentials Secret**

This secret will hold the credentials for your PostgreSQL database.
1. **Go to AWS Secrets Manager** (if you're not already there).
3. **Click "Store a new secret"**.
5. **Secret type:** Choose **"Credentials for RDS database"**.
9. **Database credentials:**	* **Username:** (Enter the username for your PostgreSQL user)
	* **Password:** (Enter the password for your PostgreSQL user)
10. **Database:** Select your PostgreSQL RDS instance from the dropdown.
12. Click 
13. **"Next"**.
15. **Secret name:** Enter a descriptive name, e.g., postgres/budget-tracker/db-creds.
17. Click 
18. **"Next"**, **"Next"**, then **"Store"**.
24. **Note the Secret ARN:** Copy its **Secret ARN** (e.g., arn:aws:secretsmanager:your-region:your-account-id:secret:postgres/budget-tracker/db-creds-xxxxxx). You'll use this in your Lambda environment variables.


## **Step 3: Create IAM Roles for Lambda Functions**

Each Lambda function needs an IAM role with permissions to execute and access secrets.
1. **Go to IAM:** In the AWS Console search bar, type IAM and go to the service.
3. **Click "Roles"** in the left navigation, then **"Create role"**.
7. **Trusted entity type:** Choose **"AWS service"**.
11. **Use case:** Select **"Lambda"**.
15. Click 
16. **"Next"**.
18. **Permissions policies:**	* Search for and select **AWSLambdaBasicExecutionRole** (allows Lambda to write logs to CloudWatch).
	* Search for and select 
	* **SecretsManagerReadWrite** (allows Lambda to retrieve secrets from Secrets Manager).
19. Click **"Next"**.
22. **Role name:**	* For the first Lambda: budget-tracker-link-token-role
	* For the second Lambda: budget-tracker-exchange-token-role
	* (You'll create one role for each Lambda, so repeat this process for the second role name after creating the first).
23. Click **"Create role"**.


## **Step 4: Create AWS Lambda Functions (Python)**

You'll create the two Python Lambda functions.

**4.1. Lambda Function 1: budget-tracker-create-link-token**

This function generates the link_token for your frontend.
1. **Go to Lambda:** In the AWS Console search bar, type Lambda and go to the service.
3. **Click "Create function"**.
5. **Author from scratch:**	* **Function name:** budget-tracker-create-link-token
	* **Runtime:** Python 3.9 (or newer, e.g., 3.12)
	* **Architecture:** x86_64
	* **Execution role:** Choose **"Use an existing role"** and select budget-tracker-link-token-role.
6. Click **"Create function"**.
9. **Upload Code:**	* Once the function is created, scroll down to the **"Code"** tab.
	* Under "Code source", click 
	* **"Upload from" > ".zip file"**.
	* You'll need to create a deployment package. On your local machine:
		* Create a new directory (e.g., lambda_packages/create_link_token).
		* Install the plaid-python library into this directory:
		* Bash
		* pip install plaid-python -t ./lambda_packages/create_link_token
		* Create a file named lambda_function.py inside this directory and paste the code from the lambda-create-link-token immersive artifact into it.
		* Zip the 
		* *contents* of the create_link_token directory (not the directory itself). Make sure lambda_function.py and the plaid library folder are at the root of the zip.
		* Bash
		* cd lambda_packages/create_link_token
		* zip -r ../create_link_token.zip .
		* Upload create_link_token.zip to your Lambda function.
10. **Configure Environment Variables:**	* Go to **"Configuration" > "Environment variables"**.
	* Click 
	* **"Edit"**, then **"Add environment variable"**.
		* **Key:** PLAID_SECRET_ARN | **Value:** (Paste the Secret ARN for plaid/budget-tracker/api-keys you noted earlier).
		* **Key:** PLAID_REDIRECT_URI | **Value:** https://money.wildwoodrose.org/plaid-oauth (This is the URL Plaid will redirect to after OAuth flows. You'll need to ensure your Amplify app has a page/route for this, or Plaid Link handles it.)
	* Click **"Save"**.

**4.2. Lambda Function 2: budget-tracker-exchange-public-token**

This function exchanges the public_token and stores the access_token in PostgreSQL.
1. **Go to Lambda** and **"Create function"**.
5. **Author from scratch:**	* **Function name:** budget-tracker-exchange-public-token
	* **Runtime:** Python 3.9 (or newer)
	* **Architecture:** x86_64
	* **Execution role:** Choose **"Use an existing role"** and select budget-tracker-exchange-token-role.
6. Click **"Create function"**.
9. **Upload Code:**	* On your local machine, create a new directory (e.g., lambda_packages/exchange_public_token).
	* Install plaid-python and psycopg2-binary (PostgreSQL adapter) into this directory:
	* Bash
	* pip install plaid-python psycopg2-binary -t ./lambda_packages/exchange_public_token
	* Create a file named lambda_function.py inside this directory and paste the code from the lambda-exchange-public-token immersive artifact into it.
	* Zip the 
	* *contents* of the exchange_public_token directory.
	* Bash
	* cd lambda_packages/exchange_public_token
	* zip -r ../exchange_public_token.zip .
	* Upload exchange_public_token.zip to your Lambda function.
10. **Configure Environment Variables:**	* Go to **"Configuration" > "Environment variables"**.
	* Click 
	* **"Edit"**, then **"Add environment variable"**.
		* **Key:** PLAID_SECRET_ARN | **Value:** (Paste the Secret ARN for plaid/budget-tracker/api-keys).
		* **Key:** POSTGRES_SECRET_ARN | **Value:** (Paste the Secret ARN for postgres/budget-tracker/db-creds).
	* Click **"Save"**.


## **Step 5: Configure Lambda VPC and Security Group (for exchange_public_token)**

This is crucial for your exchange_public_token Lambda to connect to your PostgreSQL RDS instance.
1. **Identify your RDS VPC and Security Group:**	* Go to the **RDS Console**.
	* Select your PostgreSQL database instance.
	* Under the "Connectivity & security" tab, note down the 
	* **VPC ID** and the **Security Group(s)** associated with your database.
2. **Configure budget-tracker-exchange-public-token Lambda VPC:**	* Go to the **Lambda Console**.
	* Select your budget-tracker-exchange-public-token function.
	* Go to the 
	* **"Configuration"** tab, then **"VPC"**.
	* Click 
	* **"Edit"**.
	* Select the 
	* **VPC ID** you noted from RDS.
	* Select 
	* **Subnets** within that VPC (ideally, private subnets for security).
	* Select the 
	* **Security Group(s)** associated with your RDS instance.
	* Click 
	* **"Save"**.
3. **Update RDS Security Group (if necessary):**	* Go to the **VPC Console** > **Security Groups**.
	* Select the security group(s) associated with your RDS instance.
	* Go to the 
	* **"Inbound rules"** tab.
	* Ensure there is a rule that allows 
	* **PostgreSQL (port 5432)** traffic from the **security group of your Lambda function** (or the specific IP ranges of your Lambda's subnets, though using the Lambda's security group as the source is often easiest).
		* If your Lambda's security group is sg-xxxxxx, you'd add an inbound rule for PostgreSQL (5432) from source sg-xxxxxx.


## **Step 6: Configure API Gateway Endpoints**

These endpoints will expose your Lambda functions to your frontend.
1. **Go to API Gateway:** In the AWS Console search bar, type API Gateway and go to the service.
3. **Create a new REST API:**	* Click **"Build"** under "REST API".
	* Choose 
	* **"New API"**.
	* **API name:** BudgetTrackerPlaidApi
	* **Endpoint Type:** Choose **"Regional"**.
	* Click 
	* **"Create API"**.
4. **Create /link-token Resource and Method:**	* In your BudgetTrackerPlaidApi, click **"Actions" > "Create Resource"**.
	* **Resource Name:** link-token | **Resource Path:** /link-token
	* Click 
	* **"Create Resource"**.
	* With /link-token selected, click 
	* **"Actions" > "Create Method"**.
	* Select 
	* **POST**.
	* **Integration type:** Choose **"Lambda Function"**.
	* **Use Lambda Proxy integration:** Check this box.
	* **Lambda Function:** Start typing budget-tracker-create-link-token and select your Lambda function.
	* Click 
	* **"Save"**. (It will ask to grant permissions, click OK).
5. **Create /exchange-public-token Resource and Method:**	* In your BudgetTrackerPlaidApi, click **"Actions" > "Create Resource"**.
	* **Resource Name:** exchange-public-token | **Resource Path:** /exchange-public-token
	* Click 
	* **"Create Resource"**.
	* With /exchange-public-token selected, click 
	* **"Actions" > "Create Method"**.
	* Select 
	* **POST**.
	* **Integration type:** Choose **"Lambda Function"**.
	* **Use Lambda Proxy integration:** Check this box.
	* **Lambda Function:** Start typing budget-tracker-exchange-public-token and select your Lambda function.
	* Click 
	* **"Save"**. (It will ask to grant permissions, click OK).
6. **Enable CORS (Cross-Origin Resource Sharing):**	* In your BudgetTrackerPlaidApi, click on the /link-token resource.
	* Click 
	* **"Actions" > "Enable CORS"**.
	* Use default settings for now. For production, you'd restrict Access-Control-Allow-Origin to https://money.wildwoodrose.org.
	* Click 
	* **"Enable CORS and replace existing CORS headers"**.
	* **Repeat this for the /exchange-public-token resource.**7. **Deploy the API:**	* In your BudgetTrackerPlaidApi, click **"Actions" > "Deploy API"**.
	* **Deployment stage:** Choose **"[New Stage]"**.
	* **Stage name:** dev (or prod for production).
	* Click 
	* **"Deploy"**.
8. **Note the Invoke URL:** After deployment, you'll see the "Invoke URL" for your API Gateway stage (e.g., https://xxxxxxxxxx.execute-api.your-region.amazonaws.com/dev). This is the base URL your frontend will use.

This is a comprehensive set of steps. Take your time with each one. Once these are complete, we'll update your React frontend to use these new API endpoints and integrate the Plaid Link SDK.
Let me know when you're ready for the frontend updates!







