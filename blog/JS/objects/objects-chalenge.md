If you take a look at the js code [produced](https://babeljs.io/repl#?browsers=ie 10&build=&builtIns=usage&corejs=3.6&spec=false&loose=false&code_lz=KYDwDg9gTgLgBAKjgMyhAtnARAOgPQCuAzsFALQDGEAdjKDFgNxA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env%2Creact&prettier=false&targets=&version=7.16.3&externalPlugins=&assumptions={}) for a re-export it looks like this

```js
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require("context");

Object.keys(_context).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _context[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _context[key];
    }
  });
});
```





Write a program that uses objects iin this way. 