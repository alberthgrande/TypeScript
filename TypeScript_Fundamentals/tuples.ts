// define tuples
let ourTuple: readonly [number, boolean, string] = [26, true, "Alberth"];
// ourTuple = ["Alberth", 26, true];
// ourTuple = [26, true, "Alberth"];
// ourTuple = [26, true, "Alberth"];
// ourTuple.push("Ruado");

// console.log(ourTuple);

// Named Tuples
const graph: [x: number, y: number] = [24, 26];
console.log(graph);

// Destructuring Tuples
const [x, y] = graph;
console.log(x, y);
