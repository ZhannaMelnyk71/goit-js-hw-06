
const formEl = document.querySelector('.login-form')


const handlerFormSubmit = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value
    console.log(email)
    const password = event.currentTarget.elements.password.value
    console.log(password)

    const formData = { email, password }
    console.log(formData)

    if (email=== "" || password === "") {
        return alert('Заповніть всі поля')
    }

    console.log(`Email: ${email}, Password: ${password}`);
    
    event.currentTarget.reset();


}

formEl.addEventListener('submit', handlerFormSubmit);