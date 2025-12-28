class Base {
   constructor() {  this._val = 1   }
   get val()     { return this._val }
  set val(e) {this._val = e}
}

class Xtnd extends Base {
   get val()     { return super.val } // 1
   set val(v)    { this._val = v } // ? 
  set val2(v) { super.val = v} // 
}

let xo = new Xtnd();
let yo = new Base()
 
Base.prototype.test = 
