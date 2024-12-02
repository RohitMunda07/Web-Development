// for loop
// const array =["apple", "mango", "banana"]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }


// for of loop
// const array =["apple", "mango", "banana"]
// for (const i of array) {
//     console.log(i);
    
// }

// const greet = "good morning"
// for (const val of greet) {
//     console.log(val);
    
// }


// map - it stores unique values

// const map = new Map()
// map.set("IN", "India")
// map.set("FR", "France")
// map.set("CH", "China")

// for (const [key, val] of map) {
//     console.log(key,":-", val);
    
// }


// objects are not iterable using this method they have different methods
// const myObj = {
//     js: "javaScript",
//     cpp: "c++",
//     rb: "Ruby",
//     swift: "Swift by Apple"
// }

// for (const key in myObj) {
//     console.log(key, ":-",myObj[key]);
    
// }

// const array = ["Harry", "Rohan", "Ankit"]
// for (const key in array) {
//     // in this case the keys are nothing but the indices
//     console.log(key, ":-",array[key]);
    
// }
// we cannot use this for map iteration

// for each loop
const code = ["js", "cpp", "py"]
// forEach loop takes a callBack function which means it does not have the function name

// code.forEach(function (val){
//     console.log(val);
    
// });

// callBack arrow function
// code.forEach((val) => {
//     console.log(val);
    
// });

// passing funtion to forEach loop
// function printme(val){
//     console.log(val);
    
// }
// // here, we just need to pass the reference of funtion
// code.forEach(printme)


// what forEach loop consit
code.forEach( (val, index, array) => {
    console.log(val , index, array);
    
})

// forEach with database

const myArr = [
    {
        user: "Rohit",
        lang: "js"
    },
    {
        user: "Aman",
        lang: "py"
    },
    {
        user: "Rishab",
        lang: "cpp"
    }
]
myArr.forEach( (item)=> {
    console.log(`${item.user} uses ${item.lang}`);

})

