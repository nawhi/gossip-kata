import { makeRoute, Route } from './Route';

type Stop = number;

class CombinationMap {
  constructor(private routes: Route[]) {

  }

}

export class GossipCalculator {
  private readonly routes: Route[];

  constructor(input: number[][]) {
    this.routes = input.map(makeRoute);
  }

  public calculateStops(): number | 'never' {
    if (this.routes.length === 3) {
      const [r1, r2, r3] = this.routes;
      const matches = Array(3).fill(false);
      let [r1r3matched, r2r3matched, r1r2matched] = matches;

      for (let i = 0; i < 480; i++) {
        if (r1.stopAt(i) === r2.stopAt(i)) {
          r1r2matched = true;
        }
        if (r2.stopAt(i) === r3.stopAt(i)) {
          r2r3matched = true;
        }
        if (r1.stopAt(i) === r3.stopAt(i)) {
          r1r3matched = true;
        }

        if ([r1r3matched, r2r3matched, r1r2matched].every(m => m)) {
          return i + 1;
        }
      }

    } else if (this.routes.length === 2) {
      const [r1, r2] = this.routes;

      for (let i = 0; i < 480; i++) {
        if (r1.stopAt(i) === r2.stopAt(i)) {
          return i + 1;
        }
      }
    }

    return 'never';
  }
}
