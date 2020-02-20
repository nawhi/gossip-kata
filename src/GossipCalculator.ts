import { CombinationMap, generateCombinations } from './CombinationMap';
import { makeRoute, Route } from './Route';

type Stop = number;

export class GossipCalculator {
  private readonly routes: Route[];

  constructor(input: number[][]) {
    this.routes = input.map(makeRoute);
  }

  public calculateStops(): number | 'never' {
    if (this.routes.length === 3) {
      const [r0, r1, r2] = this.routes;

      const combinations = generateCombinations(this.routes.length);
      const combinationMap = new CombinationMap(this.routes.length);
      for (let i = 0; i < 480; i++) {
        for (const [c1, c2] of combinations) {
          console.log(`consider ${c1},${c2}`);
          if (this.routes[c1].stopAt(i) === this.routes[c2].stopAt(i)) {
            console.log(`Registering ${c1},${c2}`);
            // combinationMap.register(c, d);
          }
        }
        if (r0.stopAt(i) === r1.stopAt(i)) {
          combinationMap.register(0, 1);
        }
        if (r1.stopAt(i) === r2.stopAt(i)) {
          combinationMap.register(1, 2);
        }
        if (r0.stopAt(i) === r2.stopAt(i)) {
          combinationMap.register(2, 3);
        }

        if (combinationMap.allRegistered()) {
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
