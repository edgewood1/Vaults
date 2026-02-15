function wait() {
  return new Promise(function(resolve) {
    console.log("1 ");

    setTimeout(function() {
      console.log("2");
      // this will fire whatever promised then callback.  It can also carry a value
      resolve(4);
    }, 2000);
  });
}

// the function wait will return a promise, passed on to 'then'
wait().then(finish);

function finish(x) {
  console.log("3");
  console.log(x);
}
