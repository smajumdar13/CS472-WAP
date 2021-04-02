/**
 * app.js
 *
 * lexical environment - place where code appears in the program
 * scope - defines enclosing context, visibility, and accessibility
 * execution context -
 */

var x; //global scope, global environment

function foo() {
  var x; //function scope, being in a function
  for (var y = 0; y < 2; y++) {
    var z; // function scope, var keyword, and is visible outside the block too
    let w; // block scope variable, only visible inside the block
    const v = 0; // block scope variable
  }
}

// to remember
// not block variable
const doublingEyeFuncs = [];
for (var i = 1; i < 5; i++) {
  doublingEyeFuncs[i] = function () {
    return i * 2;
  };
}
console.log(doublingEyeFuncs[1]()); //prints 10
console.log(doublingEyeFuncs[2]()); //prints 10
console.log(doublingEyeFuncs[3]()); //prints 10
console.log(doublingEyeFuncs[4]()); //prints 10

// block variable
const doublingEyeFuncs1 = [];
for (let i = 1; i < 5; i++) {
  doublingEyeFuncs1[i] = function () {
    return i * 2;
  };
}
console.log(doublingEyeFuncs1[1]()); //prints 2
console.log(doublingEyeFuncs1[2]()); //prints 4
console.log(doublingEyeFuncs1[3]()); //prints 6
console.log(doublingEyeFuncs1[4]()); //prints 8

// hoisting
console.log(xx);
var xx; // undefined, hoisting
// console.log(yy);
let yy; // error, as js requires to declare before console

var zz;
console.log(zz);
zz = 3;
console.log(zz);

console.log(f());
function f() {
  return 0;
}

// console.log(g);
// const g = function () {
//   return 1;
// };

h = 4;
console.log(h);
// h = 4;

// ternary operation
const r = 1 < 2 ? 1 : 2;

const bob = {
  name: "Bob",
  log: function () {
    console.log(this);
    console.log(this.name);
  },
};
console.log(bob);
bob.log();
bob.age = 23;
bob.log();

// Encapsulation and namespace protection with closures

// module pattern example
// (function () {
//   const objBob = {
//     name: "Bob",
//     log: function () {
//       console.log(this);
//       console.log(this.name);
//     }
//   }
// })();

(function () {
  var count = 0;
  function incr(n) {
    count += n;
  }
  function reset() {
    count = 0;
  }
  incr(4);
  incr(2);
  console.log("count: " + count);
})();
