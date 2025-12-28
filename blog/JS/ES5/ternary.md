myName = true
myAge = true

// if myName evaluates as true, then use "Mel", else "none"


myName ? "Mel" : "none";

//variable assignment: here the result is stored in "msg"
// if myName = true, then msg="mel"

var msg = myName ? "Mel" : "none";
console.log(msg)
// or we can reassign a different variable
// if myName is true, then age = true + msg = true, else msg = none
var msg = myName ? age = true : "none"

console.log(msg)
    
console.log(age)

// functions
// if dog is true, return home else away

function myPet() {
  return dog ? "home" : "away"
}

// multiple conditions
// if myName is true, msg="ageless" else if myage is true, msg= old, but if false, msg = baby

msg = myName ? (myAge ? "old" : "baby") : "ageless"

console.log(msg)

var home = true
// multiple operations per condition - seperate with commas
// can define variables inside the operation

home ? (
  console.log("home"), 
  home = false, 
  console.log(false)
) : console.log("not home")


// ternarys essentially return something
console.log(1+2==3 ? "true" : "false")

var x = 1+2==3 ? "true" : "false"
console.log(x)

/// this could set off red flags

Alternatively modify the ternary operation to have L.H.S expression

this.state.seconds % 59 === 0 && this.state.seconds !== 0 ? minute += 1:null;

Change by

minute = this.state.seconds % 59 === 0 && this.state.seconds !== 0 ? minute + 1:null;



