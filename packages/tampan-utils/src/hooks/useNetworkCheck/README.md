# useNetworkCheck

## Usage

```ts
import { useNetworkCheck } from './@agungvr/tampan-utils';

const NetworkStatus: React.FC = () => {
  const isOnline = useNetworkCheck();
  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
};
```
