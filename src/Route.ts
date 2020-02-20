export type Stop = number;

export class Route {
  constructor(private array: Stop[]) {
  }

  public stopAt(i) {
    return this.array[i % this.array.length];
  }
}
