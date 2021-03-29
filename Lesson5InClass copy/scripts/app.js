/**
 * app-lesson6.js
 */

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

btnOK.addEventListener("click", function(){
    const btnOK = document.getElementById("btnOK");
    btnOK.innerText = "Clicked 2";
})