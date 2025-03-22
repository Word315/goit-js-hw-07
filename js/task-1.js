const categoriesUlLength = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesUlLength}`);

const header = document.querySelector("h2");
const items = document.querySelectorAll(".item ul");

items.forEach((item) => {
  const category = item.previousElementSibling.textContent;
  const quantity = item.children.length;
  console.log(`Category: ${category} \nElements: ${quantity}`);
}
);
