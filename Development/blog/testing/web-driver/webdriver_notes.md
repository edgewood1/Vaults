### WEBDRIVER DOCS

__1. Setup your server:__ 

> __a. Get test apis from engineering drives__

- Go to VM or remote into your server > 

- remote into cs-feature: eng_master Engpa$$11

- in file explorer, go to: `\\engineering\Development\builds\master\build_dump\assemblies\CsTestApi`

- install this

- use "command-k" in finder to pull up network

> __b. Configure firewall__

Log into the server that you'll target and click on the following: 

- start menu
- in search box, type in: firewall
- windows firewall
- advanced settings
- inbound rules
- new rules
- port
- tcp
- specific port: 8443 
- allow this connection
- always
- any-name 

close the windows firewall and disconnect from the server

__2. Install the webdriver__

> setup webdriver in terminal 1

- in the terminal, install globally: `npm install webdriver-manager -g`

- go to a second terminal and in **/mobile**, run the webdriver-manager update cmd, which grabs drivers for specific browser and stores in cpu - chrome / gecko (firefox): `webdriver-manager update`

- then, start the manager: `webdriver-manager start`

- The terminal will say: `Selenium Server is up and running on port 4444`

##### Q) should I have set the server's port to 4444?

> run the tests in terminal 2

- In a second terminal run: 

      `npm install mocha`

      `npm run test -- --server "https://cs-feature"`

- this creates a ts error: `Cannot find name 'browser'`
- to resolve, add the following to **mobile/tsconfig.json**:

  ```
    "include": [
        "./src/**/*.ts"
    ],
  ```

- This leads to the next ts error: 

  ```
    src/actions/inbox.ts:250:84 - error TS2304: 
    Cannot find name 'Site' . 250 export const assignToSite...
  ``` 
- This can be temporarily address by adding `//@ts-ignore` before the line.

- The result is a seemingly successful run. 

__3. Clone / Run tests__

> Get the tests
- From this github repo: **ehd-dev/cardioserver_web_tests**
- download zip (or clone) folder
- rename it: `cs-tests`
- move it into **mobile/test/unit**
> import and run tests
- Then, in **/mobile/test/unit/index.js**, add this line: `import './cs-tests/suite/mobile/CSA-2263.js';`
- in **test/unit/cs-tests**, run: `npm install`
- return to the parent **/mobile** directory and run:  `npm run test -- --server "https://cs-feature"`
> results

- this creates lots of errors due to missing modules, primarily: child_process, fs 

##### Q) How can these modules be resolved? 

> Example of Errors - fs is the most common

- ERROR in ./test/unit/cs-tests/node_modules/cross-spawn/index.js
Module not found: Error: Can't resolve 'child_process' in '/Users/meldejesus/Desktop/cardioServerApp/mobile/test/unit/cs-tests/node_modules/cross-spawn'
<br>
- ERROR in ./test/unit/cs-tests/node_modules/cross-spawn/lib/util/readShebang.js
Module not found: Error: Can't resolve 'fs' in '/Users/meldejesus/Desktop/cardioServerApp/mobile/test/unit/cs-tests/node_modules/cross-spawn/lib/util'
<br>
- ERROR in ./test/unit/node_modules/yargs/yargs.js
Module not found: Error: Can't resolve 'fs' in '/Users/meldejesus/Desktop/cardioServerApp/mobile/test/unit/node_modules/yargs'

> Notes

- use this path in independent testing:  `cs-deploy?cs=1`

- if you make changes to the tests, you'll need to recompile the typescript using the full path:  `node_modules/.bin.tsc`

> Sources

https://github.com/ehd-dev/cardioserver_web_tests 
