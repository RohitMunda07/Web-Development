// object de-structure
const course = {
    courseInstructor: "Hitesh",
    price: 999,
    courseName: "Java Script"
}

// accessing data of object
// course.courseName
const { courseInstructor: instructor } = course
// console.log((courseInstructor));
console.log((instructor));


// const person = {
//     name: 'Alice'
// };

// // Destructure with default value
// const { name, age = 25 } = person;

// console.log(name); // 'Alice'
// console.log(age);  // 25 (default value is used)

  