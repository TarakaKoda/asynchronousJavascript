console.log('Starting....');
getGitHubUsername();
console.log('Finished!');

async function getGitHubUsername() {
    try {
        const user = await getUser(1);
        const gitHubUsername = await getGithubUsername(user);
        console.log(gitHubUsername);
    }
    catch (error) {
        console.log(error)
    }
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting the user from the database....')
            // resolve({id: id, gitHubUsername: 'TarakaKoda'})
            reject(new Error(`No data with the user id:${id}`))
        }, 2000)
    })
}

function getGithubUsername(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('fetching the data from the gitHub api....')
            resolve(user.gitHubUsername);
        }, 2000)
    })
}



