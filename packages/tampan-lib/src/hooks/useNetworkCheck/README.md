# useNetworkCheck

## Usage

```ts
const MyComponent = () => {
  const isOnline = useNetworkCheck();

  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}
```

