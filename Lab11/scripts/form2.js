/* form 2 scripts */
("use strict");

$(document).ready(function () {
  $("#form1").submit(function (e) {
    e.preventDefault();

    console.log("Product: " + $("#product").val());
    console.log("Name: " + $("#name").val());
    console.log("Unit Price: " + $("#unitPrice").val());
    console.log("Quantity in Stock: " + $("#qty").val());
    console.log("Supplier: " + $("#supp").val());
    console.log("Date Supplied: " + $("#date").val());

    var myWindow = window.open("", "", "width=600,height=400");
    myWindow.document.write(
      "Product: " +
        $("#product").val() +
        "<br />" +
        "Name: " +
        $("#name").val() +
        "<br />" +
        "Unit Price: " +
        $("#unitPrice").val() +
        "<br />" +
        "Quantity in Stock: " +
        $("#qty").val() +
        "<br />" +
        "Supplier: " +
        $("#supp").val() +
        "<br />" +
        "Date Supplied: " +
        $("#date").val()
      // '\n' didn't work for a line break, so went with <br /> for the output
    );
    myWindow.document.title = "Product Preview";
    myWindow.document.close();
  });
});
