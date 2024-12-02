const myArr = ["js", "py", "rb"]

// it does not return any value
const newArr = myArr.forEach((val) => {
    // console.log(val);
    return val;
});
console.log(newArr);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// it also takes callBack function
// it also returns the value
// {} while using this we need to mention return keyword but in () it automatically returns the value

// const newNum = myNum.filter((val) => {
//     return val>4;
// }
// );
// console.log(newNum);

const books = [
    { bookName: "The Lost Empire", genra: "history", price: 250 },
    { bookName: "Ancient Legends", genra: "mythology", price: 300 },
    { bookName: "Modern Economics", genra: "economics", price: 400 },
    { bookName: "Galactic Tales", genra: "science fiction", price: 350 },
    { bookName: "The Art of War", genra: "strategy", price: 150 },
    { bookName: "Mystic Rivers", genra: "mystery", price: 180 },
    { bookName: "Digital Future", genra: "technology", price: 500 },
    { bookName: "The History Chronicles", genra: "history", price: 220 },
    { bookName: "Garden of Poems", genra: "poetry", price: 120 },
    { bookName: "The Nature's Secrets", genra: "environment", price: 300 }
];

let newBooks = books.filter((items) => items.genra === "history")
newBooks = books.filter((items) => (items.price > 200 && items.genra === "history"))


console.log(newBooks);


