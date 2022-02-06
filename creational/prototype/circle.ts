import { Component } from './component';

export class Circle implements Component {
  radius!: number;
  constructor() {}
  public getRadius(): number {
    return this.radius;
  }

  public setRadius(radius: number): void {
    this.radius = radius;
  }

  render(): void {
    console.log('Rendering a circle');
  }
  clone(): Component {
    let newCircle = new Circle();
    newCircle.setRadius(this.radius);
    return newCircle;
  }
}
