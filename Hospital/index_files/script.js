function Register(event) {
  event.preventDefault();
  var table1 = document.getElementById("patientList");

  var accId = document.getElementById("acc").value;
  var fName = document.getElementById("fName").value;
  var mName = document.getElementById("mName").value;
  var lName = document.getElementById("lName").value;
  var dateOfB = document.getElementById("dateob").value;
  var deptN = document.getElementById("typee").value;
  //   var outp1 = document.getElementById("rbt1");
  //   var outp2 = document.getElementById("rbt2");

  var row1 = table1.insertRow(-1);
  row1.className = "childrow";
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  var cell7 = row1.insertCell(6);
  var cell8 = row1.insertCell(7);
  var cell9 = row1.insertCell(8);
  cell7.className = "childdata";

  var outp = "";
  if (document.getElementById("rbt1").checked) {
    outp = "Yes";
  } else if (document.getElementById("rbt2").checked) {
    outp = "No";
  }

  cell1.innerHTML = accId;
  cell2.innerHTML = fName;
  cell3.innerHTML = mName;
  cell4.innerHTML = lName;
  cell5.innerHTML = dateOfB;
  cell6.innerHTML = deptN;
  cell7.innerHTML = outp;
  cell8.innerHTML = "<a href='#'>Edit</a>";
  cell9.innerHTML = "<a href='#'>Delete</a>";

  document.getElementById("acc").value = "";
  document.getElementById("fName").value = "";
  document.getElementById("mName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("dateob").value = "";
  document.getElementById("typee").value = "";
  document.getElementById("rbt1").checked = false;
  document.getElementById("rbt2").checked = false;
  document.createElement();
}

// function deleteRow(text) {
//   document.getElementsByTagName("tr")[2].remove();
// // }
// function deleteRow(r) {
//   var i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("patientList").deleteRow(i);
// }
