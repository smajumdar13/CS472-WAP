/** script for main.js */
"use strict";

import { person } from "./sub/person.js";
import { employee } from "./sub/employee.js";

const arrayOfPersons = [
  new person(
    "Ana Smith",
    new Date(1998, 12 - 1, 15).toISOString().slice(0, 10)
  ),
  new person("Bob Jone", new Date(1945, 11 - 1, 16).toISOString().slice(0, 10)),
  new person(
    "Carlos Slim Helu",
    new Date(1976, 9 - 1, 24).toISOString().slice(0, 10)
  ),
];

for (let eachPerson of arrayOfPersons) {
  console.log(eachPerson.toString());
}

const newEmp = new employee(
  "Jim Hanson",
  new Date(1977, 6 - 1, 1).toISOString().slice(0, 10),
  245990,
  new Date(2011, 4 - 1, 20).toISOString().slice(0, 10)
);
newEmp.doJob("Software Engineer");

// console.log(newEmp);
console.log(newEmp.toString());
