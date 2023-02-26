const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = ingredients.map(ingredient => {
  const ingredientsNameEl = document.createElement("li")
ingredientsNameEl.textContent = ingredient;
// console.log(ingredientsNameEl.textContent)
  ingredientsNameEl.classList.add("item");
  
  return ingredientsNameEl;
})


const ingredientsListEl = document.querySelector("#ingredients")
ingredientsListEl.after(...ingredientsEL)
