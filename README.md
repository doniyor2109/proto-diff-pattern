# proto-diff-pattern (experiment)

Prototypical object diffing design pattern 

```js
const { createFromNested } = require('./index');

const foo = {
  bar: {
    baz: "Hello World"
  }
};

const newFoo = createFromNested(foo);

newFoo.bar.baz = "Loreum eposium";

newFoo.bar.baz // "Loreum eposium"

newFoo.bar.__proto__.baz // "Hello World"

```
