const p = Promise.resolve({id: 1, gitHubUsername: 'Tarkakoda'});

p.then((user) => {
    console.log(user);
});

const s = Promise.reject(new Error('There is no user with that id'));
s.catch((error) => {
    console.log(error);
});