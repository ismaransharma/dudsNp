let cartIcon = document.querySelector(".cartIcon");
let cartBody = document.querySelector(".cartBody");
let cartClose = document.querySelector(".closeCart");

let listProductHTML = document.querySelector(".listProduct");

let listProducts = [];

cartIcon.addEventListener("click", () => {
  cartBody.classList.toggle("showCart");
});

cartClose.addEventListener("click", () => {
  cartBody.classList.toggle("showCart");
});

const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("col");
      newProduct.classList.add("col-sm-6");
      newProduct.classList.add("col-md-4");
      newProduct.innerHTML = `<div class="box center">
          <img src="${product.image}" alt="Arrival Image" />
          <h3>${product.name}</h3>
          <h4>Rs. ${product.price}</h4>
          <button class="addToCart"> Add to Cart</button>
        </div>`;
      listProductHTML.appendChild(newProduct);
    });
  }
};

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      addDataToHTML();
    });
};
initApp();
