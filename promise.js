// create promise
// const prms = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('promise 1 created');
//         resolve(); // this is linked to comsumption of promise
//     }, 1000);
// })

// // comsume promise
// prms.then(function(){
//     console.log('promise 1 comsumed!!');
// })

// alternavite way

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("promise 2 created");
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log('promise 2 comsumed!!');
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // we can pass any data type it can be an array, object etc
//         resolve({ username: 'rk', email: 'rk@example.com' });
//     }, 1000);
// })

// promiseThree.then(function (user) {
//     console.log(`User Name:${user.username} Email:${user.email}`);

// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: 'harry', pass: '123' })
//         }
//         else {
//             reject("Something went wrong!!")
//         }
//     }, 1000);
// }).then(function(user){ // if true
//     console.log(user);
//     return user.username;
// }).then(function(user){ // above returned value is being caught here
//     console.log(user);
// }).catch(function(error){ // if false
//     console.log(error);
// }).finally(()=>{ // when eveything has worked
//     console.log('Something has run');
// })

// alternative of using then and catch

// create promise
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ course: 'js', price: '1399' })
//         }
//         else {
//             reject("failed to find the course!!")
//         }
//     }, 1000);
// })

// async function promiseFiveConsumed() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// promiseFiveConsumed()

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("Error loading users data!!");
//     }
// }

// getAllUsers()

// create promise
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error)
)
