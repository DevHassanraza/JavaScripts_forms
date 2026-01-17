const form = document.getElementById('Myform');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('message');
    
    if(name === '' || email === '' || password === ''){
        msg.textContent = alert('Please fill in all required fields.');
        msg.style.color =  'red';
    }else{
        msg.textContent = alert('Form submitted successfully!');
        msg.style.color = 'green';
    }
})