import { CombinationMap, generateCombinations } from './CombinationMap';
import { makeRoute, Route } from './Route';

type Stop = number;

export class GossipCalculator {
  private readonly routes: Route[];

  constructor(input: number[][]) {
    this.routes = input.map(makeRoute);
  }

  public calculateStops(): number | 'never' {
    const combinationMap = new CombinationMap(this.routes.length);
    const combinations = generateCombinations(this.routes.length);
    console.log(combinations);
    for (let i = 0; i < 480; i++) {

      for (const [driver1, driver2] of combinations) {
        const route1 = this.routes[driver1];
        const route2 = this.routes[driver2];

        if (route1.stopAt(i) === route2.stopAt(i)) {
          // this pair of drivers can exchange gossip
          combinationMap.register(driver1, driver2);
        }
      }
      if (combinationMap.allRegistered()) {
        return i + 1;
      }
    }

    return 'never';
  }
}
