import { Shape } from "./shape";

export class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  draw(): void {
    console.log(`Drawing Circle: radius=${this.radius}`);
  }
}
