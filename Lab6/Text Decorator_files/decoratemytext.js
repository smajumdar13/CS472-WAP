/** scripts for Lab 6 - Decorate My Text */
"use strict";

function callAlert() {
  //   alert("Hello, world!");
  var text1 = document.getElementById("textbox");
  //   if (text1.style.fontSize === "1em") {
  //     text1.style.fontSize = "2em";
  //   } else {
  //     text1.style.fontSize = "1em";
  //   }
  var font = parseInt($("#textbox").css("font-size"));
  font += 2;
  document.getElementById("textbox").style.fontSize = font + "px";
}

function resizer(d) {
  if (d.interval) {
    clearInterval(d.interval);
  } else {
    d.interval = setInterval("callAlert();", 500);
  }
  // var intervalID = setInterval("callAlert()", 500);
}

function callAlert1() {
  //   alert("Hello, world!");
  var check1 = document.getElementById("check");
  var text2 = document.getElementById("textbox");
  if (check1.checked) {
    text2.style.fontWeight = "bold";
    text2.style.textDecoration = "underline";
    text2.style.color = "green";
    document.body.style.backgroundImage =
      "url('https://www.crushpixel.com/big-static12/preview4/large-number-us-dollar-bills-919933.jpg')";
  } else {
    text2.style.fontWeight = "";
    text2.style.color = "";
    text2.style.textDecoration = "none";
    document.body.style.backgroundImage = "none";
  }
}

// function callAlert1() {
//     alert("Hello, world!");
//     var text2 = document.getElementById("textbox");
//     if (text2.style.fontWeight != "bold") {
//       text2.style.fontWeight = "bold";
//     } else {
//       text2.style.fontWeight = "";
//     }
//   }

function isVowel(n) {
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

function pigLatin(str) {
  str = str.toLowerCase();
  // const vowels = ["a", "e", "i", "o", "u"];
  let vowelStart = 0;
  let i = 0;
  while (i < str.length) {
    if (isVowel(str.charAt(i)) === true) {
      vowelStart = i;
      break;
    } else {
      i++;
    }
  }
  const finalStr =
    str.substring(vowelStart) + str.substring(0, vowelStart) + "ay";
  console.log(finalStr);
  return finalStr.charAt(0).toUpperCase() + finalStr.substring(1);

  // if (vowels.includes(str[0])) {
  //   return str + "ay";
  // } else {
  //   for (let char of str) {
  //     if (vowels.includes(char)) {
  //       vowelIndex = str.indexOf(char);
  //       break;
  //     }
  //   }
  //   const finalStr = str.substring(vowelStart) + str.substring(0, vowelStart) + "ay";
  //   return finalStr.to
  // }
}
// individually converted all text to pig latin
function textConvert() {
  // h1
  var stringArray;
  let str1 = document.getElementById("firstHead").innerHTML;
  stringArray = str1.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = pigLatin(stringArray[i]);
  }
  str1 = stringArray.join(" ");
  document.getElementById("firstHead").innerHTML = str1;

  // textbox
  let str2 = document.getElementById("textbox").innerHTML;
  stringArray = str2.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = pigLatin(stringArray[i]);
  }
  str2 = stringArray.join(" ");
  document.getElementById("textbox").innerHTML = str2;

  // legend1
  let str3 = document.getElementById("legend1").innerHTML;
  stringArray = str3.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = pigLatin(stringArray[i]);
  }
  str3 = stringArray.join(" ");
  document.getElementById("legend1").innerHTML = str3;

  // legend2
  let str4 = document.getElementById("legend2").innerHTML;
  stringArray = str4.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = pigLatin(stringArray[i]);
  }
  str4 = stringArray.join(" ");
  document.getElementById("legend2").innerHTML = str4;

  // button1
  let str5 = document.getElementById("btn").value;
  stringArray = str5.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = pigLatin(stringArray[i]);
  }
  str5 = stringArray.join(" ");
  document.getElementById("btn").value = str5;

  // bling
  let str6 = document.getElementById("bling").innerHTML;
  stringArray = str5.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = pigLatin(stringArray[i]);
  }
  str6 = stringArray.join(" ");
  document.getElementById("bling").innerHTML = str6;
}

function malko() {
  var malArray;
  let str1 = document.getElementById("firstHead").innerHTML;
  malArray = str1.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str1 = malArray.join(" ");
  document.getElementById("firstHead").innerHTML = str1;

  let str2 = document.getElementById("textbox").innerHTML;
  malArray = str2.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str2 = malArray.join(" ");
  document.getElementById("textbox").value = str2;

  let str3 = document.getElementById("legend1").innerHTML;
  malArray = str3.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str3 = malArray.join(" ");
  document.getElementById("legend1").value = str3;

  let str4 = document.getElementById("legend2").innerHTML;
  malArray = str4.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str4 = malArray.join(" ");
  document.getElementById("legend2").value = str4;

  let str5 = document.getElementById("btn").value;
  malArray = str5.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str5 = malArray.join(" ");
  document.getElementById("btn").value = str5;

  let str6 = document.getElementById("bling").innerHTML;
  malArray = str6.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str6 = malArray.join(" ");
  document.getElementById("bling").innerHTML = str6;

  let str7 = document.getElementById("btn1").value;
  malArray = str7.split(" ");
  for (let i = 0; i < malArray.length; i++) {
    if (malArray[i].length >= 5) malArray[i] = "Malkovich";
  }
  str7 = malArray.join(" ");
  document.getElementById("btn1").value = str7;
}
