const p = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Asynchronous operation 1....');
        resolve(1)
    }, 2000)
});

const s = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Asynchronous operation 2....');
        resolve(2);
    }, 2000)
})

Promise.all([p, s])
.then(array => console.log(array))
.catch(error => console.log(error))
console.log('Started');


Promise.race([p, s])
.then(data => console.log(data));