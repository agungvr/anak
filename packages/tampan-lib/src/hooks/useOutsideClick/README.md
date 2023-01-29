# useOutsideClick

A React hook that allows you to detect clicks outside of a specified element.

## Usage

To use the useOutsideClick hook, you need to import it in your project:

```ts
import useOutsideClick from '@agungvr/useOutsideClick';
```

The hook takes in a single argument, the DOM element that you want to detect clicks outside of. You can pass in the ref of the element using the useRef hook.

```ts
const ref = useRef(null);
useOutsideClick(ref, () => {
  // callback function to run when a click outside the element is detected
});
```

You can also add an additional parameter to the function to specify the events you want to detect.

```ts
const ref = useRef(null);
useOutsideClick(ref, () => {
  // callback function to run when a click outside the element is detected
}, ["mousedown", "touchstart"]);
```

Make sure to wrap your element with the ref.

```ts
<div ref={ref}>
  {/* Your element */}
</div>
```

## Example

```ts
import React, { useRef } from 'react';
import { useOutsideClick } from '@agungvr/useOutsideClick';

function MyComponent() {
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    // do something when the outside of the element is clicked
  });

  return (
    <div ref={ref}>
      {/* Your element */}
    </div>
  );
}

export default MyComponent;
```