
##spies

spies - used to get info about an actual function call
- check how many times a function is called
- check what arguments were passed to a function

setup spy

spy2 = sinon.spy(component, 'hello');

call the function

spy2.bind(component)

spy2.callCount // how many times the function was called. 
spy2.notCalled // shows it was not called


#spy

we have a function inside another that we want to test
so we call the outer function and send a spy in 
this will call the inner function
the spy will tell us if we could call the inner function

it('should call save once', function() {

  // place a spy on Database.save call

  var save = sinon.spy(Database, 'save'); 

// let's call the outer function containing this call 

  setupNewUser({ name: 'test' }, function() { });  

// remove spy? 
  save.restore(); 

// was the spy called once? 

  sinon.assert.calledOnce(save);   
});

// this will actually call the function - but what if you don't want to? 

# SHIT CODE

function setupNewUser(info, callback) {
  var user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

// the function we are testing: 

  try {
    Database.save(user, callback); // we call a database function
  }
  catch(err) {
    callback(err);
  }
}