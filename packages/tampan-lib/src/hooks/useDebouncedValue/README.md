# useDebouncedValue

This hook allows you to debounce any value changes, for example when you want to wait for the user to stop typing before making an API call.

# Usage

```ts
import { useDebounceInput } from '@agungvr/tampan-lib'


const [search, handleSearch] = useDebounceInput({
    onChange: (value) => dispatch(...),
})

<TextField
    placeholder="Cari SKU / Nama Produk"
    value={search}
    onChange={(e) => handleSearch(e.target.value)}
    />
```

## API

The hook takes three arguments:

    value: the value you want to debounce

    callback: the function to be called when the debounced value changes

    delay: the debounce delay in milliseconds (default: 500)

It returns an object with a single method:

    handleChange: a function that takes the new value as an argument and updates the debounced valu