const controllers = document.querySelectorAll(".product__quantity-control");
const addButtons = document.querySelectorAll(".product__add");

for (let i = 0; i < controllers.length; i++) {
  if (controllers[i].classList.contains("product__quantity-control_dec")) {
    controllers[i].addEventListener("click", reduceQuantity);
  }
  else if (controllers[i].classList.contains("product__quantity-control_inc")) {
    controllers[i].addEventListener("click", increaseQuantity);
  };
};

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", addToCart);
}


function reduceQuantity () {
  let actualQuantity = parseInt(this.closest(".product").querySelector(".product__quantity-value").textContent);
  if (actualQuantity == 1) {
  }
  else {
    this.closest(".product").querySelector(".product__quantity-value").textContent = actualQuantity - 1;
  }
};

function increaseQuantity () {
  let actualQuantity = parseInt(this.closest(".product").querySelector(".product__quantity-value").textContent);
  this.closest(".product").querySelector(".product__quantity-value").textContent = actualQuantity + 1;
};

function addToCart () {
  let product = this.closest(".product");
  let productId = product.dataset.id;
  let imageSrc = product.querySelector(".product__image").getAttribute("src");
  let addedQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);
  let cart = document.querySelector(".cart__products");
  if (cart.querySelector(`.cart__product[data-id="${productId}"]`)) {
    let existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);
    let existingProductValue = parseInt(existingProduct.textContent);
    existingProduct.querySelector(".cart__product-count").textContent = existingProductValue + addedQuantity;
    product.querySelector(".product__quantity-value").textContent = 1;
    showCart();
  }
  else {
    let newProductInCart = document.createElement("div");
    newProductInCart.classList.add("cart__product");
    newProductInCart.dataset.id = productId;
    newProductInCart.innerHTML = `
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${addedQuantity}</div>
        <div class="cart__product-close">x</div>
    `;
    console.log(newProductInCart);
    newProductInCart.querySelector(".cart__product-close").addEventListener("click", removeFromCart);
     cart.append(newProductInCart);
     product.querySelector(".product__quantity-value").textContent = 1;
    showCart();
  }
}


function showCart() {
let productsInCart = document.querySelectorAll(".cart__product");
if (productsInCart.length > 0) {
  document.querySelector(".cart").classList.add("cart_active");
}
else {
  document.querySelector(".cart").classList.remove("cart_active");
};
};
function removeFromCart () {
  this.closest(".cart__product").remove();
}