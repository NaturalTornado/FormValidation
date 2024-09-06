import loadPage from "./loadPage";
import { checkZip , passwordOne , passwordCheck } from "./form";
//import { util } from "webpack";



document.addEventListener('DOMContentLoaded', ()=> {
    loadPage();

    function addStyle (selector, styles) {

        // Get all elements of the selector class
        const elements = document.querySelectorAll(selector);

        // Loop over each element and apply styles
        elements.forEach(element => {
            Object.assign(element.style, styles);
        });

    };

    const Inputs = document.querySelectorAll('input');

    Inputs.forEach(Input => {
    Input.addEventListener('click', ()=> {
        
        const getInput = Input.id;

        console.log(getInput);

        const InputStyles = {

            border: 'solid',
            borderColor: 'blue',
            borderWidth: '4px',
            backgroundColor: 'lightblue',
            
        }
        
        addStyle(`#${getInput}`, InputStyles);

    });

    Input.addEventListener('blur', ()=> {
        
        const getInput = Input.id;

        const InputStyles = {

            border: 'solid',
            
            borderWidth: '2px',
            backgroundColor: 'lightgray',
            
        }
        
        addStyle(`#${getInput}`, InputStyles);

    });
    });

//
//
//      Select element type 
//

const Selects = document.querySelectorAll('select');

Selects.forEach(Select => {
Select.addEventListener('click', ()=> {
    
    const getSelect = Select.id;

    
    const SelectStyles = {

        border: 'solid',
        borderColor: 'blue',
        borderWidth: '4px',
        backgroundColor: 'white',
        Color: 'black',
        
    }
    
    addStyle(`#${getSelect}`, SelectStyles);

});

Select.addEventListener('blur', ()=> {
    
    const getSelect = Select.id;

    const SelectStyles = {

        border: 'solid',
        
        borderWidth: '2px',
        backgroundColor: 'lightgray',
        
    }
    
    addStyle(`#${getSelect}`, SelectStyles);

});


//check the zip code
const zipBox = document.getElementById('zipCode');

const zipBadLabel = document.createElement('label');
        

zipBox.addEventListener('click', ()=>{
    zipBadLabel.textContent = '';      
     

});



if (zipBox) {
    zipBox.addEventListener('blur', ()=> {
        checkZip(zipBox.value);
        
        console.log("click out: " + `${zipBox.value}`);

        console.log("checkzip return: " + checkZip(zipBox.value));

        if (checkZip(zipBox.value)) {
            zipBox.style.backgroundColor = 'lightgreen';

        }

        else {
            zipBox.style.backgroundColor = 'red';
            zipBadLabel.id = "zipErrorLabel";
            zipBadLabel.style.color = 'red';
            zipBadLabel.textContent = "enter a valid zip codeee!!";
            zipBox.insertAdjacentElement('afterend', zipBadLabel);

        }

    });

};

//get the passoword

//password rules:
const passwordRules = document.createElement('passwordRules');
passwordRules.id = 'passwordRules';
passwordRules.style.color = 'red';
passwordRules.textContent = `
        password must be at least 8 characters long
        
        
    `;


const password = document.getElementById('Password');

password.addEventListener('input', ()=> {

   
    if (password.value.length < 8) {
        
        if (!document.getElementById('passwordRules')) {
            password.insertAdjacentElement('afterend', passwordRules);

        };

    }       

    else {
        if (document.getElementById('passwordRules')) {
        passwordRules.remove();
        };
    
    }
    
}); 

password.addEventListener('blur', ()=> {
    passwordOne(password.value);
    passwordRules.remove();


});


});







});

