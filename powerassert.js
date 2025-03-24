//npm install --save-dev power-assert
//npm install --save-dev mocha
const assert = require("power-assert");

const a = 2;
const b = 3;

function add(a, b) {
    return a + b;
}

function double(x) {
    return x * 2;
}

function addOne(x) {
    return x + 1;
}

function isEven(num) {
    return num % 2 === 0;
}

const obj = { a: { b: { c: 5} } };
const name = "alice";
const arr = [1, 2, 3];

assert(a + b === 6);
assert(add(2, 3) === 6);
assert((10 / 2) + (5 * 2) === 20);
assert(double(3) + addOne(4) === 15);
assert(obj.a.b.c === 10);
assert(a > 10 || b < 10);
assert(`Hello, ${name}!` === "Hello, bob!");
assert(arr[1] === 5);
assert(isEven(5));

