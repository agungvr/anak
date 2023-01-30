# compose

## Usage

```ts
const add = (x: number) => x + 1;
const multiply = (x: number) => x * 2;
const addThenMultiply = compose(add, multiply);

console.log(addThenMultiply(2)); // Output: 6
```

