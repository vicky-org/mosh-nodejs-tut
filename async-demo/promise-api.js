const promise = Promise.resolve(2);
//const promise = Promise.reject(new Error('Something went wrong!'));
console.log('Before');
promise
    .then(result => console.log('Result:', result))
    .catch(err => console.error('Error:', err));

console.log('After1');

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        //reject(new Error('Something went wrong in async operation 1!'));
    }, 2000);
}
);

console.log('After2');

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
        //reject(new Error('Something went wrong in async operation 2!'));
    }, 1000)
});

console.log('After3');

Promise.all([p1, p2])
//Promise.race([p1, p2])
    .then(result => console.log('Result of all promises:', result))
    .catch(err => console.error('Error in one of the promises:', err.message));


console.log('After4');