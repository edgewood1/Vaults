
Host - physical computer

Two ways of loading a program (mySQL)
* Native app - this app relies on your OS’s libraries and files to run.  It looks for specific libraries (like a math one) on the OS to run it.  
* Image - this is the ready-to-run binary executable (not the C++ source code).   This boundless he app PLUS its own mini-os system (the user space).  It won’t matter what cpu it runs on because it will carry the math library with it. 

Layers of an image
* app layer: MySQL executables and libraries
* Dependency: all support software needed
* Base: a stripped down version of Linux that acts as a file system 

Future Question: how stripped down - is it just an empty file system with the dependcy layer stashed in it? 

Data stores - a place most programs store data. 
* data directory: mySQL stores in var/lib/mysql
	* We or OS picks it
	* You can easily open the folder in file explorer
	* Tied to specific machine
* Volume: image stores in var/lib/docker/volumes/… 
	* docker picks it inside a protected space
	* Opaque - requires docker commands to interact
	* Easy to back up or attach to a new container. 

Section 1: The Imperative Approach (Docker CLI)
Sub-header: Manual Management & Debugging

Image and Container
* Image: downloadable app
* Container: a running app

```docker
docker pull mysql:latest // latest is version
docker volume create my-sql-data

docker run -d --name my-db -v my-sql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret mysql:latest

```

- -d // runs container in background (no logs)
- —name my-db // nickname assigned
- -v source:target // map volume to folder 
- -e // env var 

You can dive into the running container to run tasks on it: 

`docker exec -it my-db mysql -u root -p`

* -it // 
* My-db // name of continent
* MySQL -u root -p // actual command to run .. this allows you to query - then the MySQL opens the mySQL REPL (start an interactive session).  The Bash program pauses and creates a child process in which MYSQL runs.  

```mysql
mysql> SHOW DATABASES;
mysql> USE my_data;
mysql> SELECT * FROM users LIMIT 5;
mysql> EXIT;
```

Note: a  v8 container can run a 5.8 volume by converting it to a v8 volume, but then, it can’t be used by a v5.8 container. 


• The Commands:
• Lifecycle: docker run, docker stop, docker rm
• Inspection: docker ps (list processes), docker logs ￼
• Interaction: docker exec (the "backdoor" / REPL access) ￼
• Storage: docker volume create
• Best For: Quick tests, "one-off" tasks, checking inside a database.

Section 2: The Declarative Approach (Docker Compose)
Sub-header: Composition

Instead of running 3 seperate commands (volume create, network create, docker run) we write a single file (docker-compose.yml) that defines: 


• Service: The App (MySQL code).
• Volume: The Storage (Data directory).
• Network: The Connection (How they talk).
You call this bundled definition a Stack.


• The Commands:
• Start: docker compose up (The magic "make it happen" button) ￼
• Stop: docker compose down
• Key Concepts:
• Services: The containers (e.g., "db", "web-app").
• Networks: How they talk to each other (defined automatically here).
• Volumes: Persistent storage defined in the file.
• Best For: Your actual development environment (running your Next.js app + Postgres DB together).


**Section 3: Orchestration (Cluster Management)**
**Sub-header: Scaling, High Availability, and Multi-Node Management**

Concept: "The Fleet Commander."
In Section 2 (Compose), you managed a restaurant (one machine). In Section 3, you are managing a franchise chain (many machines). You stop caring about individual servers; you care about the "Service" being available somewhere in your fleet.
1. The Core Shift: "Pet" vs. "Cattle"
• Section 2 (Compose): Your server is a "Pet." You give it a name (localhost), you nurse it when it's sick, and you worry if it crashes.
• Section 3 (Orchestration): Your servers are "Cattle." You have a herd of them. If one gets sick, you replace it automatically. You don't fix it.
2. The Problems Orchestration Solves
• High Availability (HA): If the physical server running your Database dies, Orchestration automatically detects it and starts a new copy on a different server instantly.
• Scaling: "My app is slow." You change one number in a config file (e.g., replicas: 5), and the orchestrator spins up 4 more copies of your app across different machines.
• Load Balancing: The orchestrator automatically splits incoming user traffic between those 5 copies.
3. Key Terminology (The "Stack" Level)
• Cluster: A group of computers (servers/instances) joined together to act as one giant super-computer.
• Node: A single computer in that cluster.
• Manager Node: The brain (decides where containers go).
• Worker Node: The muscle (actually runs the containers).
• Service: The abstract definition of your app (e.g., "The Finance App"). The Service manages the containers.
• Replica: How many copies of that service you want running.
• Ingress: The entry point (Door) that routes outside traffic to the correct service inside the cluster.
4. The Tooling Landscape
• Docker Swarm: Docker's built-in orchestration.
• Pros: Simple, uses the same YAML format as Compose.
• Cons: Less popular now; fewer features than Kubernetes.
• Command: docker stack deploy (This is where "Stack" lives!).
• Kubernetes (K8s): The industry standard (Google, AWS, Azure).
• Pros: Extremely powerful, runs everywhere.
• Cons: Very steep learning curve.
• AWS ECS (Elastic Container Service): AWS's proprietary orchestrator.
• Relevance to you: Since you use AWS, this is likely what you would use first. It integrates natively with Parameter Store and VPCs.