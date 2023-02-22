const allCategories = document.querySelectorAll(".item");
console.log(`В списку ${allCategories.length} така кількість категорій`);


const array = [...allCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Number of elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(array);