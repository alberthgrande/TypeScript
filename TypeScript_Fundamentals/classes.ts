// Members: Types
{
  class Person {
    // name: string = "";
    name: string;

    constructor(name: string = "") {
      this.name = name;
    }
  }

  const person = new Person();
  person.name = "Alberth";
  console.log(person);
}

// Members: Visibility
{
  class Person {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Alberth");
  console.log(person.getName());
}

// Parameter Properties
{
  class Person {
    public constructor(private name: string) {}

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Alberth");
  console.log(person.getName());
}

// Readonly
{
  class Person {
    private readonly name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Readonly");
  console.log(person.getName());
}

// Inheritance: Implements & Inheritance: Extends & Override
{
  interface Shape {
    getArea: () => number;
  }

  class Rectangle implements Shape {
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {}

    public getArea(): number {
      return this.width * this.height;
    }

    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }

  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }

    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }

  const rectangle = new Rectangle(10, 20);
  console.log(rectangle.getArea());
  const square = new Square(20);
  console.log(square.getArea());
  console.log(square.toString());
}

// Abstract Classes
{
  console.log("\nAbstract Classes");
  abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }

  class Rectangle extends Polygon {
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {
      super();
    }

    public getArea(): number {
      return this.width * this.height;
    }
  }

  const rectangle = new Rectangle(10, 20);
  console.log(rectangle.getArea());
  console.log(rectangle.toString());
}
