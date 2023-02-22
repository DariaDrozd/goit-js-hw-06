const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById("ingredients");
const foodI = ingredients.forEach(vallue => {
  const listItem = document.createElement('li');
  listItem.innerHTML = vallue;
  listEl.append(listItem);
});
