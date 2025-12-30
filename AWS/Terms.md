
VPC - virtual private cloud (An isolated private network in AWS).  All resources live in VPC.  The EC2 is a box inside the VPC, running a db, api, and lambda.  An SG exists here.  
* exchange > post security
* Subnets associate route tables
* D7?

EC2 instance - a virtual server (Elastic compute cloud).  A computer renting from amazon has CPU, memory, storage, etc.  

Differences
* VPC is a name space while EC2 instance is a computer.
* I could have various computers running in a namespace; 
* I could have various namespaces running on one account. 

My setup
* I have an EC2 instance running a Postgres db.  This requires an SG (security group?).  PGS sets inbound rule on 5432 port.  From specific source, such as … another EC2 group, or specific lambda. 

Security group - a virtual firewall for EC2 instance that controls traffic coming or going.  It is a set of rules that define a filter.  Lambdas need an SG.  


Lambda
* create env var (plaid secret and redirect)
* Create database secrets
* Our two backend functions (micro services) each has a single dedicated purpose. 
* Createlinktoken - gets a short-lived token
* Exchange pt - turn pt into a long-lived access token and stores it. 

I-AM
* role: policies for each lambda function?

Secret Manager
* plaid API key
* db creds

Aurora (Postgres)
* stores access token and item_id recieved from plaid and stores transaction data.security group id
* Has a security group
* Inbound allows PSG traffic from X.
* Allows anything in your VPC
* Inbound rule
	* Type
	* Source: 0/16
	* Lambda security group


Routes (located in what AWS service?)
* private route tabl - 2 subnets (lambda)
* Public route - main
* Extra

API Gateway
* secure public facing url that react will call.  Acts as a router, forwarding requests to correct lambda function
* This is a door between VPC and client. 
* Client access VPC services via the gateway. 
* The gateway opens to various endpoints. 
* In my case, these endpoints are lambda functions. 


Plaid link - small popup in app that handles processor user entering bank creds so app never touches sensitive info

Firebase/firestore: apps realtime features add category or spend money.  FS instantly updates client data without user referesh

Frontend: react
Hosting: amplify.  