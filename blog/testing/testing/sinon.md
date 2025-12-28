sinon

function far(){
  console.log('hi')
}

const x = sinon.spy(this, 'far');
far();
far();
console.log(x.calledTwice) // true



