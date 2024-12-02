// lexical scoping
// function user() { // parent function
//     let username = "Harish"
//     // sharing is only available in parent context but not in child to child

//     // console.log(secret);
//     function displayName() { // child finction
//         // username is accessible 
//         let secret = 'abc123'
//         console.log(username);
//     }

//     function secondfun(){
//         // console.log(secret); // inaccessable
//     }
//     displayName()
// }

// user()


// closure
//  here all the lexical scope of the function will be returned 
// function makefunc(){
//     const name = 'mrozilla'
//     function diaplayName(){
//         console.log(name);
//     }
//     return diaplayName;
// }

// const myfunc = makefunc();
// myfunc();