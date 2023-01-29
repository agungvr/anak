# compose

## Usage

```ts
import { compose } from 'tampan-lib/helpers'

const add = (x: number) => x + 1;
const multiply = (x: number) => x * 2;
const addThenMultiply = compose(add, multiply);

console.log(addThenMultiply(2)); // Output: 6
```

## Explanation
This function takes in a starting function (fn1) and any number of additional functions (fns) as its arguments. The functions are composed together using the reduce method, with the starting function as the initial accumulator. The composed function takes in a single value (value), and applies each function to it in the order they were passed in, starting with fn1 and ending with the last function in the fns array.

The compose utility is useful for creating a new function by combining several smaller functions, and apply them one after another, making the code more readable.