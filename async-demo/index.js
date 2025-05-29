console.log('Before');

//Follow this pattern to avoid callback hell - using Promises
getUser(1)
    .then(user => getRepositories(user))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits: ', commits))
    .catch(err => console.error('Error:', err.message));


console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Simulate a database call
        setTimeout(() => {
            console.log('Reading user from database...');
            const user = { id: id, name: 'John Doe' };
            resolve(user);
            //reject(new Error('User not found'));
        }, 2000);
    })
}


function getRepositories(user)  {
    return new Promise((resolve, reject) => {
        // Simulate a database call to get repositories
        setTimeout(() => {
            console.log(`Getting repositories for user... ${user.name}`);
            const repos = ['repo1', 'repo2', 'repo3'];
            resolve(repos);
            //reject(new Error('Repositories not found'));
        }, 2000);
    });
}

function getCommits(repo)  {
    return new Promise((resolve, reject) => {
        // Simulate a database call to get commits
        setTimeout(() => {
            console.log(`Getting commits in repo... ${repo}`);
            const commits = ['commit1', 'commit2', 'commit3'];
            resolve(commits);
            //reject(new Error('Commits not found'));
        }, 2000);
    });
}