var original = [6,4,0, 3,-2,1]

for (var first = 0; first<original.length-1; first++) {
  for (var second = first+1; second<original.length; second++) {
    if (original[first]> original[second]) {
      var temp = original[first]
      original[first] = original[second]
      original[second] = temp
    }
  }

  }
  if (first == original.length-1) {
    console.log(original)
}
