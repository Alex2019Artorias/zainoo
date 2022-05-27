// переменные
let cart = document.querySelector("#cart");
let buttons = document.querySelectorAll(".button");
let totalValue = document.querySelector('.total-price-value');

let products = [];
let sum = 0

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
  products.push(productObject);
  console.log(productObject);
  console.log(products);

  sum += productCount * parseInt(productPrice)

  createHTML(productImg, productTitle, productPrice, productCount, productObject.id)

  // return true
}

function createHTML(productImg, productTitle, productPrice, productCount, productId) {
  let cartHtml = `
  <div class="cart-body">
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
      <button class="cart-cross">X</button>
    </div>
  </div>`;
  
  cart.insertAdjacentHTML('afterbegin', cartHtml)
  totalValue.innerHTML = sum
  
  // let plus = cartHtml.querySelector('.plus-button')
  // let minus = cartHtml.querySelector('.minus-button')
  // let cross = cartHtml.querySelector('.cart-cross')

  // plus.onclick = add(productCount, productPrice)
  // minus.onclick = deduct(productCount, productPrice)

  // cross.onclick = del(button)

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
}

// минусик
function deduct(productTitle, productId) {
	let span = document.querySelector(`.cart-count[data-id="${productId}"]`);

	products.forEach(function (product) {
    if (productTitle == product.title) {
      if (product.count > 1) { 
        product.count--;
        span.innerHTML = product.count;
      }
		}
	});
}

function del(button) {
  cross.onclick = () => {
    // удаляем html
    document.querySelector('.cart-body').remove()
    // удаляем из массива
    let index = products.indexOf('productsArr')
    products.splice(index, 1)
    
    button.dataset.active = "false"    

    console.log(products);
  }
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
  })
  
  // let btn = button
});

// экспирементс


// var myArray = ['one', 'two', 'three'];
// var myIndex = myArray.indexOf('two');
// if (myIndex !== -1) {
//     myArray.splice(myIndex, 1);
// }
// console.log(myArray)
