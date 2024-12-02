// Immediate Invoke Function Expression
//  it is used to control the pollution of global scope

// Named iffe
// (function iffe(){
//     console.log("Immediate Invoke Function Expression");
// })();

// ("function definition")("funtion call")

( (value) => {
    console.log(`Immediate Invoke Function Expression 2 ${value}`);
    
})("Rohit");