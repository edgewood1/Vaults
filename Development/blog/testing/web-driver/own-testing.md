<head>
<style>
.a {margin-left: 25px }
</style>
</head>

> install node
  
> setup project

  `mkdir webdriverio-test && cd webdriverio-test`
  `npm init -y`

> install webdriverIO cli

`npm i --save-dev @wdio/cli`

<span class="a"> - since WebdriverIO version 5, the testrunner is in the @wdio/cli NPM package.</span>

> Generate config file: 

`npx wdio config -y`

> create spec files

`mkdir -p ./test/specs`
`touch ./test/specs/basic.js`

> write the test

```
const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://cs-feature.')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })
})
```
> run the test: 

`npx wdio wdio.conf.js`

> sources

https://webdriver.io/docs/gettingstarted.html