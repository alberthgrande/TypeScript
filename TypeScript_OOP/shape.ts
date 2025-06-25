import { Drawable } from "./drawable";

export abstract class Shape implements Drawable {
  abstract getArea(): number;

  toString(): string {
    return `${this.constructor.name} (area = ${this.getArea()})`;
  }

  abstract draw(): void;
}
