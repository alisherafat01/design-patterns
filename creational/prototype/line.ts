import { Component } from "./component";

export class Line implements Component {
  render(): void {
    console.log('Rendering a line');
  }
  clone(): Component {
    let newLine = new Line();
    return newLine;
  }
}