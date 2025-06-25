import { Shape } from "./shape";

export class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  draw(): void {
    console.log(
      `Drawing Rectangle: width=${this.width}, height=${this.height}`
    );
  }
}
