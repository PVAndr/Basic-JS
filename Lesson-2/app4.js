"use strict"

let a = parseInt(prompt("Введите первое число"))
let b = parseInt(prompt("Введите второе число"))
function summ(num1, num2) {
    let summ = num1 + num2
    alert("Результат сложения: " + summ)
}
summ(a, b)

function mult(num1, num2) {
    let mult = num1 * num2
    alert("Результат умножения: " + mult)
}
mult(a, b)

function diff(num1, num2) {
    let diff = num1 - num2
    alert("Результат вычитания: " + diff)
}
diff(a, b)

function segment(num1, num2) {
    let segment = num1 / num2
    alert("Результат деления: " + segment)
}
segment(a, b)