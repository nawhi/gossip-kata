import { GossipTracker, generateCombinations } from './GossipTracker';
import { makeRoute, Route } from './Route';
const MAX_STOPS = 480;

export class GossipCalculator {
  private readonly routes: Route[];

  constructor(input: number[][]) {
    this.routes = input.map(makeRoute);
  }

  public calculateStops(): number | 'never' {
    const tracker = new GossipTracker(this.routes.length);
    const driverCombinations = generateCombinations(this.routes.length);
    for (let i = 0; i < MAX_STOPS; i++) {

      for (const [driver1, driver2] of driverCombinations) {
        const route1 = this.routes[driver1];
        const route2 = this.routes[driver2];

        if (route1.stopAt(i) === route2.stopAt(i)) {
          // exchange gossip
          tracker.register(driver1, driver2);
        }
      }
      if (tracker.allRegistered()) {
        return i + 1;
      }
    }

    return 'never';
  }
}
