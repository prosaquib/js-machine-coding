# Implementing a Custom `mapLimit` Function in JavaScript

## Paytm Frontend Interview Question | JavaScript Interview Questions | Frontend Problem Solving

### Description

In this task, you are required to implement a custom `mapLimit` function in JavaScript. This function processes an array of inputs with a specified limit on the number of asynchronous operations that can be executed concurrently.

### Problem Statement

Implement a `mapLimit` function that takes four arguments:

1. **inputs**: An array of inputs that need to be processed.
2. **limit**: The maximum number of asynchronous operations that can be executed concurrently.
3. **iterateeFn**: The asynchronous function that will be called with each input to generate the corresponding output. This function accepts two arguments:
   - **input**: The input being processed.
   - **callback**: A function that must be called with the processed output once the input processing is complete.
4. **callback**: A final callback function that should be called with the array of outputs once all inputs have been processed.

### Constraints

- At any given time, the program should only process a maximum of `limit` inputs concurrently.
- The `iterateeFn` simulates asynchronous behavior, as shown in the example below.

### Example

```javascript
function getUserById(id, callback) {
  // Simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // Implement the function here
}

mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
  console.log("Output:", allResults); // Expected: ["User1", "User2", "User3", "User4", "User5"]
});
```
