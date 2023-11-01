//* Synchronous program: The Synchronous code is execute in a sequential manner which means 
//* one statement is execute after after another, this will block the subsequent code until the completion of the current operation. 
//! This means if you have an long running task in your program like fetching the data from the database or from a third party api call then this will take a long time to complete until this task completes the entire program will be blocked.
//! This synchronous code can make irresponsive and less efficient.
// Lets see an example:

console.log('Started');
const result = calculateSync();
console.log(`Result: ${result}`);
console.log('Finished');

function calculateSync() {
    //! some long running task
    let result = 0;
    for (let i = 0; i <= 10000; i++){
        // some code....
        result = i;
    }
    return result;
}

//* Lets see what will be the Output of this code.

//* Asynchronous program: The Asynchronous code in the other hand will give gives you to initiate the tasks and moves to the next task without blocking and wait for the tasks to complete.
//* Asynchronous operations are commonly used in fetching the date from the database and the third party applications.

console.log('Sync started');

//* this here this the asynchronous code
setTimeout(() => {
    console.log('Reading the user data from the database')
}, 2000);

console.log('Sync ended');

//* Event Loop: Event loop is one the fundamental concept in the JavaScript to know, this event loop is a continuos process which checks two things:
//* 1. Is the main stack(Execution thread) is empty.
//* 2. Is there any tasks(callBacks) are waiting in the task queue.
