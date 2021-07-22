"use strict"
let addToCart = document.querySelectorAll(".button__buy")
let openBasketBtn = document.querySelector(".cart__logo");
let basketEl = document.querySelector(".basket");
let basketCounterEl = document.querySelector(".counter__cart");
let basketTotalEl = document.querySelector(".basketTotal");
let basketTotalValueEl = document.querySelector(".basketTotalValue");

openBasketBtn.addEventListener("mouseover", function () {
    basketEl.style.display = "block"
});
openBasketBtn.addEventListener("mouseout", function () {
    basketEl.style.display = "none"
});
function addEventListenersForAddToCartButtons() {
    let addToCartBtns = document.querySelectorAll(".buy__add-to-cart");
    addToCartBtns.forEach(function (button) {
        button.addEventListener("click", function (event) {
            basketCounterEl.style.opacity = "1"
            basketCounterEl.textContent++;
            const productId = event.currentTarget.getAttribute('data-productId');
        });
    })
}
addEventListenersForAddToCartButtons()

let basket = {};

function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}


function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}


function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}


function addProductIntoBasket(productId) {
    addProductToObject(productId);
    renderProductInBasket(productId);
}

