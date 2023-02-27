
let counterValue = 1;

const valueEl = document.querySelector("#value")
console.log(valueEl)
valueEl.textContent = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtnEl)

const clickDecBtnEl = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
decrementBtnEl.addEventListener("click", clickDecBtnEl)


const incrementBtnEl = document.querySelector('button[data-action="increment"]');
console.log(incrementBtnEl)

const clickIncBtnEl = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
incrementBtnEl.addEventListener("click", clickIncBtnEl)
