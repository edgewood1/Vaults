// bubble sort
 
var now = [7,5,2,4,3,9]
var less = [9,7,5,4,3,1]
var here = [1,2,3,4,5,6]
function sort(arr) {
  var x = arr.length;
  // check the first number
  // final position = length - 1
  // so if the first numbers position is less than length-1, increase it

  for (var i=0; i<=x-1; i++) {
   // check the number after it
   // if the second number is less than first, sway
   // keep increasing until we reach final position (x-1)
    for (var j=i+1; j<=x-1; j++) {
      if (arr[i]>arr[j]) {
        // the swap
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr)
}

sort(now)
 