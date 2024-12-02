const users={
    username: "harry",
    password: "123",
    isSignedIn: true,

    getUsersDetails: function(){
        console.log("User details!!!");
        // console.log(this);
        console.log(this.isSignedIn);
    }
}

//  console.log(this); // by default its a windows object differnt for browser

// console.log(users.username);
// console.log(users.getUsersDetails());

// constructor function 
// const obj = new Promise() // new is constructor function helps in creating multiple instances

function user(username, isLoggedIn){
    // [this] binds method to object
    // it tells that it is a part of user function
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this; // without return it will work fine
}

const userOne = user("ravi", true)
const userTwo = user("Rohan", false) // overwrites previous values
//  to avoid this we use new constructor for creating new instance
// console.log(userOne);

const userThree = new user("Sonu", true) 
const userFour = new user("Yogendra", false) 
// console.log(userThree); 
// instanceof check this
console.log(userFour.constructor);


