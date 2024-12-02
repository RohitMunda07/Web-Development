// const user1 = {} this is non Singleton 
// console.log(user1);

// Singleton 
const user = new Object()
user.id = 101;
user.name = "Harry";
user.age = 44;

// console.log(user);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        UserName: {
            firstName: "Hitesh",
            lastName: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.UserName.firstName); 

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 1, d: 2 }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// here, the values of obj1 & obj2 is assigned to {}

const obj3 = { ...obj1, ...obj2 } // most commonly used
// console.log(obj3);

// values from database
const database = [
    {
        id: 101,
        age: 21
    },
    {
        id: 102,
        age: 21
    },
    {
        id: 103,
        age: 21
    },
]

// traversing database:-
// console.log(database);
// console.log(database[1]);
// console.log(database[0].id);
console.log(Object.keys(database)) // it returns a array 
console.log(Object.values(database)) // it returns a array 
console.log(Object.entries(database)) // it returns a array 

// to check if the values exist or not
console.log(regularUser.hasOwnProperty(`email`));
