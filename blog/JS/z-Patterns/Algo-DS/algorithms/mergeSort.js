var original = [6,4,0, 3,-2,1]
var mid, first, second
mid = original.length/2
var newarr =[]
var x
// slice arrays in half
first = original.slice(0, mid) // has 3 items
second = original.slice(mid)  // has 3 items

// order the first item
var stuff = [first, second]
console.log("original ", stuff)
function s(first) {  
  for (let i = 0; i <first.length-1; i++) { 
    for (let j = 1; j <first.length; j++) {
  if (first[i] > first[j]){
    var temp = first[i]
    first[i] = first [j]
    first[j] = temp
    
   
   
}
}
}
return first}
console.log(stuff.length)
for (var i = 0; i < stuff.length; i++) { 
  console.log(i)
   var next = stuff[i]
   console.log(next)
   x = s(next)
  console.log(x)
   
   newarr.push(x)
  //  console.log("end ", newarr, i)
   if (i==1) {
    console.log("end " ,newarr)
     last(newarr)
   }
}


// this needs to merge both arrays ****
function last(x) {
  console.log("last", x)
  for (var i = 0; i <x[0].length; i++) {
    for (let j = 0; j <x[1].length; j++) {
    if (x[0][i]<x[1][j]) {
      x.splice(i, 0, x[1][j])

    } else if (x[0][i]>x[1][j]) {
      x.splice(i+1, 0, x[1][j])
    }

  }
  if (i==x[0].length) {
    console.log("very end " , x)
  }
}

}



// for (i=0; i<first.length-1; i++) {
//   for (j=1; j<first.length; j++) {
//   if (first[i]>first[j]) {
//     var temp = first[i];
//     first[i] = first[j]
//     first[j] = temp
 
//   }

// }
// if (i==first.length-2) {
//   console.log(first)
//   console.log(second)
  
// }
// }
