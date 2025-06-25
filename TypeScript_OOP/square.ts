import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
  constructor(private size: number) {
    super(size, size);
  }

  draw(): void {
    console.log(`Drawing Square: size=${this.size}`);
  }
}
