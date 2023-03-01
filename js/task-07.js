const inputEl = document.querySelector('#font-size-control')
console.log(inputEl)


const textEl = document.querySelector('#text')
console.log(textEl)

const handleFontSizeController = (event) => {
    textEl.style.fontSize = event.target.value + 'px'
}

inputEl.addEventListener('input',handleFontSizeController)