const { get } = require("../express-demo/routes/courses");

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
getUser(1, (user) => {
    getRepositories(user, (repos) => {
        getCommits(repos[0], (commits) => {
            //This is callback hell, since we have nested callbacks
            console.log('Commits:', commits);
        });
    }
    );
});

//Synchronous JavaScript:
const user = getUser(1)
const repos = getRepositories(user)
const commits = getCommits(repos[0])

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
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}