// promiseExample.js

// Function that returns a Promise
const checkNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("The number is positive.");
        } else if (num < 0) {
            resolve("The number is negative.");
        } else {
            reject("The number is zero.");
        }
    });
};

// Using the Promise
checkNumber(5)
    .then((message) => {
        console.log(message); // "The number is positive."
    })
    .catch((error) => {
        console.log(error);
    });

checkNumber(-3)
    .then((message) => {
        console.log(message); // "The number is negative."
    })
    .catch((error) => {
        console.log(error);
    });

checkNumber(0)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error); // "The number is zero."
    });
