/**
 * main.js
 */

// window.onload = function () {
//   console.log("Hello jQuery!");
//   const h1 = document.getElementById("h1Hello");
//   const h1 = document.querySelector("#h1Hello");
//   h1.innerHTML = "Hello Updated jQuery";
// };

$(document).ready(function () {
  console.log("Hello jQuery!");
  //   const h1 = document.getElementById("h1Hello");
  //   h1.innerHTML = "Hello Updated jQuery";
  // alternative method using jQuery
  const h1 = $("#h1Hello");
  h1.text("Hello jQuery Updated Again");
  console.log($fh1[0].innerText);

  function highlightField() {}
});
