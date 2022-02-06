export interface Component {
  render(): void;
  clone(): Component;
}
