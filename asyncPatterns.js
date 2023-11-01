//* from the last topic lets crate the example more realistic.

console.log('Started');
const user = getUser(1); //! this return will not be available, we cannot access the user from the async function like this, the output will be undefined.
console.log(user);
console.log('Finished');

function getUser(id) {
    setTimeout(()=> {
        console.log('Readingdata from the database');
        return {id: id, gitHubUsername: 'TarakaKoda'}
    }, 2000)
}

//* To solve this issue we have 3 Async Patterns
//* 1. Callbacks
//* 2. Promises 
//* 3. Async/Await

