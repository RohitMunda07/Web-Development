// selecting the form because it constains the submit button

// values are extracted only when the use submit the form

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // getting value of height
    const height = parseInt(document.querySelector('#height').value);

    // we need to convert the value to int from string

    // getting value of weight
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter a valid Number Height!! ${height}`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter a valid Number Weight!! ${weight}`
    }

    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // show result
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            result.innerHTML+='<div>Under Weight</div>'
        }

        else if(bmi === 18.6 && bmi === 24.9){
            result.innerHTML+='<div>Normal Range</div>'
        }
        
        else if(bmi > 24.9){
            result.innerHTML+='<div>Over Weight</div>'
        }

        // alternative way

        // const newDiv = document.createElement('div')
        // if (bmi < 18.6) {
        //     newDiv.textContent = `Underweight`;
        // } else if (bmi >= 18.6 && bmi < 24.9) {
        //     newDiv.textContent = `Normal weight`;
        // } else {
        //     newDiv.textContent = `Overweight`;
        // }

        // // Insert the new <div> after the results element
        // form.insertAdjacentElement('afterend', newDiv);
    }


});