# compose

## Usage

```ts
import { compose } from 'tampan-utils/helpers';

const double = (x: number) => x * 2;
const square = (x: number) => x * x;
const doubleThenSquare = compose(double, square);
```
