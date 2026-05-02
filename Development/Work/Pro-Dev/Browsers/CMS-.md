# CMS:

# CMS: 

Strapi 

Headless CMS

- On their website, create an endpoint: (post)
- Create a collection type: post
- This creates an api ID (post, posts)
- Add fields, like content and title which are text fields
- Then go to content manager
- Add content for title and content
- Publish
- Give access: permission: find, findOne
- Go to api/posts
- You’ll see a json: 
- I’d: 1
- Attributes: {
- Title: “post one”,
- Content” this is content”
- Created at, published at, updated at}
- Meta: { pagination: { page, etc}

Then we create a UI using this JSON. 


Redis - cache service
* runs as a service
* Web service > db query takes 30s
* Instead store data in redis cache instance
* Make retrieval occur from memory (RAM) from server running redis. If not, get from db. 
* Cache miss means data not in redis, so it gets data from db, and adds it to cache. 
* Cache hit - server gets stuff from redis cache. 
* Cache worker - a worker process between redis and db, monitors db for changes in data, cw will update redis.
* How to deploy redis instance? Deploy docker container with redis.  You can also run in in AWS or GCP.  
