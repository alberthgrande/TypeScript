const carOne: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
console.log(carOne);

// Type Interface
const carTwo = {
  type: "Toyota",
};
console.log(carTwo);

// Optional Properties
const carThree: { type: string; year?: number } = {
  type: "Toyota",
};
carThree.year = 2000;
console.log(carThree);

// Index Signatures
const nameAgeMap: { [key: string]: number } = {};
nameAgeMap.Alberth = 26;

console.log(nameAgeMap);
