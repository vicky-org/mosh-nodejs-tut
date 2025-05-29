console.log('Before');
setTimeout(() => {
    console.log('After setTimeout - Before nested setTimeout');
    setTimeout(() => {
        console.log('After nested setTimeout');
    }, 2000);
    console.log('After setTimeout - After nested setTimeout');
}, 2000);
console.log('After');