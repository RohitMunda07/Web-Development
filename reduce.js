// generally used in shopping cart

const myArr = [1,2,3,4,5]
// acc holds the value
// const ans = myArr.reduce(function(acc,curVal){
//     console.log(`acc value: ${acc} and curVal: ${curVal}`);
//     return acc+curVal
// },0) // this is a stater
// console.log(ans);

// const total = myArr.reduce((acc, curVal)=> acc+curVal,0)
// console.log(total);

// adding price of shopping list 

const course = [
    {
        cname: "Java",
        price: 299
    },
    {
        cname: "Mobile dev",
        price: 11000
    },
    {
        cname: "Python",
        price: 5000
    },
]

const grandTotal = course.reduce((acc, curVal)=> acc+curVal.price,0)

console.log(grandTotal);
