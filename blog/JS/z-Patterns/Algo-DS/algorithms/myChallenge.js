
function pi(){
  var y=3;
  var t=true;
  var p = 1-(1/y)
  for (var i=0; i<1000; i++) {
    t = !t;
    y=y+2
   if (t) { 
      p=p-(1/y)
   } else {
      p=p+(1/y)
   }
}
   p=p*4;
   console.log(p)
}

pi()

// / pi = 4 (1 - 1/3 + 1/5 - 1/7 ....)


// var x = ['abcde']
// console.log(x[0].slice(2, 4))


// function difference(x, y) {
//   var a = [];
//   var c = x.concat(y)
//   c.forEach(e => {
//     if (!a.includes(e)) {
//         a.push(e)
//         }
//   })
//   console.log(a)
// }
// difference([1, 4, 4, 2, 3], [100, 2, 1, 10])

function values(x) {
  var z = x.filter(e => {
//     if (!e === undefined){
      return e
//     }
  })
  console.log(z)
}

values([58, '', 'abcd', true, null, false, 0])