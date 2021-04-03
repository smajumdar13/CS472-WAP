var selectedRow = null
var patientTable = document.getElementById("patientTable").getElementsByTagName('tbody')[0];

var initialArrayGlobal;

function loadData() {

    let patient1 = { "patientId": "p-001-000001", "nameId": "Ana", "midNameId": "J", "lastNameId": "Smith","dateBirthId": "1955-05-05","departmentId": "Ear. nose and Throat","outPatient": "No"};
    let patient2 = { "patientId": "p-001-000002", "nameId": "Bob", "midNameId": "k", "lastNameId": "Jones","dateBirthId": "1955-05-04","departmentId": "Cardiology","outPatient": "Yes"};
   

    let initialArray = [patient1,patient2];
    initialArray.forEach(element => {
        insertNewRecord(element);
    });
    
    initialArrayGlobal = initialArray;
}

loadData();

const outPatientOnlyCheck = document.getElementById("outPatientOnlyCheck");
outPatientOnlyCheck.addEventListener('change', function(event) {
    event.preventDefault();
   
    const tr = patientTable.getElementsByTagName("tr");
    
    for (let i = 0; i < tr.length; i++) {
        
        let td = tr[i].getElementsByTagName("td")[6];

        if(this.checked && td.textContent === "No"){
            tr[i].style.display = "none";
        }else{
            tr[i].style.display = "";
        }
    }       
   
});


const elderlyOnlyCheck = document.getElementById("elderlyOnlyCheck");
elderlyOnlyCheck.addEventListener('change', function(event) {
    event.preventDefault();
   
    const tr = patientTable.getElementsByTagName("tr");
    
    for (let i = 0; i < tr.length; i++) {
        
        let td = tr[i].getElementsByTagName("td")[6];
        if(this.checked && td.textContent === "No"){
            tr[i].style.display = "none";
        }else{
            tr[i].style.display = "";
        }
    }       
   
});



const patientForm = document.getElementById("patientForm");
patientForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
    
});

function readFormData() {
    var formData = {};

    formData["patientId"] = document.getElementById("patientId").value;
    formData["nameId"] = document.getElementById("nameId").value;
    formData["midNameId"] = document.getElementById("midNameId").value;
    formData["lastNameId"] = document.getElementById("lastNameId").value;
    formData["dateBirthId"] = document.getElementById("dateBirthId").value;
    formData["departmentId"] = document.getElementById("departmentId").value;
    formData["outPatient"] = document.querySelector('input[name="outPatient"]:checked').value;

    return formData;
}

function insertNewRecord(data) {
    var newRow = patientTable.insertRow(patientTable.length);
    
    const cell1 = newRow.insertCell(0);
    cell1.innerText = data.patientId;
    const cell2 = newRow.insertCell(1);
    cell2.innerText = data.nameId;
    const cell3 = newRow.insertCell(2);
    cell3.innerText = data.midNameId;
    const cell4 = newRow.insertCell(3);
    cell4.innerText = data.lastNameId;
    const cell5 = newRow.insertCell(4);
    cell5.innerText = data.dateBirthId;
    const cell6 = newRow.insertCell(5);
    cell6.innerText = data.departmentId;
    const cell7 = newRow.insertCell(6);
    cell7.innerText = data.outPatient;
    const cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick="onDelete(this)" class="btn btn-danger" >Delete</button>`;


}

function resetForm() {
    document.getElementById("patientId").value = '';
    document.getElementById("nameId").value = '';
    document.getElementById("midNameId").value = '';
    document.getElementById("lastNameId").value = '';
    document.getElementById("dateBirthId").value = '';
    document.getElementById("departmentId").value = '';
    document.querySelector('input[name="outPatient"]:checked').value = '';
    selectedRow = null;
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
      document.getElementById("patients").deleteRow(row);
      console.log(document)
    }
}



