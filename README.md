# proto-diff-pattern

> :warning: This library is experimental

# Usage

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

/////////////////////////////////////////////////////////

newFoo.bar.baz -> "Loreum eposium" // Stores new value

newFoo.bar.__proto__.baz  -> "Hello World" // Proto stores old value

```

`foo` variable has following object structure:

```yml
foo:
  - bar
    - baz: "Hello World"
```

`createFromNested` returns new object that has same object structure inside proto as following:

```yml
foo:
  __proto__: 
    - bar
      __proto__:
        - baz: "Hello World"
```

When you change any value of `newFoo`, changes will be assigned to own property instead of `__proto__`. That results that old value and new value are store in the same object.

```js
newFoo.bar.baz = "Loreum eposium";
```


```yml
foo:
  __proto__: 
    - bar
      - baz: "Loreum eposium" // new value
      __proto__:
        - baz: "Hello World" // old value
```

# License

MIT
