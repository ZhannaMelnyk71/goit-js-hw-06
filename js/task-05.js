
const inputEl = document.querySelector('#name-input')
console.log(inputEl)

const outputNameEl = document.querySelector('#name-output')
console.log(outputNameEl)


const handleInputTextChange = (event) => {
    if (inputEl.value === '') {
        outputNameEl.textContent = "Anonymous";
        return
    }
    return outputNameEl.textContent = event.target.value
}

inputEl.addEventListener('input', handleInputTextChange)