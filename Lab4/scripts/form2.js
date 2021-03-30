/* form 2 scripts */

{
  ("use strict");
  function getPreview() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("unitPrice").value;
    document.write(
      "Product Number: " +
        document.getElementById("product").value +
        "<br />" +
        "Name: " +
        document.getElementById("name").value +
        "<br />" +
        "Unit Price: " +
        document.getElementById("unitPrice").value +
        "<br />" +
        "Quantity: " +
        document.getElementById("qty").value +
        "<br />" +
        "Supplier: " +
        document.getElementById("supp").value +
        "<br />" +
        "Date Supplied: " +
        document.getElementById("date").value
    );
    return false;
  }
}
