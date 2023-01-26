# useNetworkCheck

## Usage

```ts
import { useNetworkCheck } from './@agungvr/tampan-lib'

const NetworkStatus: React.FC = () => {
  const isOnline = useNetworkCheck()
  return <div>{isOnline ? 'Online' : 'Offline'}</div>
}
```
