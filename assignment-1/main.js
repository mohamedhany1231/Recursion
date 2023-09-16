function fibs(num) {
  let a = 0;
  let b = 1;
  let arr = [a, b];
  for (let i = 2; i < num; i++) {
    let c = b;
    b = b + a;
    a = c;
    arr.push(b);
  }
  return arr;
}
console.log(fibs(10));

function fibsRec(n) {
  return n == 1
    ? [0]
    : n == 2
    ? [0, 1]
    : [...fibsRec(n - 1), +fibsRec(n - 1).pop() + +fibsRec(n - 2).pop()];
}
console.log(fibsRec(10));
