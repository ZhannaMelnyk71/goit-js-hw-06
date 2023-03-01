function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color')
console.log(btnEl)

const bodyEl = document.querySelector('body')
console.log(bodyEl)

const bgColorEl = document.querySelector('.color')
console.log(bgColorEl)

const handleChangeColor = (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  bgColorEl.textContent = bodyEl.style.backgroundColor
}

btnEl.addEventListener("click", handleChangeColor)
