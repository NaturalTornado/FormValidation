

function checkZip (zipCode) {
        const zip = zipCode;
        const zipRegex = /^\d{5}$/;
        const zipBox = document.getElementById('zipCode');
            
        if (zipRegex.test(zip)){
            console.log('good zip code: ' + zip);
            //zipBox.style.backgroundColor = 'lightgreen';
            return true;
            
        }
        else {
            console.log('bad zip code');
            //zipBox.style.backgroundColor = 'lightred';
            return false;
        }

    };


function passwordOne () {




};


function passwordCheck () {



};
  

export { checkZip , passwordOne , passwordCheck };


