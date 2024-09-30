const app = document.getElementById("app");

const inventory = [
  { item: "Apple", quantity: 10 },
  { item: "Banana", quantity: 5 },
  { item: "Orange", quantity: 8 },
];

function renderInventory() {
  app.innerHTML =
    "<ul>" +
    inventory
      .map((item) => `<li>${item.item}: ${item.quantity}</li>`)
      .join("") +
    "</ul>";
}

renderInventory();
