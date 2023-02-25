const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const fragment = document.createDocumentFragment();

ingredients.forEach(value => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = value;
  fragment.appendChild(listItem);
});

const listEl = document.getElementById('ingredients');
listEl.appendChild(fragment);
