// Enums Defaults | Initialized
enum CardinalDirection {
  North = "Nortth",
  East = "East",
  South = "South",
  West = "West",
}
// const currentDirection = CardinalDirection.North;

console.log(CardinalDirection.North);
console.log(CardinalDirection.West);

// Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// Aliases & Interface
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = { year: CarYear; type: CarType; model: CarModel };

const carYear: CarYear = 2000;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};
console.log(car);

// Interface
interface Rectangle {
  height: number;
  width: number;
}
const rectangle: Rectangle = {
  height: 20,
  width: 10,
};
console.log(rectangle);

interface ColoredRectangle extends Rectangle {
  color: string;
}
const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "brown",
};
console.log(coloredRectangle);
