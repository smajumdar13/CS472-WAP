/* form 1 scripts */
"use strict";

$(document).ready(function () {
  $("#form1").submit(function (e) {
    e.preventDefault();
    console.log("Email: " + $("#email").val());
    console.log("Password: " + $("#password").val());
    console.log("Checkbox: " + $("#checkbox").val());
    console.log("Website: " + $("#website").val());
  });
});
