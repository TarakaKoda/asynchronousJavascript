// console.log('Started');
// getUser(1, function(user) {
//     getGitHubUsername(user, function(gitHubUsername) {
//         console.log(`GitHub Username: ${gitHubUsername}`)
//         getAllRepositories(user, function(repositories) {
//             console.log(repositories);
//         })
//     })
// });

// let newName = 'Taraka Koda'

// console.log('Finished');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log("Reading the date from the database....")
//         callback({id: id, gitHubUsername: 'tarakakoda', repositories: ['repo1', 'repo2', 'repo3']});
//     }, 2000)
// }

// function getGitHubUsername(user, callback) {
//     setTimeout(() => {
//         console.log('Fetching data from the gitHub api');
//         callback(user.gitHubUsername)
//     }, 2000)
// }

// function getAllRepositories(user, callback) {
//     setTimeout(() => {
//         console.log('Getting all the repositories....');
//         callback(user.repositories);
//     }, 2000)
// }

//* Lets convert this code using promises instead of callbacks

// console.log("Starting....");
// let promise = new Promise((resolve, reject) => {
//     resolve(fetch('https://randomuser.me/api/'));
//     // reject(new Error('Rejected!'))
// })

// promise
//     .then((data) => {
//         return data.json();
//     })
//     .then((user) => {
//         // console.log(user.title);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// console.log("Finished!");


//* lets convert all the callbacks into promises 

console.log('Staring Promises...');

getUserP(1)
    .then(user => getGitHubUsernameP(user))
    .then(username => getAllRepositoriesP(username))
    .then(repos => console.log(repos.repositories))
    .catch(err => console.log(err.message))

console.log('Finished!')


function getUserP(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Getting the user data')
            resolve({id: id, gitHubUsername: 'tarakakoda'})
        }, 2000)
    })
}

function getGitHubUsernameP(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching the github api')
            resolve(user.gitHubUsername)
        }, 2000)
    })
}

function getAllRepositoriesP(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting all the repos')
            // resolve({repositories: ['repo1', 'repo2', 'repo3']})
            reject(new Error(`There are no repos with that ${user}`));
        }, 2000)
    })
}

