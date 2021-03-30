/* lesson 6 scripts */
{
  ("use strict");

  function sumOfArgs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    //   sum = arguments.reduce((acc, n) => acc + n);
    return sum;
  }

  console.log(sumOfArgs(3, 1, 6, 4, 3, 34));
  console.log(sumOfArgs(343, 564, 2323));

  // rest parameters
  function sum(x, y, ...more) {
    let total = x + y;
    if (more.length > 0) {
      for (let i = 0; i < more.length; i++) {
        total += more[i];
      }
    }
    console.log("Total: " + total);
    return total;
  }

  sum(5, 6, 6);
  sum(9, 2, 4, 7, 6, 1, 5);

  function sumArgs2(x, y, ...more) {
    let sum = x + y;
    let sumMore = more.reduce((acc, n) => acc + n);
    return sum + sumMore;
  }
  console.log(sumOfArgs(3, 1, 6, 4, 3, 34));

  // concat
  let a, b, c, d, e;
  a = [1, 2, 3];
  b = "dog";
  c = [42, "cat"];
  d = a.concat(b, c);
  console.log(d);

  //spread operator
  e = [...a, b, ...c];
  console.log(e);

  console.log(a);
  console.log(...a);
}
