console.log('Started');
getUser(1, getUserDetails);
console.log('Finished');

function getUserDetails(user) {
    getUserRepositories(user, getRepositories)
}

function getRepositories(repositories) {
    console.log(repositories)
    getUserFirstRepository(repositories, displayFirstRepository)
}

function displayFirstRepository(repository) {
    console.log(repository);
}


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading data from the database');
        callback({id: id, githubUsername: 'Tarakakoda', repositories: ['repo1', 'repo2', 'repo3']});
    }, 0)
} 

function getUserRepositories(user, callback) {
    setTimeout(() => {
        console.log('Getting the user repositories...');
        callback(user.repositories);
    }, 0)
}

function getUserFirstRepository(repositories, callback) {
    setTimeout(() => {
        console.log('Getting the initial repository');
        callback(repositories[0]);
    }, 0);
}


console.log('Start');
getUser2(1, function(user) {
    console.log(user);
})
console.log('finish');

function getUser2(id, callback) {
    setTimeout(() => {
        console.log('Getting data from the database');
        callback({id: id, name: 'tarakakoda'})
    }, 0)
}