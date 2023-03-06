# Validation

## Usage 

### isEqual

isEqual(a: unknown, b: unknown): boolean

```ts
let obj1 = {a: 1, b: {c: 2}};
let obj2 = {a: 1, b: {c: 2}};
let obj3 = {a: 1, b: {c: 3}};

console.log(fastEquals(obj1, obj2)); // true
console.log(fastEquals(obj1, obj3)); // false

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [3, 2, 1];

console.log(fastEquals(arr1, arr2)); // true
console.log(fastEquals(arr1, arr3)); // false

let num1 = 42;
let num2 = 42;
let num3 = 84;

console.log(fastEquals(num1, num2)); // true
console.log(fastEquals(num1, num3)); // false
```



### - isPhoneNumber

isPhoneNumber(phoneNumber: string, pattern = /^(+62|62|08)(\d{9,12})$/g)

```ts
console.log(isPhoneNumber('+6281234567890')) // true
console.log(isPhoneNumber('081234567890')) // true
console.log(isPhoneNumber('621234567890')) // true
console.log(isPhoneNumber('1234567890')) // false

```

### - isEmail

isEmail(email: string)

```ts
console.log(isEmail('example@domain.com')) // true
console.log(isEmail('example@sub.domain.co.uk')) // true
console.log(isEmail('example.email@domain')) // false
```

### isValidURL

isValidURL(url: string)

```ts
console.log(isValidURL('https://www.example.com')); // true
console.log(isValidURL('www.example.com')); // false
console.log(isValidURL('ftp://ftp.example.com')); // true
```