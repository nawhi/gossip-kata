type Stop = number;
type Route = Stop[];

class CircularArray<T> {
  constructor(private array: T[]) {
  }

  public get(i) {
    return this.array[i % this.array.length];
  }
}

function circular<T>(arr: T[]): CircularArray<T> {
  return new CircularArray<T>(arr);
}

export class GossipCalculator {
  constructor(private routes: Route[]) {
  }

  public calculateStops(): number | 'never' {
    const [r1, r2] = this.routes.map(circular);

    for (let i = 0; i < 480; i++) {
      if (r1.get(i) === r2.get(i)) {
        return i + 1;
      }
    }

    return 'never';
  }
}
