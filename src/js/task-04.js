
let counterValue = 1;

const valueEl = document.querySelector("#value")
console.log(valueEl)
valueEl.textContent = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtnEl)

const handleDecBtnClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
decrementBtnEl.addEventListener("click", handleDecBtnClick)


const incrementBtnEl = document.querySelector('button[data-action="increment"]');
console.log(incrementBtnEl)

const handleIncBtnClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
incrementBtnEl.addEventListener("click", handleIncBtnClick)
