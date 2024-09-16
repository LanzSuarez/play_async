// ?Async functions are a way to work with asynchronous code in a more synchronous way. they are built on top of promises and are syntactic sugar for promises.

// Example 1 (Uncomment the below to see the output)
// To understand the async nature of JS, we will use setTimeout functions
// setTimeout is a built-in function that is used to execute as function after a specified number of milliseconds.

console.log("Hello");

setTimeout(() => {
    console.log('Timer is done.')
}, 2000);

console.log('Hi!');

// this is asynchronous code because the timer is running in the background while the rest of the code is running.

// =================================================================
// Example 2 (Comment Ex 1 and Uncomment the code below to see the output)
// Example ordering pizza

console.log("Ordering your pizza...");

// Creating a promise
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        // resolve and reject are callback functions
        // what is callback function?
        // A callback functions a function that is passed as an argument to another function, to be "called back" at a later time.
        let order = true; //try to change this to false

        if (order) {

            setTimeout(() => { // setTimeout is used to simulate a delay
                resolve("After 5 seconds, Pizza delivered!");
            }, 5000);
        } else {

            setTimeout(() => { // setTimeout is used to simulate a delay
                reject("After 5 seconds, Pizza not delivered!");
            }, 5000);
        }
    });
};

// calling the function with a promise
// use .then() to handle the resolved promise
// use .catch() to handle the rejected promise
pizzaPromise()
.then((result) => {
    console.log(result);
})
.catch((Error) => {
    console.log(Error);
});

console.log("Waiting for your pizza... ");

// Terminology
// Promise: An object that represents the eventual completion (or failure) of an asynchronous and its resulting value.
// resolve: A callback function that is used when the promise is fulfilled.
// reject: A callback function that is used when the promise is rejected.
// .then(): A method that is used to handle the resolved promise.
// .catch(): A method that is used to handle the rejected promise..
// setTimeout: A method that is used to simulate a delay.
// Callback function: A function that is passed as an argument to another function, to be "called back" at a later time.

// =================================================================
// Activity
// Recode in your IDE and play around with the code. Change the order variable to see the different outputs.
// Configure git in your project folder and push your code to your repository. Refer to play_demogitchange.js for the steps.

// Adding 