"use strict";

const nums = [1, 9];
// 01 the biggest number in the array
function max(n1, n2) {
  const temp = n1 > n2 ? n1 : n2;
  // let temp = 0;
  // for (let i = 0; i < n.length - 1; i++) {
  //   if (n[i] > n[i + 1]) {
  //     temp = n[i];
  //   } else {
  //     temp = n[i + 1];
  //   }
  // }
  return temp;
}
console.log("Max: " + max(nums));
document.write("Max: " + max(nums));
document.write("<br />");

// 02 max of three numbers
const maxNumOfThree = [1, 2, 3];
function maxOfThree(a, b, c) {
  let temp = 0;
  if ((a > b) & (a > c)) temp = a;
  else if ((b > c) & (b > a)) temp = b;
  else temp = c;

  // let max = n1;
  // if (n2 > max) max = n2;
  // if (n3 > max) max = n3;

  //using ternary
  // return (n1>n2 ? ((n1>n3) ? n1: n3) : (n2 > n3) ? n2 : n3);

  return temp;
}
console.log(
  "Max of Three numbers of " + maxNumOfThree + ": " + maxOfThree(42, 61, 19)
);
document.write(
  "Max of Three numbers of " + maxNumOfThree + ": " + maxOfThree(42, 61, 19)
);
document.write("<br />");

// 03 is a vowel or is not
function isVowel(n) {
  // if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u")
  //   return true;
  // return false;

  //using switch cases
  let r = false;
  switch (n.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      r = true;
      break;
  }
  return r;
}
console.log("Is it a vowel? " + isVowel("e"));
document.write("Is it a vowel? " + isVowel("E"));
document.write("<br />");

// 04a sum of all numbers
const numbers = [1, 2, 3, 4, 5];
function sum(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    temp += numbers[i];
  }
  return temp;
}
console.log("Sum of " + numbers + ": " + sum(numbers));
document.write("Sum of " + numbers + ": " + sum(numbers));
document.write("<br />");

// 04b product of all numbers
function multiply(array) {
  let temp = 1;
  for (let i = 0; i < array.length; i++) {
    temp *= numbers[i];
  }
  return temp;
}
console.log("Product of " + numbers + ": " + multiply(numbers));
document.write("Product of " + numbers + ": " + multiply(numbers));
document.write("<br />");

// 05 reversing a string
const string = '"jag testar"';
function reverse(str) {
  let strTemp = "";
  for (let i = 0; i < str.length; i++) {
    strTemp += str[str.length - 1 - i];
  }
  return strTemp;

  //using push function
  // let strTemp = [];
  // for (let i = str.length - 1; i >= 0; i--) {
  //   strTemp.push(str.charAt(i));
  // }
  // return strTemp.join("");

  // alternative solution - optimized for space and memory
}
console.log("Reverse string of " + string + ": " + reverse(string));
document.write("Reverse string of " + string + ": " + reverse(string));
document.write("<br />");

// 06 finding the longest word in the array
const arrayOfStrings = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
function findLongestWord(array) {
  let temp = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > temp) temp = array[i].length;
    // temp = temp.length;
  }
  return temp;
}
console.log("Array: " + arrayOfStrings);
document.write("Array: " + arrayOfStrings);
document.write("<br />");
console.log(
  "Length of the longest word is :" + findLongestWord(arrayOfStrings)
);
document.write(
  "Length of the longest word is :" + findLongestWord(arrayOfStrings)
);
document.write("<br />");

// 07 returning an array of words longer than given number
function filterLongWords(array, i) {
  // const temp = array.filter((f) => f.length > i);
  // return temp;
  return array.filter((f) => f.length > i);
}
console.log(
  "Array of words longer than given number: " +
    filterLongWords(arrayOfStrings, 7)
);
document.write(
  "Array of words longer than given number: " +
    filterLongWords(arrayOfStrings, 7)
);
document.write("<br />");

// 08 sum of squares of a given array
const sumOfSquares = (arr) => arr.map((e) => e * e).reduce((acc, n) => acc + n);
console.log("Sum of Squares of " + numbers + ": " + sumOfSquares(numbers));
document.write("Sum of Squares of " + numbers + ": " + sumOfSquares(numbers));
document.write("<br />");

// 09 array of odd numbers from given array
const oddNumbersOnly = (arr) => arr.filter((e) => e % 2 > 0);
console.log(
  "Array of odd numbers in " + numbers + " is: " + oddNumbersOnly(numbers)
);
document.write(
  "Array of odd numbers in " + numbers + " is: " + oddNumbersOnly(numbers)
);
document.write("<br />");

// 10 compute the sum of squares of even numbers only
const arrayOfNums = [1, 2, 3, 4, 5];
const computeSumOfSquaresOfEvensOnly = (arr) =>
  arr
    .filter((e) => e % 2 === 0)
    .map((e) => e * e)
    .reduce((acc, n) => acc + n);
console.log(
  "Sum of squares of even numbers only from " +
    arrayOfNums +
    ": " +
    computeSumOfSquaresOfEvensOnly(arrayOfNums)
);
document.write(
  "Sum of squares of even numbers only from " +
    arrayOfNums +
    ": " +
    computeSumOfSquaresOfEvensOnly(arrayOfNums)
);
document.write("<br />");

// 11a using array.reduce in Q4
function sum1(arr) {
  return arr.reduce((acc, n) => acc + n);
}
console.log("Sum of " + numbers + ": " + sum1(numbers));
document.write("Sum of " + numbers + ": " + sum1(numbers));
document.write("<br />");

// 11b using array.reduce in Q5
function multiply1(arr) {
  return arr.reduce((acc, n) => acc * n);
}
console.log("Product of " + numbers + ": " + multiply1(numbers));
document.write("Product of " + numbers + ": " + multiply1(numbers));
document.write("<br />");

// 12 finding the second biggest number
const array1 = [19, 9, 11, 0, 12];
// const array2 = [12];
function secondBiggest(arr) {
  if (arr.length < 2) {
    throw new Error("Invalid array. Must have at least 2 elements.");
  }
  let biggest = arr[0] > arr[1] ? arr[0] : arr[1];
  let secondBiggest = arr[0] === biggest ? arr[1] : arr[0];
  let i = 2;
  while (i < arr.length) {
    if (arr[i] > biggest) {
      secondBiggest = biggest;
      biggest = arr[i];
    } else if (arr[i] > secondBiggest) {
      secondBiggest = arr[i];
    }
    i++;
  }
  return secondBiggest;
}
console.log("Second biggest of " + array1 + ": " + secondBiggest(array1));
document.write("Second biggest of " + array1 + ": " + secondBiggest(array1));
// document.write("Second biggest of " + array1 + ": " + secondBiggest(array2));
document.write("<br />");

// 13 print an array of n fibonacci numbers from two given numbers
function printFibo(n, a, b) {
  if (n === 0) return "";
  if (n === 1) return a;
  // console.log("${a} => ${b}");
  else if (n === 2) return [a, b];
  // console.log("${a}, ${b}");
  else {
    let arrayFibo = [a, b];
    for (let i = 2; i < n; i++) {
      arrayFibo[i] = arrayFibo[i - 1] + arrayFibo[i - 2];
    }
    return arrayFibo;
  }
}
console.log("Fibonacci sequence from given numbers: " + printFibo(10, 0, 1));
document.write("Fibonacci sequence from given numbers: " + printFibo(10, 0, 1));
document.write("<br />");
document.write("<br />");

// 15 ticking clock
function tickingClock() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  let t = setTimeout(tickingClock, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
