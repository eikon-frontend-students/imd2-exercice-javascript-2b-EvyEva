// Variables

var carts = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

console.log(carts);
console.log(confirmation);

// Boucle????

carts.forEach(function (carts) {
  console.log(carts.innerText);
  confirmation.classList("confirmation");
});

carts.addEventListener("click", forEach);
