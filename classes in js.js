// ES6

// class user{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     // we don't need write the word 'function' for declaring function inside the class
//     display(){
//         return this
//     }
//     encyptPass(){
//         return `${this.password}#123`
//     }
//     setUser(){
//         return `${this.username.toLowerCase()}`
//     }
// }

// // creating object

// const user1 = new user('Harry', '@gmail.com', 'harry')
// console.log(user1.encyptPass());
// console.log(user1.display());


// behind the scene
function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

// injecting encryptpass and setUser to function user
user.prototype.encyptPass = function () {
    return `${this.password}#123`
}

user.prototype.setUser = function () {
    return `${this.username.toLowerCase()}`
}

const ravi = new user("Ravi", '@gmail.com', 'qwe')
console.log(ravi);
console.log(ravi.encyptPass());

