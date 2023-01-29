# useNetworkCheck

## Usage

1. Import the hook:

```ts
import { useNetworkCheck } from '@agungvr/tampan-lib'
```

2. Use the hook in a component:

```ts
const MyComponent = () => {
  const isOnline = useNetworkCheck();

  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}
```

## Explanation
This hook allows you to check the online/offline status of the user's device. It uses the useState hook to keep track of the current status, and the useEffect hook to listen for changes to the online/offline status. When the component that uses this hook is mounted, it sets up event listeners for the online and offline events on the window object. When the component is unmounted, it removes those event listeners.

The hook returns a boolean value indicating whether the user's device is currently online or offline. You can use this value in your component to display appropriate content or take other actions based on the user's connection status.