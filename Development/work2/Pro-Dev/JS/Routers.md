# Routers


express.js api handler


app.METHOD(route_PATH, HANDLER_FUNCTION/handler);

**Route definition**

App.get(‘/user’, getUser);

**Handler function**

Const getUser = (req, res) =>  { 
// call db for user;
Return res.json({user: user});
}

Webstandards dictate these objects be used: 

Request object has info about http request
* Parts > route parameters like /users/:id
* Query > like ?limit=10
* Body > in post or put requests… requires middleware like expres.json()
* Headers > http headers, like? 


Response
* send() text msg or html response
* json()
* status()
* redirect()


Next.js app router api




