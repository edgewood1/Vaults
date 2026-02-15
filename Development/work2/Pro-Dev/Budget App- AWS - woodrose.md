# Budget App: AWS - woodrose


QLDB
Oracle database@aws
Dynamodb
Amazon memoryDB
Amazon documentDB
Athena
Autora and res
Amazon work docs

Set password of db

## **Project Accomplishments**
1. **Cloud Database Selection & Strategy**	* Evaluated Amazon Aurora but determined it was too expensive for the project's current needs.
	* Pivoted to a more cost-effective solution: 
	* **Standard Amazon RDS for PostgreSQL**.
	* Strategized to use the AWS Free Tier to minimize costs for the first 12 months.
2. **Infrastructure Provisioning: RDS Database Creation**	* Successfully navigated the AWS console to create a new standard PostgreSQL database instance.
	* Configured the database for a small-scale development environment with the following key settings:
		* **Instance:** A small, free-tier eligible db.t4g.micro instance.
		* **Deployment:** A single instance (Single-AZ) to optimize for cost.
		* **Storage:** Minimal 20 GiB of General Purpose SSD storage.
		* **Security:** Disabled public access to ensure the database is not exposed to the internet, following best practices.
		* **Backups & Safety:** Enabled automated backups and crucial deletion protection.
3. **Application & Database Integration**	* Established a secure method for your local Next.js application to connect to the new cloud database.
	* Created a .env.local file to safely manage the database connection string, keeping secrets out of your source code.
	* Confirmed your Prisma schema is correctly configured to use this new connection string.
4. **Network Configuration & Security**	* Identified the specific AWS Security Group acting as the firewall for your new database.
	* Configured the firewall's 
	* **Inbound Rules** to grant your local development machine secure access to the database on the correct port (5432).
	* Clarified the roles of inbound vs. outbound rules and why only the inbound rule needed modification.


Register / Login page
OAuth
BCrypt
@auth/prisma-adapter@1.4.0
Add docker / postgresql- 
Prisma.schema 
npx prisma db push 
Npc prisma init
 next-auth @auth/prisma-adapter prisma bcrypt

Aurora and RDS
Crearted postgresql db there
Created security rules



Start db
  docker-compose up -d
npx prisma db push


<u>**Security rule**</u>
* add an inbound rule for type: postgresqul port rnage: 5432 
* source for vpc security group  (firewall) after db created you must edit the security group to allow inbound traffic to 5432 from the seciruty group of your backend serves (eg, lambda function's security group). 
* that backend service will then connect to your private RDS isntance. 

do i need a lambda function or far gate container for my amplify frontend to communicate with a backend service ?

Define terms and relationships and examples

EC2 instance
Public IP
AMI
SSH commands

Updating records

To update your DNS A record for wildwoodrose.org:
1. **Go to the AWS Route 53 Console** (or your DNS provider’s dashboard if not using Route 53).
3. **Find your hosted zone** for [wildwoodrose.org](http://wildwoodrose.org).
7. **Locate the A record** for [wildwoodrose.org](http://wildwoodrose.org) (it may be called "A – IPv4 address").
11. **Edit the A record**:
	* Set the value to your EC2 instance’s public IP address (e.g., 44.204.83.90).
	* Save the changes.
13. **(Optional) Add or update the A record for** **[www.wildwoodrose.org](http://www.wildwoodrose.org)** to point to the same IP if you want both to work.
16. **Wait for DNS propagation** (usually a few minutes, but can take up to a few hours).
**After updating,** visit http://wildwoodrose.org in your browser. If you see your EC2 app or the Nginx default page, you’re ready to re-run Certbot for HTTPS.
Let me know if you want step-by-step screenshots or have any trouble finding your DNS settings!


**Lambda steps for creating**
* add permissions 
* Add environmental variables
* Configure the vpc
	* Add two private subnets
	* Add security groups


# AWS troubleshoot


Route 53

- Domain registration: 1 domain
- Hosted zone: 1 HZ

Check registers domain: [wildwoodrose.org](http://wildwoodrose.org)

Name servers
* 		ns-356.awsdns-44.com
* 		ns-732.awsdns-27.net
* 		ns-1026.awsdns-00.org
* 		
* [ns-1559.awsdns-02.co.uk](http://ns-1559.awsdns-02.co.uk)
Hosted zone: [wildwoodrose.org](http://wildwoodrose.org)

- Are the NS names here the same as in the domain? 
- CNAME should match cloud front name on amplify:






