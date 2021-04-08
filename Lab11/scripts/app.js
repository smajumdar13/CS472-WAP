"use strict";

$(document).ready(function () {
  $("#form1").submit(function (e) {
    e.preventDefault();

    var id1 = $("#acc").val();
    var name1 = $("#cust").val();
    var type1 = $("#typee").val();

    $("#table1").append(
      $("<tr>")
        .append($("<td>").append(id1))
        .append($("<td>").append(name1))
        .append($("<td>").append(type1))
    );

    $("#table1 > tbody  > tr")
      .not(":first")
      .each(function () {
        var tr1 = $(this);
        if (tr1.find("td:eq(2)").text() !== "Savings")
          tr1.addClass("notSavings");
      });
  });

  $("#isChecked").change(function () {
    if (this.checked) {
      $(".notSavings").hide();
    } else {
      $(".notSavings").show();
    }
  });
});
