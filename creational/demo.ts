import { Circle } from './prototype/circle';
import { ContextMenu } from './prototype/context-menu';
import { Line } from './prototype/line';

function demoPrototype() {
  const contextMenu = new ContextMenu();

  const circle = new Circle();
  circle.setRadius(10);

  const line = new Line();

  contextMenu.duplicate(circle);
  contextMenu.duplicate(line);
}

// demoPrototype();
