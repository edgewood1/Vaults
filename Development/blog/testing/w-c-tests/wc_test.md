https://dev.to/open-wc/testing-workflow-for-web-components-g73

1. await fixture / expect(el.label)... checks constructors
2. el.shadowDom ... checks get Template()
3. el.lightDom .. checks any document. added to slots
4. ignoreChildren ... allows checking nested components
5. shnapshot testing---  
  a. expect(el).shadowDom.to.equalSnapshot();
  b. npm run test / npm run test:update-snapshots
6. code coverage  -- shows you what parts of code still need testing
7. sinon spy - const logSpy = sinon.spy(object, "function")
-- in our case, the object is the await fixture(html`<my-elemnnt...)
 -- expect(logSpy.callCount).to.equal(1);


 __update snapshots__

 npm run test:update-snapshots

__see coverage__

 open coverage/index.html

 watch mode: 

 

https://open-wc.org/testing/testing-helpers.html#test-fixtures

If component has an attribute, you could check it - 

it('can instantiate an element', async () => {
  const el = await fixture('<my-el foo="bar"></my-el>');
  expect(el.getAttribute('foo')).to.equal('bar');
}

or? 

  const el = await fixture(html`<my-el .foo=${'bar'}></my-el>`);
  expect(el.foo).to.equal('bar');

    
// Essentially, fixture creates a synchronous fixture, then waits for the element to finish updating, checking updateComplete first, then falling back to componentReady(), and nextFrame() as a last resort.
  
const el = await fixture(html`<my-el .foo=${'bar'}></my-el>`);
expect(el.foo).to.equal('bar');

// vs

const el = fixtureSync(html`<my-el .foo=${'bar'}></my-el>`);
await elementUpdated(el);
expect(el.foo).to.equal('bar');

elementUpdated
If you want to test attribute and property changes, and an easy way to wait for those changes to propagate, you can import the elementUpdated helper (also available directly in the testing package)

import { fixture, elementUpdated } from '@open-wc/testing';
import '../my-component.js';

describe('Attributes', () => {
  describe('.title', () => {
    //...
    it('is bound to the `title` attribute', async () => {
      const el = await fixture('<my-component title="test"></my-component>');
      expect(el.title).to.eq('test');

      el.title = "test 2"
      await elementUpdated(el)
      expect(el).dom.to.equal(`<my-component title="test 2"></my-component>`);
    });
    //...
  })
});