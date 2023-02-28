function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color')
console.log(btnEl)

const bgColorEl = document.querySelector('.color')
console.log(bgColorEl)

const handleChangeColor = (event) => {
  
}

btnEl.addEventListener("click", handleChangeColor)
