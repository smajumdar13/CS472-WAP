/** scripts for Lab 6 - Decorate My Text */

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

function resizer() {
  setInterval("callAlert()", 500);
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

function piglatin() {
  
  var list = document.getElementsByClassName("platin").value;
  let temp1 = "";
  let temp2 = "";
    for (let j = 0; j < list.length; j++) {
      if (isVowel(list[i].charAt(j)) === false) {
        temp1 += list[i].charAt(j);
      } else {
        temp2 += list[i].charAt(j);
      }
      return temp2 + temp1 + "ay";
    }
  }
}
