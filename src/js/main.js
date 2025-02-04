// Variables

var carts = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

// Boucle????

function showConfirmation() {
  confirmation.classList.add("is-active");
  setTimeout(() => {
    confirmation.classList.remove("is-active");
  }, 2000);
}

carts.forEach(function (cart) {
  cart.addEventListener("click", showConfirmation);
});
