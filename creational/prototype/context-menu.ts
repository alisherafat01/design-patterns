import { Component } from './component';
export  class ContextMenu {
  duplicate(component: Component): void {
    // now each component has clone method so we can create new components like circle or line here easily
    // without knowing the complexity of clone method
    let newComponent: Component = component.clone();
    newComponent.render();
    // Add newComponent to our document
  }
}
