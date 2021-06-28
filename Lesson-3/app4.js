"use strict"
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let productsWithPhoto = products.filter(function (photo) {
    return "photos" in photo && photo.photos.length > 0
})
console.log(productsWithPhoto);
let productsPriceSort = products.sort(function (price1, price2) {
    return price1.price - price2.price;
})
console.log(productsPriceSort);