// callbackExample.js

// Function that takes a callback
const processData = (data, callback) => {
    console.log("Processing data...");
    setTimeout(() => {
        // Simulate a delay and then call the callback
        const result = data.toUpperCase(); // Transform data
        callback(result);
    }, 2000); // Simulates a 2-second delay
};

// Callback function
const handleResult = (result) => {
    console.log("Callback executed!");
    console.log("Result:", result);
};

// Calling the processData function with data and a callback
processData("Hello, World!", handleResult);
