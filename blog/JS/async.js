const api = () => {
   return new Promise((res, rej) => {
     setTimeout(()=> {
       // this will appear in catch
       
       rej('error')
     }, 2000)
   })
}

// call one
const alpha = async () => {
  try {
  await api();
    // flow if previously res() or return 
  console.log('no err', x)
  } catch(err) {
    // flow if previously rej() or throw
    console.log('err', err)
    // this will appear in try:
    // return err 
    // this will appear in catch: 
    throw new Error(err)
  }
}

const eugene = async () => {
  try {
  const r = await alpha();
    console.log('ok')
    return r
  console.log('await row', r)  
  } catch(err) {
    console.log('await woops', err)
    // return err
    throw new Error(err)
  }
	
}
const test = async () => {
  try {
  const x = await eugene();
  console.log('result ', x)  
  } catch(err) {
    console.log('hi')
  }
}

console.log('test', test())

const x = {name: 'mel'}
console.log('here', Object.hasOwn(x, 'name'))
// const charl = () => {
//   return new Promise((res, rej) => {
//   console.log('hir')
//   api().then(done => {
//     console.log('char', done)
//   	res(done)
//   }).catch(err => {
//     rej(err)
//   }) 
  
// nonNested
function nonNested(x, y) {
  x.b = 3;
  if(x.b == y.b) return 'shallow';
  return 'deep';
}
// nested
function nested(x, y) {
  x.c.nested = 4
  if(x.c.nested == y.c.nested) return "shallow"
  return "deep"
}
const a = {b: 1, c: 2};
const e = Object.assign({}, a); 
console.log(nonNested(a, e)); // deep  
// nested
const f = {b: 1, c: {nested: 2}}; 
const j = Object.assign({},f); 
console.log(nested(f, j)); // shallow

const info = {
  properties: {
  user_agent: 'healthchecker'
}
}

const log = info.properties.user_agent.includes('healthchecker')

console.log(log)

let timerID = -1;
const debounce = (func, wait) => {
  

  return (...args) => {
    clearTimeout(timerID);

    const promiseForFunc = new Promise((resolve) => {
      timerID = setTimeout(resolve, wait);
    });

    return promiseForFunc.then(() => func(...args));
  };
};

try {
 debounce(()=> {throw new Error('hi')}, 44)();
} catch(err) {
  console.log('err', err)
} 
// az().then(() => {
//   console.log('hi')
// })


const db = (func, wait) => {
	return new Promise((res, rej) => {
    setTimeout(()=> {
      try{
        res(func())
      } catch (err) {
        console.log('error', err)
        rej(err)
      }
    }, wait)
  })  
}


const xa = () => {
  return db(()=> {throw new Error('hi')}).catch(err => {
    console.log('wow', err)
    throw new Error(err);
  })  
}

const y = async () => {
try {
  await xa()
} catch (err) {
  console.log('sha', err)
}  
}

y()


// scoping
 
function hi(x) {
  x = 0
  function y() {
    x=59
  }
  y()
  return x
}

let xxx = 5;
hi(xxx)
console.log(xxx)


const delay2 = async () => {throw new Error('bad')}

const test2 = () => new Promise((res, rej) => rej(7))

// catch will recieve throw new Error

delay2().then(data => {
    console.log(data+3) 
}).catch(err => {
  console.log('o', err)
})

const test3 = async() => {
  try {
  const aa = await delay2(); // cauuses things to stop
  } catch(err) {
    console.log('error test3', err) 
  }
    
}

// test3()
// prom return // Promise {undefined} ... 10

const arr = [1, 2, 3]

const result = arr.reduce((ac, i) => ac + i);

console.log('here', result)


// create mock
const today = new Date();
const userPrimeExpiresMock = new Date(today.getFullYear(), today.getMonth(), today.getDate() + -12).toDateString()
// const userPrimeExpiresMock = undefined;
// calculate prime

const diff = userPrimeExpiresMock ? (new Date(userPrimeExpiresMock) - new Date()) : 0;
const days = Math.ceil(diff/86400000);
const userPrimeRemaining = (days > 0 && days <=14)
console.log('mock shows 12 days past', userPrimeRemaining)
// const diff = new Date(userPrimeExpiresMS.toLocaleDateString()) - new Date();
// why would you convert this to locate Date string? that's how it started.
 const slow = "the do's and a test";

console.log(slow.replace(/\s/g, '_'))
 
// if (diff > 0) {
//   console.log('good')
//   // conosle.log('here', usePrimeExpiresMS)
// 	// const userPrimeRemaining = userPrimeExpiresMS.getDate() - new Date().getDate();
// 	// console.log(userPrimeRemaining); // 12
// // const userPrimeRemaining = new Date(diff).getDate()
// // console.log(userPrimeRemaining)
// } else {
//   console.log('bad')
// }
// console.log((userPrimeExpiresMS - new Date());
// const userPrimeRemaining = userPrimeExpiresMS.getDate() - new Date().getDate();
// console.log(userPrimeRemaining); // 12
// console.log(new Date(`${userPrimeExpiresMock} 00:00:00`) - new Date().getDate());)

// console.log(yy);

// console.log(xx.getDate());

