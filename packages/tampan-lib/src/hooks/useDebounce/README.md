# useDebounce

A custom React hook for debouncing a value with a specified delay.

## Usage

```ts
import { useState } from 'react';
import { useDebounce } from 'use-debounce-hook';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  function handleSearch() {
    console.log(`Searching for ${debouncedSearchTerm}...`);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
```

## Parameters

value: The value you want to debounce

delay: The debounce delay in milliseconds

## Returns
The debounced value.
