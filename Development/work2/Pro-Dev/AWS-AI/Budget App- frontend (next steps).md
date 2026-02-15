# Budget App: frontend (next steps)


Now that your React app is on GitHub, the very next step is to **deploy it to AWS Amplify Hosting**. This will make your budget tracker accessible via a URL (which we'll configure as a subdomain like money.wildwoodrose.org).
Here's a breakdown of the steps you'll take in the AWS Console:
1. **Log in to AWS Console:** Go to <u>[https://aws.amazon.com/](https://aws.amazon.com/)</u> and log in.
5. **Navigate to AWS Amplify:** Search for "Amplify" in the services search bar and click on "AWS Amplify".
7. **Create a New App:**	* On the Amplify Console dashboard, click **"New app"** and then **"Host web app"**.
	* **Connect Repository:** Choose **"GitHub"** as your repository service provider. You'll be prompted to authorize AWS Amplify to access your GitHub account.
	* **Select Repository:** Choose the GitHub repository where you just pushed your my-budget-tracker code.
	* **Select Branch:** Choose the branch you want to deploy (e.g., main or master).
	* Click 
	* **"Next"**.
8. **Configure Build Settings:**	* Amplify will usually auto-detect your Vite React project and suggest a build configuration.
	* **Verify the build settings:****Frontend framework:** Should be "React" or "Other".
		* **App root:** Usually / (the root of your repo).
		* **Build command:** yarn build (since you're using Yarn).
		* **Output directory:** dist (Vite's default output).
	* **Add Environment Variables (CRITICAL for Firebase):**Click on **"Environment variables"** (or "Advanced settings" to find it).
		* Add each of your Firebase configuration variables that you put in your local .env.local file. Remember to use the VITE_ prefix.
			* VITE_FIREBASE_API_KEY = YOUR_ACTUAL_API_KEY
			* VITE_FIREBASE_AUTH_DOMAIN = your-actual-project-id.firebaseapp.com
			* VITE_FIREBASE_PROJECT_ID = your-actual-project-id
			* VITE_FIREBASE_STORAGE_BUCKET = your-actual-project-id.appspot.com
			* VITE_FIREBASE_MESSAGING_SENDER_ID = YOUR_ACTUAL_MESSAGING_SENDER_ID
			* VITE_FIREBASE_APP_ID = YOUR_ACTUAL_APP_ID
			* (And VITE_FIREBASE_MEASUREMENT_ID if you enabled Analytics)
		* These variables will be securely injected during the build process on Amplify.
	* Click **"Next"**.
9. **Review and Deploy:**	* Review all your settings.
	* Click 
	* **"Save and deploy"**.
Amplify will now start the build and deployment process. This typically involves cloning your repository, installing dependencies, building your app, and deploying it to a global CDN. You'll see the progress in the Amplify Console.

Once deployed, Amplify will give you a default URL (e.g., https://main.d12345abcdef.amplifyapp.com). We'll then connect your custom subdomain (money.wildwoodrose.org) to this Amplify app.
Let me know once you've initiated the deployment in Amplify, and we can then proceed with connecting the custom domain and beginning the backend architecture!


