export type Stop = number;

export class Route {
  constructor(private array: Stop[]) {
  }

  public stopAt(i): Stop {
    return this.array[i % this.array.length];
  }
}
