// Return Type
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());

// Void Type
function printHello(): void {
  console.log("Hello!");
}
printHello();

// Parameters
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2, 5));

// Optional Parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(2, 5));

// Default Parameters
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
console.log(pow(10));

// Named Parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));

function addRest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((i, j) => i + j, 0);
}
console.log(addRest(10, 10, 10, 10, 10));

// Type Alias
type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));
