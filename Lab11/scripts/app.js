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
        if (tr1.find("td:eq(2)").text() == "Savings")
          tr1.addClass("accSavings");
        if (tr1.find("td:eq(2)").text() == "Checking")
          tr1.addClass("accChecking");
        if (tr1.find("td:eq(2)").text() == "Loan") tr1.addClass("accLoan");
      });
  });

  // // first way that i worked out
  // $("#isSavings").change(function () {
  //   if (this.checked) {
  //     $(".accChecking").hide();
  //     $(".accLoan").hide();
  //   } else {
  //     $(".accChecking").show();
  //     $(".accLoan").show();
  //   }
  // });

  // $("#isChecking").change(function () {
  //   if (this.checked) {
  //     $(".accSavings").hide();
  //     $(".accLoan").hide();
  //   } else {
  //     $(".accSavings").show();
  //     $(".accLoan").show();
  //   }
  // });

  // $("#isLoan").change(function () {
  //   if (this.checked) {
  //     $(".accSavings").hide();
  //     $(".accChecking").hide();
  //   } else {
  //     $(".accSavings").show();
  //     $(".accChecking").show();
  //   }
  // });

  // second way, but still not working
  $("#isSavings").change(function () {
    if (this.checked) {
      $("tr").not(":first").not(".accSavings").hide();
    } else {
      $("tr").show();
      // $(".accChecking, .accLoan").show();
    }
  });
  $("#isChecking").change(function () {
    if (this.checked) {
      $("tr").not(":first").not(".accChecking").hide();
    } else {
      $(".accSavings, .accLoan").show();
    }
  });
  $("#isLoan").change(function () {
    if (this.checked) {
      $("tr").not(":first").not(".accLoan").hide();
    } else {
      $(".accSavings, .accChecking").show();
    }
  });

  // $(':checkbox').on('click',function () {})
});
