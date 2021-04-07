/** script for employee.js */
"use strict";
import { person } from "./person.js";

class employee extends person {
  constructor(name, dateOfBirth, salary, hireDate, job) {
    super(name, dateOfBirth);
    this.salary = salary;
    this.hireDate = hireDate;
    this.job = job;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(newSalary) {
    this.salary = newSalary;
  }
  getHireDate() {
    return this.hireDate;
  }
  setHireDate(newHireDate) {
    this.hireDate = newHireDate;
  }
  doJob(jobTitle) {
    this.job = jobTitle;
  }
  getJob() {
    return this.job;
  }
  // // alternate way for toString method
  //   toString() {
  //     return `${this.getName()} is a ${this.doJob(
  //       "Programmer"
  //     )} who earns $${this.getSalary()}`;
  //   }
}

employee.prototype.toString = function () {
  return `${this.getName()} is a ${this.getJob()} who earns $${this.getSalary().toFixed(
    2
  )}`;
};

// const anna = new employee(
//   "Anna Smith",
//   new Date(1998, 12 - 1, 15).toISOString().slice(0, 10),
//   (249995.5).toFixed(2),
//   new Date(2018, 9 - 1, 1).toISOString().slice(0, 10)
// );
// console.log(anna);
// console.log(anna.toString());

export { employee };
