import { circular } from './CircularArray';

type Stop = number;
export type Route = Stop[];

export class GossipCalculator {
  constructor(private routes: Route[]) {
  }

  public calculateStops(): number | 'never' {
    const routes = this.routes.map(circular);

    if (routes.length === 3) {
      const [r1, r2, r3] = routes;
      const matches = Array(3).fill(false);
      let [r1r3matched, r2r3matched, r1r2matched] = matches;

      for (let i = 0; i < 480; i++) {
        if (r1.get(i) === r2.get(i)) {
          r1r2matched = true;
        }
        if (r2.get(i) === r3.get(i)) {
          r2r3matched = true;
        }
        if (r1.get(i) === r3.get(i)) {
          r1r3matched = true;
        }

        if ([r1r3matched, r2r3matched, r1r2matched].every(m => !!m)) {
          return i + 1;
        }
      }

    } else if (routes.length === 2) {
      const [r1, r2] = routes;

      for (let i = 0; i < 480; i++) {
        if (r1.get(i) === r2.get(i)) {
          return i + 1;
        }
      }
    }

    return 'never';
  }
}
