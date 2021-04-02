function Register() {
  var table1 = document.getElementById("patientList");

  var accId = document.getElementById("acc").value;
  var fName = document.getElementById("fName").value;
  var mName = document.getElementById("mName").value;
  var lName = document.getElementById("lName").value;
  var dateOfB = document.getElementById("dateob").value;
  var deptN = document.getElementById("departments").value;
  var outp = document.getElementById("rbt").value;

  var row1 = table1.insertRow(-1);
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  var cell7 = row1.insertCell(6);

  cell1.innerHTML = accId;
  cell2.innerHTML = fName;
  cell3.innerHTML = mName;
  cell4.innerHTML = lName;
  cell5.innerHTML = dateOfB;
  cell6.innerHTML = deptN;
  cell7.innerHTML = outp;

  return false;
}

// function calculate_age(dob) {
//   var birthdate = document.getElementById("dateob").value;
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms);

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// function elderlyPat(dob) {
//   dob = document.getElementById("dateob").value;
//   let;
// }
