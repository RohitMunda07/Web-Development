// Arrow funtion is used to refer the current context of a scope
const user = {
    username: "Harry",
    course: "js",

    wellcomeMessage: function(){
        console.log(`${this.username}, Wellcome`);
        console.log(this); // it refers the current context of a scope
        
    }
}

// user.wellcomeMessage()
// user.username = "Ravi"
// user.wellcomeMessage()

// console.log(this); // if it is running in windows its global object is window

// function chai(){
//     const user = "Rajesh"
//     console.log(this.user); // this can only be used with object
// }

// chai()


// const chai = function(){
//     const user = "Rajesh"
//     console.log(this.user); // this can only be used with object
// }

const chai = ()=>{
    const user = "Rajesh"
    console.log(this); // this can only be used with object
}

chai()

// Arrow Function
// const addTwo = (num1, num2)=>{
//     return num1+num2
// }

// Implicit Arrow Function
// const addTwo = (num1, num2) => num1+num2

// When we are using {}, we need to use "return"
// But if we are using (), we don't need to use "return"
// const addTwo = (num1, num2) => (num1+num2)


// returning an object
// const addTwo = (num1, num2) => ({username: "Rohit"})
// console.log(addTwo(5,5));

