# Query Params Heplers

## Usage

## queryObjToString 

```ts
const data = {
    name: 'John',
    age: 30,
    isStudent: true,
};

console.log(queryObjToString(data)); 
// Output: "?name=John&age=30&isStudent=true"

const data = {
    name: 'John',
    age: 0,
    isStudent: false,
};

console.log(queryObjToString(data)); 
// Output: "?name=John&age=0&isStudent=false"

const data = {
    name: 'John',
    age: undefined,
    isStudent: null,
};

console.log(queryObjToString(data)); 
// Output: "?name=John"
```

## queryStringToObj

queryStringToObj<T>(qs: string) => T

```ts
interface UserType {
  name: string;
  age: number;
}

const user: UserType = queryStringToObj<UserType>("name=Bob&age=35")
console.log(user) // { name: "Bob", age: 35 }

```

## getParamsFromUrl

```ts
const obj = { a: 1, b: 2, c: 3 };
const removedObj = removeObjFromArray(obj, ['a', 'c']);
console.log(removedObj); // { b: 2 }
```

## queryParamsURL

A utility that allows you to easily get, set, and remove query params from the URL.

## Get Query Params

You can get the query params from the URL by calling the get method:

```ts
const queryParams = queryParamsURL.get() // { name: "Agung", age: 17 }
```

## Set Query Params

You can set query params to the URL by calling the set method and passing in an object

```ts
queryParamsURL.set({ key1: 'value1', key2: 'value2' })
```

## Update Query Params

You can update query params to the URL by calling the update method and passing a function that returns an object.

```ts
queryParamsURL.update((qs) => ({ ...qs, param1: 'newValue' }))
```

## Remove Query Params

You can remove query params from the URL by calling the remove method and passing in an array of keys to be removed.

```ts
queryParamsURL.remove(['key1', 'key2'])
```

## Reset Query Params

You can remove the current query params from the URL and leave the base URL (origin + pathname) intact.

```ts
queryParamsURL.reset()
```