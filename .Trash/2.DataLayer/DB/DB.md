DB - software that manages tables
* runs as an instance on a seperate port
* call DB to get data via an [[Cache Server]]


**Create / query database**

Driver - (client library / ORM )
* library downloaded and imported into the server
* Allows for queries on the db
* Add driver to server

`Const pool = new Pool({config})`
pool.query(request)


**Migration software: create/edit tables**
* db-migrate
* Use this to write table definitions
* db.json is config
* Create - write a new migration file (which references a table)
* Up - apply migration file to db
* Down - remove it


**Database sync: populate tables**
* if sync leads to a data issue, remove data from table*
Other ways to populate tables with data
* ORM might have an  easy command for this
* Write a seed script (seed.js) that connects to db and inserts data
* Insert command from server. 
* Sync table data with data from another instance located elsewhere? 

Other ways to query db:
* DB client GUI: workbench

Run cache 

Copies some tables to the file system, so no need to api request
Read heavy write rare data
Applies to all users
Used various places, not large. 
Product catalogs, categories, static content.

Other (what is this:)
* redis
* In-memory caching
* iru-caching (lost when app reboots?)