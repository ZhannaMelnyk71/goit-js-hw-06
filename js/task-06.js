const inputEl = document.querySelector('#validation-input')
console.log(inputEl)

const dataLenghtEl = Number(inputEl.getAttribute('data-length'))
console.log(dataLenghtEl)


const handleInputBlur = (event) => {
    if (event.target.value.length !== dataLenghtEl) {
        inputEl.classList.add(`invalid`);
        inputEl.classList.remove(`valid`)
        return
    }
    inputEl.classList.add(`valid`);
    inputEl.classList.remove(`invalid`)
    return
}

inputEl.addEventListener('blur', handleInputBlur)