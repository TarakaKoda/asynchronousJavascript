console.log('Started');
let newUser = {
    name: 'taraka'
}
getUser(1, function(user) {
    getUserRepositories(user, function(repositories) {
        getUserFirstRepository(repositories, function(repo) {
            console.log(repo);
        })
    })
});
console.log('Finished');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading data from the database');
        callback({id: id, githubUsername: 'Tarakakoda', repositories: ['repo1', 'repo2', 'repo3']});
    }, 2000)
} 

function getUserRepositories(user, callback) {
    setTimeout(() => {
        console.log('Getting the user repositories...');
        callback(user.repositories);
    }, 2000)
}

function getUserFirstRepository(repo, callback) {
    setTimeout(() => {
        console.log('Getting the initial repository');
        callback(repo[0]);
    }, 2000);
}