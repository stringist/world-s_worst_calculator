"use strict";

window.addEventListener("DOMContentLoaded", setUp);

function setUp() {
    document.querySelector("#calculate").addEventListener("click", clickCalc());
    document.querySelector("#clear").addEventListener("click", clickClear());
}
// arm buttons
function clickCalc() {
    const operation = document.querySelector("#operator").value;
    const firstNumber = Number(document.querySelector("#firstnumber").value);
    const secondNumber = Number(document.querySelector("#secondnumber").value);
    let result;
    console.log("Calc");
    console.log("Operator is :" + operation.value);
    if (operation === "add") {
        result = firstNumber + secondNumber;
    } else if (operation === "mul") {
        result = firstNumber * secondNumber;
    } else if (operation === "sub") {
        result = firstNumber - secondNumber;
    } else if (operation === "div") {
        result = firstNumber / secondNumber;
    }
    console.log(result);
}

function clickClear() {
    console.log("Clear");
}
// get input

// getting input

// import {getDescription} from "./helpers.js";

// const input = document.querySelector("#input");
// const output = document.querySelector("#output");

// input.addEventListener("input", (event) => {
//     output.textContent = getDescription(event.currentTarget.value);
// });

// import {getDivisionRemainderBy2} from "./numbers.js";

// const number = document.querySelector("#your-number");
// const output = document.querySelector("#output");

// number.addEventListener("keyup", () => {
//     output.textContent = getDivisionRemainderBy2(Number.parseInt(number.value, 10));
// });

// input.addEventListener("input", (event) => {
//     output.textContent = getDescription(event.currentTarget.value);
// });