const nums = [1, 9, 3, 22, 5];
// 01 the biggest number in the array
function max(n) {
  let temp = 0;
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] > n[i + 1]) {
      temp = n[i];
    } else {
      temp = n[i + 1];
    }
  }
  return temp;
}
console.log("Max: " + max(nums));
document.write("Max: " + max(nums));
document.write("<br />");

// 02 biggest number among three numbers
const maxNumOfThree = [1, 2, 3];
function maxOfThree(a, b, c) {
  let temp = 0;
  if ((a > b) & (a > c)) temp = a;
  else if ((b > c) & (b > a)) temp = b;
  else temp = c;
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
  if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u")
    return true;
  return false;
}
console.log("Is it a vowel? " + isVowel("c"));
document.write("Is it a vowel? " + isVowel("c"));
document.write("<br />");

// 04a sum of all numbers
const numbers = [1, 2, 3, 4];
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
  const temp = array.filter((f) => f.length > i);
  return temp;
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
const sumOfSquares = (arr) =>
  arr.map((e) => e * e).reduce((acc, sq) => acc + sq);
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
    .reduce((acc, sq) => acc + sq);
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
const sum1 = (arr) => arr.reduce((acc, sq) => acc + sq);
console.log("Sum of " + numbers + ": " + sum1(numbers));
document.write("Sum of " + numbers + ": " + sum1(numbers));
document.write("<br />");

// 11b using array.reduce in Q5
const multiply1 = (arr) => arr.reduce((acc, sq) => acc * sq);
console.log("Product of " + numbers + ": " + multiply1(numbers));
document.write("Product of " + numbers + ": " + multiply1(numbers));
document.write("<br />");

// 12 finding the second biggest number
const array1 = [19, 9, 11, 0, 12];
function secondBiggest(arr) {
  let biggest = arr[0];
  let secondBiggest = arr[1];
  let temp = 0;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > biggest) {
      temp = biggest;
      biggest = arr[i];
      secondBiggest = temp;
    } else if (arr[i] > secondBiggest) {
      secondBiggest = arr[i];
    }
  }
  return secondBiggest;
}
console.log("Second biggest of " + array1 + ": " + secondBiggest(array1));
document.write("Second biggest of " + array1 + ": " + secondBiggest(array1));
document.write("<br />");

// 13 print an array of n fibonacci numbers from two given numbers
function printFibo(n, a, b) {
  let arrayFibo = [a, b];
  for (let i = 2, j = 0; i < n; i++) {
    arrayFibo[i] = arrayFibo[i - 1] + arrayFibo[i - 2];
  }
  return arrayFibo;
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
