# Db


**OpenAI scales PostgreSQL to support over 800 million users** by primarily employing a **single-primary instance with nearly 50 read replicas**, focusing on operational discipline, connection pooling, and offloading specific write-heavy workloads to other systems like Azure Cosmos DB. Their strategy emphasizes optimizing the existing infrastructure rather than immediate sharding. [<u>[1](https://www.reddit.com/r/singularity/comments/1ql3tgv/openai_scaling_postgresql_to_800_million_users/)</u>, <u>[2](https://www.linkedin.com/posts/seanmkerner_how-openai-is-scaling-the-postgresql-database-activity-7420576812411408384-rzup)</u>, <u>[3](https://www.microsoft.com/en-us/startups/blog/openai-and-postgresql-scaling-with-microsoft-azure/)</u>, <u>[4](https://venturebeat.com/data/how-openai-is-scaling-the-postgresql-database-to-800-million-users)</u>, <u>[5](https://openai.com/index/scaling-postgresql/)</u>] 

**Key Scaling Strategies** 
* **Read Replication**: The most significant strategy is leveraging dozens of cross-region read replicas to handle the massive, read-heavy traffic from ChatGPT and the API platform. This approach offloads read queries from the primary instance, which is dedicated to handling all writes. 
* **Connection Pooling**: OpenAI uses PgBouncer for efficient connection pooling. This reduces latency (improving response times from ~50ms to under 5ms for many queries) and manages database connections effectively, preventing connection storms that can overload the system. 
* **Write Workload Management**: To minimize the burden on the single write primary, OpenAI has implemented several techniques: 
	* **Write Reduction**: Reducing unnecessary writes at the application level and introducing delayed writes to smooth out traffic spikes. 
	* **Workload Migration**: Migrating certain heavy or shardable write-intensive workloads to other horizontally scalable database systems. 
	* **Rate Limiting**: Enforcing rate limits for data backfilling and other aggressive operations to prevent them from overwhelming the database. 
* **Query Optimization and Schema Governance**: The team enforces strict operational discipline to maintain stability and performance: 
	* **Query Timeouts**: Implementing strict timeouts for queries and idle transactions (e.g., 30 seconds for idle in transaction) to automatically terminate long-running or problematic operations. 
	* **Schema Changes**: Restricting schema changes to lightweight operations and prohibiting anything that would require a full table rewrite to ensure high availability. 
	* **Avoiding ORM pitfalls**: Using Object-Relational Mapping (ORM) tools cautiously to avoid inefficient queries, sometimes opting to handle complex joins at the application level. 
* **Caching**: A robust caching layer is used to serve most read traffic, and a cache-locking/leasing mechanism is in place to prevent "cache-miss storms" from overwhelming the database with sudden bursts of requests. [<u>[1](https://www.reddit.com/r/singularity/comments/1ql3tgv/openai_scaling_postgresql_to_800_million_users/)</u>, <u>[3](https://www.microsoft.com/en-us/startups/blog/openai-and-postgresql-scaling-with-microsoft-azure/)</u>, <u>[4](https://venturebeat.com/data/how-openai-is-scaling-the-postgresql-database-to-800-million-users)</u>, <u>[5](https://openai.com/index/scaling-postgresql/)</u>, <u>[6](https://posetteconf.com/2025/talks/scaling-postgres-to-the-next-level-at-openai/)</u>, <u>[7](https://www.youtube.com/watch?v=rhNYeu12Epc)</u>, <u>[8](https://www.youtube.com/watch?v=Ni1SGhNu-Q4)</u>, <u>[9](https://news.ycombinator.com/item?id=44071418)</u>, <u>[10](https://www.linkedin.com/posts/andypalmer_scaling-postgresql-to-power-800-million-chatgpt-activity-7420491117755805696-4vEU)</u>] 
By applying these pragmatic optimizations and best practices, OpenAI has demonstrated that a well-architected PostgreSQL setup can achieve massive scale for read-heavy, bursty workloads, challenging conventional wisdom that sharding is immediately necessary for such high user counts. More details are available in the OpenAI Engineering blog and a POSETTE conference talk by the engineering team. [<u>[2](https://www.linkedin.com/posts/seanmkerner_how-openai-is-scaling-the-postgresql-database-activity-7420576812411408384-rzup)</u>, <u>[4](https://venturebeat.com/data/how-openai-is-scaling-the-postgresql-database-to-800-million-users)</u>] 


*AI responses may include mistakes.*
[1] <u>[https://www.reddit.com/r/singularity/comments/1ql3tgv/openai_scaling_postgresql_to_800_million_users/](https://www.reddit.com/r/singularity/comments/1ql3tgv/openai_scaling_postgresql_to_800_million_users/)</u>
[2] <u>[https://www.linkedin.com/posts/seanmkerner_how-openai-is-scaling-the-postgresql-database-activity-7420576812411408384-rzup](https://www.linkedin.com/posts/seanmkerner_how-openai-is-scaling-the-postgresql-database-activity-7420576812411408384-rzup)</u>
[3] <u>[https://www.microsoft.com/en-us/startups/blog/openai-and-postgresql-scaling-with-microsoft-azure/](https://www.microsoft.com/en-us/startups/blog/openai-and-postgresql-scaling-with-microsoft-azure/)</u>
[4] <u>[https://venturebeat.com/data/how-openai-is-scaling-the-postgresql-database-to-800-million-users](https://venturebeat.com/data/how-openai-is-scaling-the-postgresql-database-to-800-million-users)</u>
[5] <u>[https://openai.com/index/scaling-postgresql/](https://openai.com/index/scaling-postgresql/)</u>
[6] <u>[https://posetteconf.com/2025/talks/scaling-postgres-to-the-next-level-at-openai/](https://posetteconf.com/2025/talks/scaling-postgres-to-the-next-level-at-openai/)</u>
[7] <u>[https://www.youtube.com/watch?v=rhNYeu12Epc](https://www.youtube.com/watch?v=rhNYeu12Epc)</u>
[8] <u>[https://www.youtube.com/watch?v=Ni1SGhNu-Q4](https://www.youtube.com/watch?v=Ni1SGhNu-Q4)</u>
[9] <u>[https://news.ycombinator.com/item?id=44071418](https://news.ycombinator.com/item?id=44071418)</u>
[10] <u>[https://www.linkedin.com/posts/andypalmer_scaling-postgresql-to-power-800-million-chatgpt-activity-7420491117755805696-4vEU](https://www.linkedin.com/posts/andypalmer_scaling-postgresql-to-power-800-million-chatgpt-activity-7420491117755805696-4vEU)</u>

