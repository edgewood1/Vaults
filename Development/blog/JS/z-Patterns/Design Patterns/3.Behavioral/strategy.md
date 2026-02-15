




// class main {
//   constructor(strat) {
//     this.strat = strat
//   }
//   dis() {
//     console.log(this.strat)
//   }
// }

// class a extends main {
//   constructor(name){
//     super(name);
//   }
// }

// class b extends main {
//   constructor(name){
//     super(name);
//   }
// }



// new a('hi').dis();
// new a('go').dis();
 
// abstract classes. The ability to specify a class that defines how child classes should look, more specifically ensuring they specify certain methods.


// https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript


// below
// https://www.lambdatest.com/blog/comprehensive-guide-to-javascript-design-patterns/



class o {
  calculate() {

  }
}

// strategy classes

class a extends o{
  calculate(z) {
    console.log(z)
    return 'a'
  }
}

class b {
  calculate(z) {
    return 'b'
  }
}

// manager

class manage {
  setStrat(company) {
    this.company = company
  }
  calculate(pack) {
    return this.company.calculate(pack)
  }
}

// implement

const aa = new a();
const bb = new b();
const man = new manage();
man.setStrat(aa);
const x = man.calculate('hi');
console.log(x)