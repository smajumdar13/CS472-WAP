/**
 * app-lesson6.js
 * addEventListener, map, filter, find, findIndex, reduce, for-loops(for, for in, for of, forEach),
 *
 * map, filter, find, and reduce are considered "Pure" functions, and have no side-effects
 */
// window.onload = function() {
console.log(window);
console.log(window.location);
console.log(window.location.href);
// alert("Hello JS");

const btnOK = document.getElementById("btnOK");
// btnOK.onclick = changeBtnText;
// function changeBtnText(){
//     const btnOK = document.getElementById("btnOK");
//     btnOK.innerText = "Clicked";
// }

btnOK.addEventListener("click", function () {
  const btnOK = document.getElementById("btnOK");
  btnOK.innerText = "Clicked 2";
});

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((s) => s * s);
console.log(newArr);

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron"];
const a2 = a.map(function (f) {
  return f.length;
});
console.log("a2: " + a2);

const a3 = a.map((f) => f.length);
console.log("a3: " + a3);

console.log("a4: " + a.map((a) => a.length));

const b1 = a.filter((s) => s.length > 7);
console.log("b1: " + b1);
const b2 = a.find((s) => s.length < 7);
console.log("b2: " + b2);
const b3 = a.findIndex((s) => s.length > 8);
console.log("b3: " + b3);

// const initialValue = 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));

a.forEach((e) => console.log("element: " + e));

const sumOfSquares = (arr) =>
  arr.map((e) => e * e).reduce((acc, sq) => acc + sq);
console.log(sumOfSquares(arr));

const sumOfSquaresOfEvensOnly = (arr) =>
  arr
    .filter((n) => n % 2 === 0)
    .map((e) => e * e)
    .reduce((acc, sq) => acc + sq);
console.log(sumOfSquaresOfEvensOnly(arr));

//

// };
