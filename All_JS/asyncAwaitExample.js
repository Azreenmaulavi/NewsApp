// asyncAwaitExample.js
// This is asyncAwait Example file

// Simulating a delay with a Promise
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); // Simulates a 2-second delay
    });
};

// Async function that uses await
const asyncFunction = async () => {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
};

// Call the async function
asyncFunction();
