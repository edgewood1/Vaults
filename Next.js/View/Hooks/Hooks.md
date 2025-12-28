
React hooks

  

UseState and useRef

- Both are hooks that allow you to add state-like capabilities to functional components 

  

Core Difference Between useState and useRef

  

UseState - manage statueful values that when updated cause re-render.  This data should directly influence the UI’s appearance and behavior.  

- value access: 

  

- useRef: creates mutable, persistent reference to a value that does not cause a re-render when updated.  These need to stay the same / persist across re-renders.  they shouldn’t directly affect the UI.  Think of it as a "box" where you can put any mutable value.

- Value Access: The current value is accessed through the .current property of the ref object, e.g., myRef.current.

  

  

Ways useRef Can Be Used

  

Accessing and Interacting with DOM Elements:  

  const inputRef = useRef(null);

  

  useEffect(() => {

    // Focus the input field when the component mounts

    inputRef.current.focus();

  }, []);

  return (

    <div>

      <input type="text" ref={inputRef} />

      <button onClick={handleSubmit}>Submit</button>

    </div>

  );

}

  
  
Storing Mutable Values That Don't Trigger Re-renders:  
You can use useRef to store any value that needs to persist across re-renders but doesn't require the component to re-render when it changes. This is useful for things like timers, previous state values, or any other data that's internal to the component's logic but not part of its reactive state.  
JavaScript  
  
import React, { useRef, useState, useEffect } from 'react';

2. function Timer() {
3.   const intervalRef = useRef(null);
4.   const [count, setCount] = useState(0);

5.   useEffect(() => {
6.     intervalRef.current = setInterval(() => {
7.       setCount(prevCount => prevCount + 1);
8.     }, 1000);

9.     return () => {
10.       clearInterval(intervalRef.current);
11.     };
12.   }, []);

13.   return <h1>Count: {count}</h1>;
14. }
15.   
      
      
    Storing Previous Props or State:  
    useRef is often used to keep track of the previous value of a prop or state variable.  
    JavaScript  
      
    import React, { useRef, useEffect } from 'react';

16. function PreviousValueDisplay({ value }) {
17.   const prevValueRef = useRef();

18.   useEffect(() => {
19.     prevValueRef.current = value;
20.   }, [value]); // Update prevValueRef whenever 'value' changes

21.   const previousValue = prevValueRef.current;

22.   return (
23.     <div>
24.       <p>Current Value: {value}</p>
25.       <p>Previous Value: {previousValue}</p>
26.     </div>
27.   );
28. }
29.   
      
      
    Managing Side Effects Without Re-rendering (Less Common, but Possible):  
    While useEffect is the primary hook for side effects, useRef can sometimes be part of a solution where a side effect needs to happen but shouldn't trigger a re-render itself. For instance, managing an external library instance that doesn't need to be part of React's render cycle.