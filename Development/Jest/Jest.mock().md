
Jest.mock(module name, factory, options)

- Replaces an entire module with a mock implementation.
- `factory` provides the mock implementation.
- `options` provides configuration for the mock.
- Ideal for isolating unit tests from external dependencies (modules).

```js
jest.mock('./myModule', () => ({
      myFunction: jest.fn().mockReturnValue('mocked value'),
    }));

import { myFunction } from './myModule';

test('myFunction returns mocked value', () => {
  expect(myFunction()).toBe('mocked value');
});
```

Points to: 
[[Jest.fn()]]