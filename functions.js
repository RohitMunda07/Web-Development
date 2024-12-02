// function myName(){
//     console.log("Rohit");

// }

// myName()

// function sum(num1, num2){
//     console.log(num1+num2);
// }
// sum(5,8)

// // default value
// function loggedIn(name = "sam"){
//     if (name === undefined) {
//     console.log("Enter Username");
//     return
// }
//     console.log(name);
// }
// console.log(loggedIn());

// spread operator = rest operator
// at this point it is rest operator
function allSum(val1, val2, ...rest) {
    return rest // it will return an array
}
console.log(allSum(10, 20, 30, 45))


// passing obj to a function
const user = {
    course: "JavaScript",
    price: 199
}

function handleObj(anyObj) {
    console.log(`Course is ${anyObj.course} and price is ${anyObj.price}`);
}

// function calls:-
// handleObj(user)
// handleObj({
//     course: "python",
//     price: 499
// })


// passing array to a function
function handleArr(anyArr){
    return anyArr[1]
}

// const myArr=["Harry",12,55]
console.log(handleArr(["Harry",12,55]));
