
const inputEl = document.querySelector('#name-input')
console.log(inputEl)

const outputNameEl = document.querySelector('#name-output')
console.log(outputNameEl)


inputEl.addEventListener('input', (event) => {
    outputNameEl.textContent = event.target.value;
})

outputNameEl.addEventListener('change', (event) => {
    if (inputEl.value === '') {
        outputNameEl.textContent = "Anonymous";
        return;
    }
})