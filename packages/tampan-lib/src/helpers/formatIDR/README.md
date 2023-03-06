# formatIDR

This module exports a single function formatIDR that takes a number and returns a string formatted as IDR currency.

## Usage

```ts
console.log(formatIDR(1000)); // "Rp 10.000"
console.log(formatIDR(123456789)); // "Rp 1.234.567"
```

#Note
This library use Intl.NumberFormat, which is not supported in some older browser. If you need to support older browsers, you can use a polyfill such as intl or intl-format-cache.

