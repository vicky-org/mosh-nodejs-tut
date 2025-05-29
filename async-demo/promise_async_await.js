console.log('Before');

//Follow this pattern to avoid callback hell - using Promises based approach
getUser(1)
    .then(user => getRepositories(user))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits: ', commits))
    .catch(err => console.error('Error:', err.message));

console.log('After1');


// Async and await first version
// const user = await getUser(1);
// const repos = await getRepositories(user);
// const commits = await getCommits(repos[0]);
// console.log('commits2:', commits);

// Async and await second version
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user);
        const commits = await getCommits(repos[0]);
        console.log('commits2:', commits);
    }
    catch (err) {
        console.error('Error:', err.message);
    }
}
displayCommits() // or await displayCommits()

console.log('After2');

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