
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
    %% Use styling to keep it compact %%
    classDef plain fill:#fff,stroke:#333,stroke-width:1px;
    classDef aws fill:#FF9900,stroke:#232F3E,color:white;

    subgraph UserFlow [‘1. Entry’]
        A[User] --> B[Amplify Hosting]
        B --> C[API Gateway]
    end

    subgraph VPC [‘2. VPC & Networking’]
        direction TB
        L[NAT Gateway]
        
        subgraph Subnets [Private Subnets]
            D[Lambda Functions]:::aws
            F[“RDS<br/>(Aurora<br/>serverless)”]:::aws
            
            %% Connections inside the subnet
            C --> D
            D --> F
            D --> E[Secrets Manager]
        end

        %% Connections exiting the subnet via NAT
        D --> L
    end

    subgraph External [‘3. External Services’]
        G[Plaid API]
        H[Firebase Firestore]
        
        %% NAT connections to external
        L --> G
        L --> H
    end
    
    I[EventBridge Scheduler] --> D

    %% Styling
    class D,F,C,L aws
```

