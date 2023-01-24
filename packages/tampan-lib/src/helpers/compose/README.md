# compose

## Usage

```ts
import { compose } from '@agungvr/tampan-lib/helpers';

const double = (x: number) => x * 2;
const square = (x: number) => x * x;
const doubleThenSquare = compose(double, square);
```
