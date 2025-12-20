
The user interacts with the UI that is hosted by amplify. 
We used API Gateway to create an api that our frontend hits.
what triggers this api call? 
This API Gateway triggers a lamda function.
The lamda function does various things: 
* accesses secrets manager for passwords
* RDS database for? 
* Plaid API to collect transactions
* Firebase Firestone for? 

We also have a VPC running
This host private subnets that point to the database
It also hosts a NAT gateway that points to Plaid API and Firebase firestore.




```mermaid
graph TD
    subgraph 1. User Interaction
        A[User] --> B[Amplify Hosting]
    end

    subgraph 2. Backend Entry Point
        B --> C[API Gateway]
    end

    subgraph 3. Lambda & Core Logic
        C --> D[Lambda Functions]
        D --> E[Secrets Manager]
        D --> F[RDS Database]
        D --> G[Plaid API]
        D --> H[Firebase Firestore]
        E --> D
        F --> D
        G --> D
        H --> D
    end

    subgraph 4. Automation
        I[EventBridge Scheduler] --> D
    end

    subgraph 5. Networking
        J[VPC] --> K[Private Subnets]
        K --> L[NAT Gateway]
        K --> F
        L --> G
        L --> H
    end

```