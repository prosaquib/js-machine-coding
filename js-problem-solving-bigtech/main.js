function getUserById(id, callback) {
  // Simulating async request
  const randomRequestTime = Math.floor(Math.random() * 1000) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // Implement the function here
  let index = 0;
  let responses = [];
  let completedTask = 0;
  function postCompletionCallback(activeIndex, output) {
    responses[activeIndex] = output;
    completedTask++;
    if (inputs.length === completedTask) {
      callback(responses);
      return;
    }

    if (index < inputs.length) {
      iterateeFn(inputs[index], postCompletionCallback.bind(null, index));
      index++;
    }
  }

  while (index < limit) {
    iterateeFn(inputs[index], postCompletionCallback.bind(null, index));
    index++;
  }
}

mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
  console.log("Output:", allResults); // Expected: ["User1", "User2", "User3", "User4", "User5"]
});
