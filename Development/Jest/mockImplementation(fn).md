- Chains onto `jest.fn()` or `jest.spyOn()`.
- Provides a custom implementation for the mock function.
- Allows for more complex mock behavior beyond simple return values.


**1. Custom Implementations (`mockImplementation`)**

- **What it is:**
    
    - A custom implementation is a function you provide to `jest.fn()` or `jest.spyOn()` to define the behavior of the mock.
    - It replaces the default mock behavior, allowing you to create more complex or dynamic responses.
- **Does it return a function?**
    
    - No, `mockImplementation` _takes_ a function as an argument.
    - That function is then executed whenever the mock is called.
    - The _return value_ of that function becomes the return value of the mock.
    - Example:
    
    JavaScript
    
    ```
    const myMock = jest.fn().mockImplementation((arg) => {
      if (arg > 10) {
        return 'large value';
      } else {
        return 'small value';
      }
    });
    
    console.log(myMock(5)); // Output: small value
    console.log(myMock(15)); // output: large value
    ```
    


