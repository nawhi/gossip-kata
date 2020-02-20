export class Route {
  constructor(private array: number[]) {
  }

  public stopAt(i) {
    return this.array[i % this.array.length];
  }
}

export function makeRoute(arr: number[]): Route {
  return new Route(arr);
}
