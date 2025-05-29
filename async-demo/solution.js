
console.log("Before");
// const customer = await getCustomer(1)
// console.log('Customer: ', customer);
// if (customer.isGold) {
//     const movies = await getTopMovies();
//     console.log('Top movies: ', movies);
//     await sendEmail(customer.email, movies);
//     console.log('Email sent...');
// }

async function notifyCustomer() {
    const customer = await getCustomer(1)
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...');
    }
}
notifyCustomer()
console.log("After");

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const customer = { 
              id: id, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            };
            resolve(customer);
        }, 2000);  
    }
);
}

 

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movies = ['movie1', 'movie2'];
            resolve(movies);
        }, 2000);
    });
}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
    // Simulate sending an email
    console.log(`Sending email to ${email} with movies: ${movies}`);
    setTimeout(() => {
        resolve();
    }, 2000);
})
}