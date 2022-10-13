
const regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElement = document.getElementById('error-msg');



/* prevent the form from submitting*/

form.addEventListener('submit', (e) => {
    let messages = []
   
    if (email.value === '' || email.value == null) {
        messages.push('E-Mail Address is required');
    }

    else if (email.value.match(regx) == null) {
        e.preventDefault()
        messages.push('Please enter a valid e-mail address');
    }

    if(messages.length > 0) { 
        e.preventDefault()
        errorElement.innerHTML = messages.join(', ');
    }
    
});

email.addEventListener('click', () => {
    email.value = '';   

});



