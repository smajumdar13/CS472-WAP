"use strict";

function addAcct() {
  console.log(
    "getElementById('acc').value + '|' + getElementById('cust').value + '|' + getElementById('acctype').value"
  );
  $(document).ready(function () {
    $("#btn").click(function (e) {
      $("accTable").append(
        "<tr><td>getElementById('acc').value + '|' + getElementById('cust').value + '|' + getElementById('acctype').value</td></tr>"
      );
    });
  });
  return false;
}
