import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Circle } from "./circle";
import { Shape } from "./shape";

const shapes: Shape[] = [new Rectangle(10, 20), new Square(15), new Circle(7)];

shapes.forEach((shape) => {
  shape.draw();
  console.log(shape.toString());
});
