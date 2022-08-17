// переменные
let cart = document.querySelector("#cart");
let buttons = document.querySelectorAll(".button");
let totalValue = document.querySelector('.total-price-value');
let cartIcon = document.querySelector('.cart-icon');
let closeBtn = document.querySelector('.cart-close-button');

let products = [];

function isBtnBlocked(button) {
  if (button.dataset.active == "false") {
    button.dataset.active = "true";
    button.classList.add("button-active");
    button.querySelector("span").innerHTML = "Already in Cart";

    createObj(button)
  }
  else {
    location.href = "#cart";
  }
}

function createObj(button) {
  let productPrice = button.dataset.price;
  let productImg = button.dataset.image;
  let productCount = 1;
  let productTitle = button.dataset.title;
  let productObject = {};


  // картинка НУЖНА???
  productObject['title'] = productTitle;
  productObject['price'] = productPrice;
  productObject['count'] = productCount;
  productObject.id = setUniqueProductID()
  button.dataset.productId = productObject.id;

  products.push(productObject);
  console.log(productObject);
  console.log(products);

  // sum += productCount * parseInt(productPrice)
  calculateTotalPrice()

  createHTML(productImg, productTitle, productPrice, productCount, productObject.id)

  // return true
}

function createHTML(productImg, productTitle, productPrice, productCount, productId) {
  let cartHtml = `
  <div data-id="${productId}" class="cart-body">
    <figure class="cart-product">
      <img class="cart-img" src="${productImg}" alt="">
    </figure>
    <section class="cart-info">
      <h1 class="comfy-maxer">${productTitle}</h1>
      <div class="cart-quantity">
        <p>Quantity:</p>
        <div class="cart-math">
          <span class="cart-plus">
            <button class="plus-button" onclick="add('${productTitle}', ${productId})">+</button>
          </span>
          <div data-id="${productId}" class="cart-count">${productCount}</div>
          <span class="cart-minus" onclick="deduct('${productTitle}', ${productId})">
            <button class="minus-button">-</button>
          </span>
        </div>
      </div>
      <div class="cart-price">$${productPrice}</div>
    </section>
    <div>
      <button data-id="${productId}" class="cart-cross" onclick="del(${productId})">X</button>
    </div>
  </div>`;

  cart.insertAdjacentHTML('afterbegin', cartHtml)
}

// плюсик
function add(productTitle, productId) {
  let span = document.querySelector(`.cart-count[data-id="${productId}"]`);

  products.forEach(function (product) {
    if (productTitle == product.title) {
      product.count++
      span.innerHTML = product.count
    }
  })
  calculateTotalPrice()
}

// минусик
function deduct(productTitle, productId) {
  let span = document.querySelector(`.cart-count[data-id="${productId}"]`);

  products.forEach(function (product) {
    if (productTitle == product.title) {
      if (product.count > 0) {
        product.count--;
        span.innerHTML = product.count;
      }
    }
  });

  calculateTotalPrice()
}

function del(productId) {
  let productBody = document.querySelector(`.cart-body[data-id="${productId}"]`)
  productBody.remove();

  products.forEach(function (product) {
    if (productId == product.id) {
      let index = products.indexOf(product)
      products.splice(index, 1)
    }
  })
  
  lastProduct();

  calculateTotalPrice()
  // console.log(button);

  let blockedProductButton = document.querySelector(
    `.button[data-product-id="${productId}"`
  );
  console.log(blockedProductButton);

  enableProductButton(blockedProductButton);

  // updateCart();
}

function enableProductButton(button) {
  button.dataset.active = false;
  button.classList.remove("button-active");
  button.querySelector("span").innerHTML = "Add to cart";
}

function setUniqueProductID() {
  let productID = getRandomNumber(1, 10000);
  return productID;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


buttons.forEach((button) => {
  // меняем кнопку
  button.addEventListener('click', () => {
    isBtnBlocked(button);
    showCart()
  })
});

cartIcon.onclick = showCart

closeBtn.onclick = hideCart

function calculateTotalPrice() {
  let totalPrice = 0;

  for (let product in products) {
    totalPrice += products[product].price * products[product].count;
  }

  totalValue.innerHTML = totalPrice.toFixed(2);
}

function hideCart() {
  cart.style.display = 'none'
}

function showCart() {
  cart.style.display = 'block'
}

function lastProduct() {
  if (products.length == 0) {
    hideCart()
  }
}

// экспирементс

