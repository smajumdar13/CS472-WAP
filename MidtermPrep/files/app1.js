// var row = 2;
function addAcct() {
  var table1 = document.getElementById("acct");

  var id1 = document.getElementById("acc").value;
  var name1 = document.getElementById("cust").value;
  // var type1 = document.getElementById("type").value;
  let e = document.getElementById("typee");
  let type1 = e.options[e.selectedIndex].value;

  // var row1 = table1.insertRow(row);
  var row1 = table1.insertRow(-1);
  var cell1 = row1.insertCell(0);
  cell1.innerHTML = id1 + " | " + name1 + " | " + type1;
  // row++;
  return false;
}
