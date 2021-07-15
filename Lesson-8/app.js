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
        button.addEventListener("click", function () {
            basketCounterEl.style.opacity = "1"
            basketCounterEl.textContent++;
        });
    })
}
addEventListenersForAddToCartButtons()
let basketRowEl = document.querySelector(".basketRow")


let productCards = document.querySelectorAll(".card")
productCards.forEach(function (addToBasket) {
    addToBasket.addEventListener("click", function (event) {
        basketTotalEl.insertAdjacentHTML("beforeBegin", //basketRow)
    })
})
let basket = {};


