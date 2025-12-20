
- Replaces an existing object's method with a mock function.
- Retains the original method's implementation, allowing you to call it.
- Useful for observing how a specific method is called while still running its original code.
- Very good for testing side effects of a function.

Notes
* modules are treated as object (in JS) especially ES modules
* Their exported functions and variables become properties of the module object.
* Therefore, you _can_ use `jest.spyOn` on methods exported from a module.
* This is particularly useful when you want to observe how a module's method is called while still allowing it to execute its original code.
    
    JavaScript
    
    ```
    // myModule.js
    export const myFunction = (value) => {
      console.log('Original function called');
      return value * 2;
    };
    
    // myModule.test.js
    import * as myModule from './myModule';
    
    test('spy on myFunction', () => {
      const spy = jest.spyOn(myModule, 'myFunction');
    
      const result = myModule.myFunction(5);
    
      expect(spy).toHaveBeenCalledWith(5);
      expect(result).toBe(10);
      spy.mockRestore(); //restores the original function.
    });
    ```
    
- **Important Considerations:**
    
    - When you use `jest.spyOn`, it's crucial to restore the original method after your test using `spy.mockRestore()`. This prevents side effects in other tests.
    - When using ES modules, you must import the module using `import * as modulename from './module'`to create the module object, and then call spyOn using the module object.

Points to: 
[[mockReturnValue()]] 
[[mockImplementation(fn)]]

Mocking State

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

jest.spyOn(React, 'useState').mockImplementation((initial) => [
  initial,
  jest.fn()
]);

test('mocking useState', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: 'Increment' });
  fireEvent.click(button);
  expect(React.useState).toHaveBeenCalled();
});
