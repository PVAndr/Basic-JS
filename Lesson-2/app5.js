"use strict"

let a = parseInt(prompt("Введите первое число"))
let b = parseInt(prompt("Введите второе число"))
function summ(num1, num2) {
    console.log(num1 + num2);

}
summ(a, b)

function mult(num1, num2) {
    console.log(num1 * num2);

}
mult(a, b)

function diff(num1, num2) {
    console.log(num1 - num2);

}
diff(a, b)

function segment(num1, num2) {
    console.log(num1 / num2);

}
segment(a, b)

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summ(arg1, arg2)
        case "-":
            return diff(arg1, arg2)
        case "*":
            return mult(arg1, arg2)
        case "/":
            return segment(arg1, arg2)
    }
}
mathOperation(a, b, "+")
mathOperation(a, b, "-")
mathOperation(a, b, "*")
mathOperation(a, b, "/")