const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map((num)=>{
//     return num+10
// })
// console.log(newNum);

const newArr = myNum
                .map((val)=>val*10)
                .map((val)=> val+1)
                .filter((val)=>val>=50)
console.log(newArr);

