# Project Report: Personal Finance AI Agent 📊


**Project Report: Personal Finance AI Agent** 📊

This project is a **personal finance AI agent** that automates the process of fetching, categorizing, and tracking spending. It provides a real-time budget dashboard for personal use, built with a modern serverless architecture.
**Technology Stack**

* **Plaid:** A third-party service that securely connects to financial institutions like Chase to access transaction data.
* **Google Generative AI API (Gemini):** An external service that provides the AI engine for automatically categorizing transactions based on their descriptions.
* **React (with TypeScript):** The modern web framework used for the frontend user interface.
* **Node.js:** The JavaScript runtime environment used for all backend functions.
* **pg (node-postgres):** A library for connecting to and interacting with the PostgreSQL database.

**AWS Services**

* **AWS Amplify Hosting:** Serves the frontend React app at money.wildwoodrose.org. It handles web hosting and SSL certificates.
* **AWS Lambda:** The core of the backend. We've built three serverless functions in Node.js:
* create-link-token: Creates a temporary token to initiate the bank connection.
* exchange-public-token: Exchanges the temporary token for a permanent one and stores it.
* fetch-transactions: Fetches new transactions from Plaid on a schedule.
* (Future) ai-categorizer and firebase-updater: These will add the core AI and real-time updates.
* **Amazon API Gateway:** A managed service that provides secure, public-facing URLs (APIs) for our Lambda functions, acting as the entry point for the backend. It also manages CORS.
* **AWS Secrets Manager:** A secure vault for storing sensitive credentials like Plaid API keys and PostgreSQL passwords. Lambda functions retrieve these securely at runtime.
* **Amazon RDS (PostgreSQL):** A managed relational database service used to securely store permanent data, including Plaid access tokens and all transaction history.
* **Amazon EventBridge:** A scheduling service that will trigger the fetch-transactions Lambda function automatically, making the app a self-operating agent.
* **AWS VPC (Virtual Private Cloud):** A private network where our database and Lambda functions reside, ensuring they are not exposed to the public internet. This is a crucial security feature.

**Application Flow**

1. A user's browser loads the **React app** from Amplify Hosting.The React app calls an **API Gateway** endpoint.API Gateway triggers a **Lambda function** that retrieves credentials from **Secrets Manager** and talks to the **Plaid API**.Plaid facilitates a secure bank login and sends a temporary token back to the frontend.The frontend sends this token to a second **Lambda function**, which exchanges it for a permanent access_token.This second Lambda securely stores the access_token in the **PostgreSQL database** within the **VPC**.(Future) A scheduled Lambda function will fetch new transactions from Plaid, and a separate AI Lambda will categorize them using the **Google Generative AI API** before updating the database.(Future) A final Lambda will update the frontend's budget dashboard via **Firebase Firestore**.
**CI/CD Pipeline**

The development pipeline is automated. When code is pushed to the GitHub repository, **AWS Amplify** automatically detects the change, builds the app, and deploys it to the live domain. This ensures a fast and efficient workflow.
