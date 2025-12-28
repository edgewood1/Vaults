// Generators pause at set check points
// yield means pause

function* simpleGenerator() {
    yield 'apples';
    yield 'bacon'; 
    console.log('ok, this is true');
    yield 'corn';
}

let simple = simpleGenerator();
console.log(simple.next().value)  // apples
console.log(simple.next().value)  // apples bacon
console.log(simple.next().value)  // results all


function* getNextId() {
    let id=0;
    while (id<3) 
        yield id++
        
}

let createUser = getNextId();
console.log(createUser.next().value);  // 0 
console.log(createUser.next().value);  // 1