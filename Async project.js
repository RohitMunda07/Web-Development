// generate Random colour
const randomColor = function () {
    const hex = '0123456ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 13)];
    }
    return color;
}

let intervalId;
document.querySelector('#start').addEventListener('click',()=>{
    if(!intervalId){
        intervalId = setInterval(() => {
             document.body.style.backgroundColor=randomColor()
        }, 1000);
    }
});

document.querySelector('#stop').addEventListener('click', ()=>{
    clearInterval(intervalId)
    intervalId = null;
    console.log("stopped");
});

