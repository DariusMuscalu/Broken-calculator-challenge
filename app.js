let display = document.getElementById('display');

let num1 = document.getElementById('number-1');
let num2 = document.getElementById('number-2');
let num3 = document.getElementById('number-3');
let num4 = document.getElementById('number-4');
let num5 = document.getElementById('number-5');
let num6 = document.getElementById('number-6');
let num7 = document.getElementById('number-7');
let num8 = document.getElementById('number-8');
let num9 = document.getElementById('number-9');
let num0 = document.getElementById('number-0');
let opPlus = document.getElementById('operator-plus');
let opMinus = document.getElementById('operator-minus');
let opDivision = document.getElementById('operator-division');
let opPer = document.getElementById('operator-per');

let opPer1 = document.getElementById('display');
opPer.addEventListener('click', () => {
  display.textContent += opDivision.textContent;
});

let opDivision1 = document.getElementById('display');
opDivision.addEventListener('click', () => {
  display.textContent += opPer.textContent;
});

let opPlus1 = document.getElementById('display');
opPlus.addEventListener('click', () => {
  display.textContent += opMinus.textContent;
});

let opMinus1 = document.getElementById('display');
opMinus.addEventListener('click', () => {
  display.textContent += opPlus.textContent;
});

num1.addEventListener('click', () => {
  display.textContent += num2.textContent;
});

let numberDisplay2 = document.getElementById('display');
num2.addEventListener('click', () => {
  display.textContent += num3.textContent;
});

let numberDisplay3 = document.getElementById('display');
num3.addEventListener('click', () => {
  display.textContent += num4.textContent;
});

let numberDisplay4 = document.getElementById('display');
num4.addEventListener('click', () => {
  display.textContent += num5.textContent;
});

let numberDisplay5 = document.getElementById('display');
num5.addEventListener('click', () => {
  display.textContent += num6.textContent;
});

let numberDisplay6 = document.getElementById('display');
num6.addEventListener('click', () => {
  display.textContent += num7.textContent;
});

let numberDisplay7 = document.getElementById('display');
num7.addEventListener('click', () => {
  display.textContent += num8.textContent;
});

let numberDisplay8 = document.getElementById('display');
num8.addEventListener('click', () => {
  display.textContent += num9.textContent;
});

let numberDisplay9 = document.getElementById('display');
num9.addEventListener('click', () => {
  display.textContent += num3.textContent;
});

let numberDisplay0 = document.getElementById('display');
num0.addEventListener('click', () => {
  display.textContent += num1.textContent;
});

let reset = document.getElementById('operator-ce');
reset.addEventListener('click', () => {
  display.innerHTML = '';
});

let equal = document.getElementById('operator-equal');
equal.addEventListener('click', () => {
  display.textContent = '69';
});