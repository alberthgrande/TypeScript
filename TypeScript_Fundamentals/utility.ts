// Partial
// Partial changes all the properties in an object to be optional.
{
  interface Point {
    x: number;
    y: number;
  }

  let pointPart: Partial<Point> = { y: 100 };
  pointPart.x = 10;
  console.log(pointPart);
}

// Required
// Required changes all the properties in an object to be required.
{
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }

  let myCar: Required<Car> = {
    make: "Ford",
    model: "Focus",
    mileage: 2000,
  };

  console.log(myCar);
}

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
{
  const nameAgeMap: Record<string, number> = {
    Alberth: 26,
  };

  console.log(nameAgeMap);
}

// Omit
// Omit removes keys from an object type.
{
  interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const alberth: Omit<Person, "age" | "location"> = {
    name: "Omit Alberth",
  };

  console.log(alberth);
}

// Pick
// Pick removes all but the specified keys from an object type.
{
  interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const alberth: Pick<Person, "name"> = {
    name: "Pick Alberth",
  };

  console.log(alberth);
}

// Exclude
// Exclude removes types from a union.
{
  type Primitive = string | number | boolean;

  const value: Exclude<Primitive, string> = true;
  console.log(typeof value);
}

// ReturnType
// ReturnType extracts the return type of a function type.
{
  type PointGenerator = () => { x: number; y: number };

  const pointGenerator: ReturnType<PointGenerator> = {
    x: 10,
    y: 20,
  };

  const { x, y } = pointGenerator;
  console.log(pointGenerator, " = ", x + y);
}

// Parameters
// Parameters extracts the parameter types of a function type as an array.
{
  type PointPrinter = (p: { x: number; y: number }) => void;
  const pointPrinter: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20,
  };

  const { x, y } = pointPrinter;
  console.log(pointPrinter, " = ", x + y);
}

// Readonly
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
{
  interface Person {
    name: string;
    age: number;
  }

  const person: Readonly<Person> = {
    name: "Alberth",
    age: 26,
  };

  console.log(person);
}
