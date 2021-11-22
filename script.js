const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function (a, b, c) {
  if (a === "+") {
    return add(b, c);
  } else if (a === "-") {
    return subtract(b, c);
  } else if (a === "*") {
    return multiply(b, c);
  } else if (a === "/") {
    return divide(b, c);
  }
};

let equalsfunction = function () {
  displaydiv.textContent = String(
    operate(storedOperator, storedNum, currentNum)
  );
  storeddiv.textContent = storedNum + storedOperator + currentNum;
  storedNum = Number(displaydiv.textContent);
  currentNum = Number(displaydiv.textContent);
};

let currentNum = 0;
let displaydiv = document.querySelector(".displaynum");
displaydiv.textContent = currentNum;

let storedNum;
let storeddiv = document.querySelector(".storednum");

let storedOperator = "";

let one = document.querySelector(".one");
one.onclick = function one() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 1;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 1;
  currentNum = Number(displaydiv.textContent);
};

let two = document.querySelector(".two");
two.onclick = function two() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 2;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 2;
  currentNum = Number(displaydiv.textContent);
};

let three = document.querySelector(".three");
three.onclick = function three() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 3;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 3;
  currentNum = Number(displaydiv.textContent);
};

let four = document.querySelector(".four");
four.onclick = function four() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 4;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 4;
  currentNum = Number(displaydiv.textContent);
};

let five = document.querySelector(".five");
five.onclick = function five() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 5;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 5;
  currentNum = Number(displaydiv.textContent);
};

let six = document.querySelector(".six");
six.onclick = function six() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 6;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 6;
  currentNum = Number(displaydiv.textContent);
};

let seven = document.querySelector(".seven");
seven.onclick = function seven() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 7;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 7;
  currentNum = Number(displaydiv.textContent);
};

let eight = document.querySelector(".eight");
eight.onclick = function eight() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 8;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 8;
  currentNum = Number(displaydiv.textContent);
};

let nine = document.querySelector(".nine");
nine.onclick = function nine() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 9;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 9;
  currentNum = Number(displaydiv.textContent);
};

let zero = document.querySelector(".zero");
zero.onclick = function zero() {
  if (displaydiv.textContent === "0") {
    displaydiv.textContent = 0;
    currentNum = Number(displaydiv.textContent);
  } else displaydiv.textContent += 0;
  currentNum = Number(displaydiv.textContent);
};

let addbutton = document.querySelector(".add-button");
addbutton.onclick = function () {
  storedNum = currentNum;
  currentNum = 0;
  displaydiv.textContent = 0;
  storeddiv.textContent = storedNum + " +";
  storedOperator = "+";
};

let subtractbutton = document.querySelector(".subtract-button");
subtractbutton.onclick = function () {
  storedNum = currentNum;
  currentNum = 0;
  displaydiv.textContent = 0;
  storeddiv.textContent = storedNum + " -";
  storedOperator = "-";
};

let multiplybutton = document.querySelector(".multiply-button");
multiplybutton.onclick = function () {
  storedNum = currentNum;
  currentNum = 0;
  displaydiv.textContent = 0;
  storeddiv.textContent = storedNum + " *";
  storedOperator = "*";
};

let dividebutton = document.querySelector(".divide-button");
dividebutton.onclick = function () {
  storedNum = currentNum;
  currentNum = 0;
  displaydiv.textContent = 0;
  storeddiv.textContent = storedNum + " /";
  storedOperator = "/";
};

let clear = document.querySelector(".clear-button");
clear.onclick = function clear() {
  displaydiv.textContent = 0;
  storeddiv.textContent = "";
  currentNum = Number(displaydiv.textContent);
};

let equals = document.querySelector(".equals-button");
equals.onclick = equalsfunction;
