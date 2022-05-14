const itemsRef = document.querySelectorAll(".item");

const countItemsRef = () => {
  return console.log(`Number of categories: ${itemsRef.length}`);
}

const countElementsInItems = () => {
    return itemsRef.forEach((item) => {
      const titleRef = item.querySelector("h2");
      const itemListRef = item.querySelectorAll("li");
      console.log(`Category: ${titleRef.textContent}`);
      console.log(`Elements: ${itemListRef.length}`);
  });
}

countItemsRef();
countElementsInItems();
