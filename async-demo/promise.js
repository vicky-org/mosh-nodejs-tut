console.log('Before');
const p = new Promise((resolve, reject) => {
    // on success, resolve(result)
    // on error, reject(new Error('Something went wrong!'));
    setTimeout(() => {
        console.log('Reading user from database...');
        resolve(1)
        //reject(new Error('Something went wrong!'));
    }
    , 2000);

    
});

p
.then(result => console.log('Result:', result))
.catch(err => console.error('Error:', err.message))
console.log('After');