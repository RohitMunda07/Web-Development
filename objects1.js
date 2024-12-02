// Singleton 
// Object.create

// Object Literals
const mySym = Symbol("key")
const jsUser = {
    name: "rk", // by default it is processed by system like this "name" [as a string]
    "full name": "abc",
    mySym: "key2",
    age: 18,
    isLoggedIn: true,
    days: ["Monday", "Tuesday"]
}

// access method 1
// console.log(jsUser.name);
// console.log(jsUser.days);

// access method 2
// console.log(jsUser["name"]);
// console.log(jsUser["days"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// console.log(typeof mySym); // without [] it is considered as a string

// overwritting datas
// jsUser.name = "Rohit"
// Object.freeze(jsUser) // no changes will appear
// jsUser.name = "kartik"
// console.log(jsUser);

// add function to object

jsUser.greet = function(){
    console.log("Hello JS User!!");
}

jsUser.greet2 = function(){
    // console.log(`Hello JS User!! ${jsUser.name}`);
    
    console.log(`Hello JS User!! ${this.name}`); // alternative way
    // here, "this" refers to every variables of object "jsUser"
}

console.log(jsUser.greet());
console.log(jsUser.greet2());
