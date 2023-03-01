// Завдання 1

const categoriesItemEl = document.querySelectorAll('.item');
// console.log(categoriesItem)
console.log("Number of categories:", categoriesItemEl.length)


const categoriesTitleEl = document.querySelectorAll("h2")
// console.log(categoriesTitleEl)

categoriesTitleEl.forEach(function (title) {
    console.log("Category:", title.textContent);
    console.log("Elements:",title.nextElementSibling.children.length)
});

