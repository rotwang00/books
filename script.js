"use strict";

let sampleData = [
  { id: 1, author: "Herbert", title: "Dune" },
  { id: 2, author: "Erikson", title: "Gardens of the Moon" },
  { id: 3, author: "King", title: "The Dark Tower" },
];

const bookList = document.getElementById("bookList");

for (let book of sampleData) {
  let displayText = document.createElement("p");
  displayText.textContent = `${book["title"]} by ${book["author"]}`;
  bookList.appendChild(displayText);
}
