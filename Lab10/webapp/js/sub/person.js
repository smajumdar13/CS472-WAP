/** script for person.js */
"use strict";

class person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }
  getDateOfBirth() {
    return this.dateOfBirth;
  }
  setDateOfBirth(newDate) {
    this.dateOfBirth = newDate;
  }
  // // alternative method for toString
  //   toString() {
  //     return `{Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth()}}`;
  //   }
}

person.prototype.toString = function () {
  return `{Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth()}}`;
};

// const ana = new person(
//   "Ana Smith",
//   new Date(1998, 12 - 1, 15).toISOString().slice(0, 10)
// );
// console.log(ana);
// console.log(ana.toString());

export { person };
