/** script file for lab 9
 * Author: Saurav Majumdar
 * CS472 - WAP
 * Prof. O. Kalu
 */
"use strict";

// Q1. created person object, and inherited the fields into John, and printed out to the console
let person = {
  name: "",
  dateOfBirth: "",
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  },
  printDetails: function () {
    console.log(`The person's name is ${this.name} \n
      ${this.name} was born on ${this.dateOfBirth}`);
  },
};

const person1 = Object.create(person);
person1.name = "John";
person1.dateOfBirth = "1998-12-10";
person1.printDetails();

// Q2. Employee IS_A person inheritance applied, created generic object employee
let employee = {
  salary: "$0",
  hireDate: new Date().toISOString().slice(0, 10),
  doJob: function (jobTitle) {
    var sal = this.salary;
    console.log(`${this.name} is a ${jobTitle} who earns ${this.salary}`);
  },
};

employee.prototype = person;
const employee1 = Object.create(employee);
employee1.name = "Anna";
employee1.salary = "$249995.50";
employee1.hireDate = new Date().toISOString().slice(0, 10);

employee1.doJob("Programmer");

// Q3 created object Person using function constructors, and two instances of the object
function Person() {
  this.name = "";
  this.dateOfBirth = "";
}

Person.prototype.toString = function () {
  console.log(
    "{Name: " + this.name + ", DateOfBirth: " + this.dateOfBirth + "}"
  );
};

const person2 = new Person();
person2.name = "John";
// -1 because month count starts from 0(zero), so without -1, it'll return 1999-01-10
person2.dateOfBirth = new Date(1998, 12 - 1, 10).toISOString().slice(0, 10);

person2.toString();

const person3 = new Person();
person3.name = "Peter";
person3.dateOfBirth = new Date(1985, 11 - 1, 10).toISOString().slice(0, 10);

person3.toString();
