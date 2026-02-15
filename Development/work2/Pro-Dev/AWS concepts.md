# AWS concepts


## **IAM Permissions and Roles 🔑**

* **IAM (Identity and Access Management):** This is the service in AWS that allows you to manage access to AWS services and resources. It's the gatekeeper of your AWS account. You use it to define who can do what.
* **IAM Role:** An IAM role is an identity that you can assume to grant permissions to users, applications, or AWS services. Unlike a user, a role doesn't have its own credentials. In this context, the Lambda function assumes a role to gain the permissions it needs.
* **IAM Policy:** A policy is a document that formally defines permissions. You attach policies to roles to grant specific permissions. The policies mentioned in the text are:
	* **AWSLambdaBasicExecutionRole:** A predefined policy that grants the bare minimum permissions for a Lambda function to operate, specifically to write logs to **CloudWatch**, which is AWS's monitoring and logging service.
	* **AWSLambdaVPCAccessExecutionRole:** A critical policy that allows a Lambda function to create a **Network Interface** inside a VPC. Without this, a Lambda function cannot connect to resources within a VPC.
	* **SecretsManagerReadWrite:** A policy that gives permission to read and write secrets stored in **AWS Secrets Manager**, a service used to securely store and retrieve credentials, API keys, and other secrets.


## **VPC and Networking 🌐**

* **VPC (Virtual Private Cloud):** Think of a VPC as your own isolated, private network within AWS. It's where you can launch AWS resources, like your database or Lambda function, in a virtual environment that you control.
* **Subnet:** A subnet is a range of IP addresses within a VPC. You can divide your VPC into subnets to organize and isolate your resources. There are two main types:
	* **Public Subnet:** A subnet that has a direct connection to the internet through an **Internet Gateway (IGW)**. Resources in a public subnet can receive traffic from the internet.
	* **Private Subnet:** A subnet that has no direct route to the internet. This is where you would place sensitive resources, like a database, to protect them from public access.
* **Internet Gateway (IGW):** A horizontally scalable, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet. It's the bridge that connects a public subnet to the internet.
* **NAT Gateway (Network Address Translation Gateway):** A service that allows resources in a private subnet to initiate connections to the internet or other AWS services without allowing the internet to initiate a connection to those resources. It works by translating the private IP addresses of the resources to a public IP address.
* **Route Table:** A set of rules that determines where network traffic from a subnet is directed. Each subnet in a VPC must be associated with a route table. In the text, a private route table was configured to send internet-bound traffic (0.0.0.0/0) to the NAT Gateway, which is the key to allowing the Lambda function to talk to external services like Plaid while remaining in a private subnet.


## **Lambda Configuration and Dependencies 📦**

* **Lambda Function:** A serverless, event-driven compute service that lets you run code without provisioning or managing servers. It's a small piece of code that you upload to AWS.
* **Deployment Package:** A ZIP file that contains your Lambda function code and all of its dependencies (libraries). If your code needs to use an external library (like the 'pg' library for PostgreSQL), you must include it in the deployment package.
* **Environment Variables:** Key-value pairs that you can set for a Lambda function. They are used to pass configuration settings, like database credentials or API keys, to your code without hardcoding them. This is a best practice for security and flexibility. The text points out a common mistake where the **ARN (Amazon Resource Name)** of the database was used instead of the ARN of the secret containing the credentials.


## **Your VPC Route Tables 🗺️**

1. **Public Route Table**	* **ID:** rtb-0befbc731bdfbbeae
	* **Purpose:** This is the **main route table** for your VPC. It's associated with all your original subnets, and its key feature is a route that sends all internet-bound traffic (0.0.0.0/0) directly to the **Internet Gateway (igw-)**. This is what makes those subnets "public." You need to **keep this table**.
2. **Private Route Table**	* **ID:** rtb-06ed820736329615b
	* **Purpose:** This is the **private route table** you created. It is correctly associated with your two new private subnets, and its key route sends all internet-bound traffic (0.0.0.0/0) to the **NAT Gateway (nat-)**. This allows your Lambda functions in those subnets to securely reach the internet without being exposed to inbound traffic. You must **keep this table**.
3. **Extra Private Route Table**	* **ID:** rtb-03d2baac8c88bae93
	* **Purpose:** This is the extra route table that was accidentally created during our troubleshooting. It is not associated with any subnets, which means it is **not being used** by any of your resources. You can safely **delete this table** to clean up your VPC.
This confirms that you have two functional route tables that are essential for your application's architecture and one that can be removed.


# Aws

VPC - virtual private cloud.
* a contain of IP addresses, which are points where a resource connects to the network.  The db has an address of xyz.   
* On creation, you specify a CIDR block (10.0.0.0/16), and this becomes the range for the container. 
* Subnet - group of IP addresses. a range of ip addresses within a VPC.  This allows us to apply network policies and security rules to an entire group of resources at once.  If we assign a range, we know how many more resources we can add, and we can add rules to groups,  
* Security rules: determine whether network traffic is allowed to enter / exit a resource.  Hey check a packet’s ID and purpose.  These rules are defined in Security Groups and Network Access Control lists.  They can apply to the IP address for 1 or a group of resources
* Route rules: determine the path that network traffic takes between addresses, guiding packets from source to destination.  These rules live in a route table. 
* In the VPC, we can launch AWS resources, like db and Lambdafunction.  It is a

Virtual computer - this runs applications.  They are instances or virtual machines (VMs) or virtual server.  Two examples:
* EC2 instance - it has its own OS, CPU memory, and an IP address.  You can run software on it (like node).  And apps, like a db.  We have complete control of it, the kind of OS, the software on it, when it runs.  It’s a server, so you can log into it and control it at anytime . You can also run a db server, web server, game server, etc. 
* Lambda functions - this is a piece of code that’s uploaded; we don’t manage any servers.  AWS runs the code on its own infrastructure only when its needed.  You just pay for it when it runs. 

Two kinds of IP addresses
IPv4 is the older standard which uses four numbers separated by periods (dotted-decimal). 192.0.2.146 is a 32 bit number  IPv6 is teh new standard 8 groups of 4  hexadecimals separated by colons.  It is a 128-bit number

There are two kinds
* public subnet - a direct connection to the internet via Internet Gateway.  Resources here can recieve traffic from the internet.
* private subnet - has no connection to the internet.  Sensitive sources like db live here.
* Public - web servers
* Private - database.  


Kinds of gateways

Internet Gateway - a VPC component that connects VPC instances to the internet.  

NAT (network address translation) Gateway - a service that allows stuff in a private subnet to connect to the internet or other AWS services without allowing the internet to connect to those resources.   

CIDR

A range of IP addresses are represented using CIDR motivation (classless inter-domain routing).  It is an address followed by a prefix length (/16)
* 128.2.3.1/32 - 
* /32 - 32 bits of the address are fixed.  
* 128.2.3.1 - the I- address itself 
* 0.0.0.0/16  - a larger range of IP addresses.  16 bits are fixed while the last 16 bits are available for host addresses.  
* Between 0.0.0.0 and 0.0.255.255 there are 65536 IP addresses. 



IP address = your computer (building)
Subnet = your street
Port = various services on the computer (apartment #)



CIDR block is a range of IP addresses defining the destination  for a route: 10.0.0.0/16

A route is a rule that consists of: 

Destination: target. An ip address or cider block that traffic is trying to reach
Target: the next hop / exit that traffic must take to get to its destination.  Targets include IG, NAT, or local VPC network itself.  Other targets include VPC peering connection, virtual private gateway, gateway load balancer endpoint, egress-only IG, network interface. 

A route looks like this
Destination: 10.0.0.0/16
Target: local 

Local route - any traffic going to cddr block, keep the traffic on local roads. 


route table - a collection of rules.  If a network packet arrives at a subnet, the system checks the route tables rules to find the best match for the packet’s destination ip address.  


My app
* NAT Gateway > PLAID api 

# Api gateway

Build rest api
New api

Create resource
First-spit-test

Define request: create method
mock / get

Request
Method
Integration - type mock

Response
Method
integration - give back dummy data / body mapping temptations select json + define data

Actions / deploy api 
Create a deployment stage

Invoke URL is url leading to api. 
[https://3i22lyiuk4.execute-api.us-east-1.amazonaws.com/Dev](https://3i22lyiuk4.execute-api.us-east-1.amazonaws.com/Dev)
This will say auth required
If I add /first-api path - I see my integration path


| Serve static app       | S3 - just a few files  |
|------------------------|------------------------|
| REST API               | API Gateway            |
| Execute code on demand | Lambda                 |
| database               | DynamoDB (noSQL)       |
| Authenticate users     | Cognito                |
| Translate URL via DNS  | Route 53               |
| Caching service        | Cloudfront             |


Caching - copies static files to various destinations across the world. 

What is Amplify gen 2

[https://docs.amplify.aws/react/deploy-and-host/sandbox-environments/setup/](https://docs.amplify.aws/react/deploy-and-host/sandbox-environments/setup/)

[https://www.youtube.com/watch?v=1D1Y3h98SAM](https://www.youtube.com/watch?v=1D1Y3h98SAM)





