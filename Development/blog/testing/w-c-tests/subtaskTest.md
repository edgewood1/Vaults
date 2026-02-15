subtask test

// test

feed it row values

click three-dots

is row selected? 

// test 2

feed it values

click select all

click three dots

is only 1 row selected? 

import { fixtureSync } from '@open-wc/testing-helpers/src/fixture';
import { nextFrame } from '@open-wc/testing-helpers/src/helpers';


  it.only('test', async () => {
    const el = await fixtureSync('<inbox-page foo="bar"></inbox-page>');
    expect(el.getAttribute('foo')).to.equal('bar');
    console.log(el);
  });