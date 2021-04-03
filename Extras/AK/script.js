//add counter function
var add = (function () {
  var counter = 0;
  return function () {
    return (counter += 1);
  };
})();

//in revealing module pattern with add and reset functions and
var count = (function () {
  var counter = 0;
  const getCounter = function () {
    return counter;
  };

  const add = function () {
    return (counter += 1);
  };
  const reset = function () {
    counter = 0;
  };

  return {
    getCounter,
    add,
    reset,
  };
})();

/* Using Revealing Module Pattern, write a Javascript definition of a Module that creates an Employee Object with the following fields:
Private field: name, age, salary,
Private method: getAge(), getSalary(), getName()
Public method: setAge(newAge), setSalary(newSalary), setName(newName), increaseSalary(percentage), incrementAge() 
*/

var Employee = (function () {
  var name;
  var age;
  var salary;
  function getAge() {
    return this.age;
  }
  function getSalary() {
    return this.salary;
  }
  function getName() {
    return this.name;
  }
  function publicSetAge(newAge) {
    this.age = newAge;
  }
  function publicSetSalary(newSalary) {
    this.salary = newSalary;
  }
  function publicSetName(newName) {
    this.name = newName;
  }
  function publicIncreaseSalary(percentage) {
    this.salary = getSalary() * (1 + percentage / 100);
  }
  function publicIncrementAge() {
    this.age += 1;
  }
  return {
    setAge: publicSetAge,
    setSalary: publicSetSalary,
    setName: publicSetName,
    increaseSalary: publicIncreaseSalary,
    increamentAge: publicIncrementAge,
  };
})();

// extend Employee to have address field, getAddress() and setAddress(newAddress)
Employee.address = "default";
Employee.setAddress(newAddress){
    this.address = newAddress;
}
Employee.getAddress(){
    return this.address;
}

// another
const finalCounter = function(){
	let counter = 0;
	let valueChange = document.getElementById("make_adder").value;
	return counter + valueChange;
}();

// Counter inside the function is a free variable. A free variable is a variable which is defined outside the block of execution. Instances created will have access to that free variable by reference even after execution. (closure).