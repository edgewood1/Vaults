function Stack() {
    let items = [];

    //this adds on an item to the END of an array
    this.push = function(element) {
        items.push(element)
    }

    //this removes the last item
    this.pop = function() {
        return items.pop()
    }

    // this returns the last item
    this.peek = function() {
        var msg = "peek: ";
        return `${msg} ${items[items.length-1]}`;
    }

    // this returns 'true' if stack is empty
    this.isEmpty = function() {
        return items.length == 0;
    }

    // this returns the size of the stack
    this.size = function() {
        return items.length;
    }

    // this prints all the items in the stack

    this.print = function() {
        console.log(items.toString())
    }

    // this clears the stack

    this.clear = function() {
        items = []
    }


}

// let stack = new Stack();

// Math.floor - rounds a number down to its nearest integer

// decNumber = 44

function div(decNumber) {
    var remStack = new Stack(), rem, binaryString = '';

// Math floor rounds a number DOWNWARD
// so 1.6 > becomes 1
// 1.9 becomes 1

    while (decNumber > 0) {
        console.log(decNumber)
        // 44 % 2 =0 (rem, pushed on remStack) 
        // 22 & 2 = 0
        // 11> 1
        // 5 > 1
        // 2 > 0
        // 1 (dividend) /2 (divisor) = 0 (quotient), 0*2 = 0, 1-0 > 1
        rem = Math.floor(decNumber % 2)  // 0, 0, 1, 1, 0, 1
        remStack.push(rem) // 0 is pushed
        //44/2 = 22 (decNumber, pushed on decNumber)
        // 22/2 = 11
        // 11/2 = 5
        // 5/2 = 2
        // 2/2 = 1
        //1 /2 = 0 /end game
        decNumber = Math.floor(decNumber / 2)  // 44/22/11/5/2/1/0
  
    }

    // so remStack = 001101
    // remove last element of array and add to string
    // 101100

    while (!remStack.isEmpty()) {

        binaryString += remStack.pop().toString();
    }
    return binaryString
}

console.log(div(44))

