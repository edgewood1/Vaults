React Test library
- works with virtual dom
- comes with various queries, like ByRole, ByText



Test Runners
- jest, mocha, jasmine
- comes with some assertion
- runs / watches test
- global test > string description + test function


types of tests
unit - one unit of code in isolation (function or class) // mock dependencies // test state // easy to pinpoint failures / but users don't interact this way - so tests may pass but users may have trouble.  less tightly coupled to ux // more likely to break after refactoring.
integration - various units together
functional - tests a work flow - this can be done manually or via e2e // close to how users interact with software // robust test // more difficult to debug failing tests since not tightly coupled with code.  // react testing library focuses on this.
accesibility - 
e2e -  browser / server - cypress / selenium

side effect

our test might call a function that writes data to a server
this is a side-effect
but we dont' want to do that. 

Two ways to get rid of side-effects

Mock
- if a function needs to call an api, a db, or another function, these should be mocked.
- replace an API that returns test-specific behavior instead.

Spies
- wrappers around function
- empty replacements for functions that allow you to track if / how a function was called.

Below are variations? 

Stubs

Fakes

Stopped at 63 > working with spies > max / js unit testing

npm install eslint-plugin-testing-library eslint-plugin-jest-dom