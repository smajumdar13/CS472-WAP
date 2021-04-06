/** script for lesson 9 inheritance */

// prototypal inheritance, and setting prototypes with constructors and Object.create

// // part 1
// const animal = {
//   eats: true,
//   runs: false,
//   sleeps: true,
// };
// const rabbit = {
//   jumps: true,
// };
// rabbit.__proto__ = animal;
// //__proto__ is a sneaky, and deprecated way to access [prototype]
// // alert(rabbit.runs);
// // alert(rabbit.eats);

// part 2
// no multiple inheritance, but inheritance can be chained, and no circular reference allowed
let animal = {
  eats: true,
  walk: function () {
    alert("Animal Walk");
  },
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};
let longEar = {
  earLength: 10,
  __proto__: rabbit,
};
rabbit.walk = function () {
  alert("Rabbit! Bounce-bounce!");
};
// rabbit.walk();

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
}

//
