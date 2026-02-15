





```js
function help() {
  console.log('aa')
}
```



**Inline Handler**

in an inline handler, the attribute text is essentially just `eval`ed, so 

this does nothing: 

```html
<div onclick="help">aaaaa</div>
```

this does something:

```
<div onclick="help()">aaaaa</div>
```

**Javascript Handlers**

This doesn't throw an error (because `handler` is referenceable), but it doesn't run `handler` either, because you're only referencing the function, not calling it.

```coffeescript
div.onclick = () => {
	help;
};
```

Here, you are passing a *reference* to `handler` to the `onclick` internals, which then *call* that reference later, when the button is clicked.

```ini
btn.onclick = handler;
```

https://stackoverflow.com/questions/56271111/how-is-inline-onclick-evaluated