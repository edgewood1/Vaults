# Async Simpson





```
> Ajax(‘http://api.com’, callback)

```


Trust issues: 



two utilities to wrap our Ajax call and protect it from an external function (like an api call) that might never respond.  
* Timeoutify - the api should call the callback but if it’s down or stuck in a loop, it will never be called.  For this, you can wrap   
* Asyncify - saves the callback by guaranteeing it will always run 
