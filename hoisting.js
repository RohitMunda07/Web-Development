// hoisting is the scope of variables

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

// variables in js can hold anythings
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(10));