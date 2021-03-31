/* form 1 scripts */

("use strict");

// document.getElementById("print").onclick =
// function printForm() {
//   console.log(document.getElementById("email").value);
//   console.log(document.getElementById("password").value);
//   console.log(document.getElementById("website").value);
//   return false;
// }

var form = document.getElementById("form1");
form1.onsubmit = function (e) {
  console.log(form.email.value);
  console.log(form.password.value);
  console.log(form.website.value);
  return false;
};
