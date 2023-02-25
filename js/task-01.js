const allCategories = document.querySelectorAll(".item");
console.log(`В списку ${allCategories.length} така кількість категорій`);

let result = "";
[...allCategories].forEach(categories => {
  result += `Category: ${categories.firstElementChild.textContent}
Number of elements: ${categories.lastElementChild.children.length}
`;
});
console.log(result);