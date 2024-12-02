// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

const chai = {
    name: "ginger",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai is not ready!!");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Object.defineProperties()
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

for (const [key, value] of Object.entries(chai)) {
    // traversing along to enteries of Object
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
