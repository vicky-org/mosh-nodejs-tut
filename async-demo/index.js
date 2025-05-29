console.log('Before');

// callbackFunction = (user) => {
//     console.log('User:', user);
// };

// function callbackFunction(user) {
//     console.log('User:', user);
// };

//getUser(1, callbackFunction);

// getUser(1, (user) => {
//     console.log('User:', user);
// });

//Asynchronous JavaScript with Callbacks
// getUser(1, (user) => {
//     getRepositories(user, (repos) => {
//         getCommits(repos[0], (commits) => {
//             //This is callback hell, since we have nested callbacks
//             console.log('Commits:', commits);
//         });
//     }
//     );
// });

//Follow this pattern to avoid callback hell - Names fucntions to the rescue:
getUser(1, getRepositories);



function getRepositories(user) {
    console.log('User:', user);
    getRepositories(user, getCommits)
}

function getCommits(repos) {
     console.log('Repositories:', repos);
    getCommits(repos[0], displayCommits)
}


function displayCommits(commits) {
    console.log('Commits:', commits);
}

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({ id: id, name: 'John Doe' })
    }, 2000);
}


function getRepositories(user, callback)  {
    setTimeout(() => {
        console.log(`Getting repositories for user... ${user.name}`);
        console.log(callback);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback)  {
    setTimeout(() => {
        console.log(`Getting commits in repo... ${repo}`);
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}