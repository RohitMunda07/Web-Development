// const grey = document.querySelector('#grey')
// const white = document.querySelector('#white')
// const blue = document.querySelector('#blue')
// const yellow = document.querySelector('#yellow')
// const canvas = document.querySelector('.canvas')

// grey.addEventListener("click",()=>{
//     document.body.style.backgroundColor = 'grey'
// })

// white.addEventListener("click",()=>{
//     document.body.style.backgroundColor = 'white';
// })

// blue.addEventListener("click",()=>{
//     document.body.style.backgroundColor = 'blue';
// })

// yellow.addEventListener("click",()=>{
//     document.body.style.backgroundColor = 'yellow';
// })

const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener("click",(e)=>{
        // console.log(e);
        // e.target tell where the event is invoked kaha se event aaya hai
        // console.log(e.target);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        
    })
});