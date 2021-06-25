"use strict"

let a = parseInt(prompt("Введите первое число"))
let b = parseInt(prompt("Введите второе число"))
if (a >= 0 && b >= 0) {
    let diff = a - b
    alert(diff)
}
else if (a < 0 && b < 0) {
    let mult = a * b
    alert(mult)
}
else {
    let summ = a + b
    alert(summ)
}
