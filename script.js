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
  if (currentNum === 0 && storedOperator === "/") {
    displaydiv.textContent = "Oh Crap...";
  } else if (storedOperator !== "") {
    let answer = String(operate(storedOperator, storedNum, currentNum));
    if (answer.length > 10) {
      displaydiv.textContent = Number(answer).toFixed(10);
    } else displaydiv.textContent = answer;
  }
  // storeddiv.textContent = storedNum + storedOperator + currentNum;
  // storedNum = Number(displaydiv.textContent);
  // currentNum = Number(displaydiv.textContent);
};

function checkZeroDivide() {
  if (currentNum === 0 && storedOperator === "/") {
    displaydiv.textContent = "Oh Crap...";
  }
}

let currentNum = 0;
let displaydiv = document.querySelector(".displaynum");
displaydiv.textContent = currentNum;

let storedNum = 0;
let storeddiv = document.querySelector(".storednum");

let storedOperator = "";

let one = document.querySelector(".one");
one.onclick = function one() {
  if (currentNum === 0) {
    displaydiv.textContent = 1;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 1;
    currentNum = Number(displaydiv.textContent);
  }
};

let two = document.querySelector(".two");
two.onclick = function two() {
  if (currentNum === 0) {
    displaydiv.textContent = 2;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 2;
    currentNum = Number(displaydiv.textContent);
  }
};

let three = document.querySelector(".three");
three.onclick = function three() {
  if (currentNum === 0) {
    displaydiv.textContent = 3;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 3;
    currentNum = Number(displaydiv.textContent);
  }
};

let four = document.querySelector(".four");
four.onclick = function four() {
  if (currentNum === 0) {
    displaydiv.textContent = 4;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 4;
    currentNum = Number(displaydiv.textContent);
  }
};

let five = document.querySelector(".five");
five.onclick = function five() {
  if (currentNum === 0) {
    displaydiv.textContent = 5;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 5;
    currentNum = Number(displaydiv.textContent);
  }
};

let six = document.querySelector(".six");
six.onclick = function six() {
  if (currentNum === 0) {
    displaydiv.textContent = 6;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 6;
    currentNum = Number(displaydiv.textContent);
  }
};

let seven = document.querySelector(".seven");
seven.onclick = function seven() {
  if (currentNum === 0) {
    displaydiv.textContent = 7;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 7;
    currentNum = Number(displaydiv.textContent);
  }
};

let eight = document.querySelector(".eight");
eight.onclick = function eight() {
  if (currentNum === 0) {
    displaydiv.textContent = 8;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 8;
    currentNum = Number(displaydiv.textContent);
  }
};

let nine = document.querySelector(".nine");
nine.onclick = function nine() {
  if (currentNum === 0) {
    displaydiv.textContent = 9;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 9;
    currentNum = Number(displaydiv.textContent);
  }
};

let zero = document.querySelector(".zero");
zero.onclick = function zero() {
  if (currentNum === 0) {
    displaydiv.textContent = 0;
    currentNum = Number(displaydiv.textContent);
  } else {
    displaydiv.textContent += 0;
    currentNum = Number(displaydiv.textContent);
  }
};

let dot = document.querySelector(".dot-button");
dot.onclick = function dot() {
  if (String(currentNum).indexOf(".") === -1) {
    if (currentNum === 0) {
      currentNum = "0.";
      displaydiv.textContent = "0.";
    } else {
      displaydiv.textContent += ".";
      currentNum = displaydiv.textContent;
    }
  }
};

let addbutton = document.querySelector(".add-button");
addbutton.onclick = function () {
  if (currentNum === 0 && storedOperator === "/") {
    displaydiv.textContent = "Oh Crap...";
  } else if (storedNum === 0) {
    storedNum = currentNum;
    currentNum = 0;
    // displaydiv.textContent = 0;
    storedOperator = "+";
    storeddiv.textContent = storedOperator;
  } else if (storedNum !== 0) {
    equalsfunction();
    // displaydiv.textContent = storedNum;
    storedOperator = "+";
    storeddiv.textContent = storedOperator;
    storedNum = Number(displaydiv.textContent);
    currentNum = 0;
  }
};

let subtractbutton = document.querySelector(".subtract-button");
subtractbutton.onclick = function () {
  if (currentNum === 0 && storedOperator === "/") {
    displaydiv.textContent = "Oh Crap...";
  } else if (storedNum === 0) {
    storedNum = currentNum;
    currentNum = 0;
    // displaydiv.textContent = 0;
    // storeddiv.textContent = storedNum + " +";
    storedOperator = "-";
    storeddiv.textContent = storedOperator;
  } else if (storedNum !== 0) {
    equalsfunction();
    // displaydiv.textContent = storedNum;
    storedOperator = "-";
    storeddiv.textContent = storedOperator;
    storedNum = Number(displaydiv.textContent);
    currentNum = 0;
  }
};

let multiplybutton = document.querySelector(".multiply-button");
multiplybutton.onclick = function () {
  if (currentNum === 0 && storedOperator === "/") {
    displaydiv.textContent = "Oh Crap...";
  } else if (storedNum === 0) {
    storedNum = currentNum;
    currentNum = 0;
    // displaydiv.textContent = 0;
    // storeddiv.textContent = storedNum + " +";
    storedOperator = "*";
    storeddiv.textContent = storedOperator;
  } else if (storedNum !== 0) {
    equalsfunction();
    // displaydiv.textContent = storedNum;
    storedOperator = "*";
    storeddiv.textContent = storedOperator;
    storedNum = Number(displaydiv.textContent);
    currentNum = 0;
  }
};

let dividebutton = document.querySelector(".divide-button");
dividebutton.onclick = function () {
  if (currentNum === 0 && storedOperator === "/") {
    displaydiv.textContent = "Oh Crap...LOL";
  } else if (storedNum === 0) {
    storedNum = currentNum;
    currentNum = 0;
    // displaydiv.textContent = 0;
    // storeddiv.textContent = storedNum + " +";
    storedOperator = "/";
    storeddiv.textContent = storedOperator;
  } else if (storedNum !== 0) {
    equalsfunction();
    // displaydiv.textContent = storedNum;
    storedOperator = "/";
    storeddiv.textContent = storedOperator;
    storedNum = Number(displaydiv.textContent);
    currentNum = 0;
  }
};

let clear = document.querySelector(".clear-button");
clear.onclick = function clear() {
  displaydiv.textContent = 0;
  storeddiv.textContent = "";
  storedOperator = "";
  currentNum = Number(displaydiv.textContent);
  storedNum = 0;
};

let equals = document.querySelector(".equals-button");
equals.onclick = equalsfunction;
