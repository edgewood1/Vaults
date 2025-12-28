// this is a constructor function
// it's named with an upper-case first letter
// it creates an ojbect with an "add" property
// this "add" property uses two variables, length and head
// it also requires that we construct other objects? 

function LinkedList() { 
    var length = 0; 
    var head = null; 

  // constructor function#2 used inside the add property.
    var Node = function(element){
      this.element = element; 
      this.next = null; 
    };

    console.log(this)

    this.add = function(element){
        // this creates a new object using constructor #2
        var node = new Node(element);
        console.log(node)
        if(head === null){
            head = node;
        } else { // head is NOT null (if there is list not empty)
            var currentNode = head; // make currentNode the head object
    
            while(currentNode.next){   // access 
                currentNode  = currentNode.next;
            }
    
            currentNode.next = node;
        }
    
        length++;
      };  

    this.show = function() {
        var x = head
       console.log(x)
    }
    this.show2 = function() {
        // for () {
            console.log("---show2---")
            console.log(head.element);
            console.log(head.next.element);
            console.log(head.next.next.element)
            // console.log(head.next.next)
        
        // }
    }

    this.show3 = function(position) {
        var current = head,
            previous
            index = 0;

        while (index++ < position) {
            previous = current;
            current = current.next;
        }
        

    
        console.log(current.element)
  

        // console.log(head[y].element);
        // console.log(head.next.next.element)
           
        }
    }



// "new" is an operator that searches "linkedList" for a constructor
// when it finds one, it creates an object modeled on the constructor and calls it "conga"
// in the "linkedList" function, the constructor is the object, so any "this" within it

// this creates a linked list called "conga"
var conga = new LinkedList()

// now I can add endless items to this list: 

conga.add("apple"); // this is "head" - an object with element "apple" and next: null
conga.add("cat"); // the head object -  element: "apple / next: { element: cat, next:null }
conga.add("dog"); // head is {element: apple, next: {element: cat, next: {element: dog, next: null}}} 
// so we have an object, whose 2nd property is an object, whose 2nd prop is an object, etc
conga.add("last")

// console.log(conga)
conga.show();

conga.show2();
conga.show3(2)