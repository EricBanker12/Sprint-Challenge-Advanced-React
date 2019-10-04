- [x] Why would you use class component over function components (removing hooks from the question)?

   Class components allows for more specific methods responding to props or state changes or component lifecycle methods.

- [x] Name three lifecycle methods and their purposes.

   1. componentDidMount method runs as after the first render following component mounting, useful for initializing data, timers, api calls.

   2. componentDidUpdate method runs after a render following any change in props or state, useful for responding to props/state changes such as storing to localStorage.

   3. componentWillUnmount method runs just before the component would be unmounted, useful for cleanup such as clearing intervals.

- [x] What is the purpose of a custom hook?

   Custom hooks allow for stateful logic and using other hooks internally to extend their functionality or separate a section of code into a separate file for readability and reusability.

- [x] Why is it important to test our apps?

   Testing has many benefits such as finding bugs, prevent breaking with updates, increases confidence of functionality, acts as documentation, coerces you to write more accessible and testable code, and more. Testing finds bugs first, so users aren't frustrated by them.