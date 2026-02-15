sinon


##stubs

stubs replace a target function, allowing a person to return certain values
- use to replace problmatic code
- use to trigger code paths not othewise triggered
- use to help toest async code


function test() {
  return "man"
}

sinon.stub(window, 'test').returns("wow")


var result = test()
console.log(result) // wow

#mocks

- can do everythin a spy or sub can
- used in the same way as a stub, except for verifying muliple more specifc behaviors

###EXAMPLE OF STUBS AND MOCKS

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



#stub



it('should pass object with correct values to save', function() {
  
  // stub the inner function
  var save = sinon.stub(Database, 'save');

  var info = { name: 'test' };
  var expectedUser = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

 // 2. call the outer function
  setupNewUser(info, function() { }); 

// 3. restore
  save.restore(); 

  // 4. when we called the outerfunction, were we able to call the inner with 'expectedUser'?
  
  sinon.assert.calledWith(save, expectedUser); // 
});