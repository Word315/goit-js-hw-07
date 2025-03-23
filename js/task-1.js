const categoriesUlLength = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesUlLength}`);

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const quantity = item.querySelector("ul").children.length;
  console.log(`Category: ${category} \nElements: ${quantity}`);
});
