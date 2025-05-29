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

getUser(1, (user) => {
    console.log('User:', user);

    getRepositories(user, (repos) => {
        console.log('Repositories:', repos);
    }
    );
});

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