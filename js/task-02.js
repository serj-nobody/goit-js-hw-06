const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

const createIngridientsMarkup = (array) => {
  return array.map((element) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = element;
    itemRef.classList.add("item")
    return itemRef;
  })
}

// console.log(createIngridientsMarkup(ingredients));
const ingredientsList = createIngridientsMarkup(ingredients);
ingredientsRef.append(...ingredientsList);

