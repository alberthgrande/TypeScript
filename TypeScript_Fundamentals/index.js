// let firstName: string = "Alberth";
// let lastName: string = "Ruado";
// console.log(firstName, lastName);
// function getFullname(firstName: string, lastName: string, date: Date) {
//   console.log(`${firstName} ${lastName}, Date: ${date.toDateString()}`);
// }
// getFullname("Alberth", "Ruado", new Date());
// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// console.log(obj);
// console.log(n);
// console.log(obj.bar);
// function getGreet(greet: string) {
//   console.log("Hello, " + greet.toUpperCase() + "!!");
// }
// getGreet("World");
// const names = ["Alice", "Bob", "Eve"];
// names.forEach(function (s) {
//   console.log(s);
// });
// names.forEach((s) => {
//   console.log(s);
// });
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's x value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    return obj.first + " " + obj.last;
}
console.log(printName({ first: "alberth" }));
console.log(printName({ first: "alberth", last: "ruado" }));
