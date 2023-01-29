# Validation

## Usage 



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