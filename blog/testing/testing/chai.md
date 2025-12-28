chai assertions

Two general styles: 

1. Chain-capable BDD style - uses assert-dot notation, like node.js
2. Classical TDD style - chain together natural language assertions

Three interfaces - 3 styles of performing assertions

1. Assert - Classical: 
2. Expect - BDD style
3. Should - BDD style


var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);