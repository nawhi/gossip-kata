import { generateDriverCombinations, GossipTracker } from './GossipTracker';
import { Route } from './Route';

const MAX_STOPS = 480;

export function calculateStops(routes: number[][]) {
  return new GossipCalculator(routes).calculateStops();
}

class GossipCalculator {
  private readonly routes: Route[];

  constructor(input: number[][]) {
    this.routes = input.map(stops => new Route(stops));
  }

  public calculateStops(): number | 'never' {
    const tracker = new GossipTracker(this.routes.length);
    const driverCombinations = generateDriverCombinations(this.routes.length);
    for (let stopIx = 0; stopIx < MAX_STOPS; stopIx++) {
      for (const [driver1, driver2] of driverCombinations) {
        const route1 = this.routes[driver1];
        const route2 = this.routes[driver2];

        if (route1.stopAt(stopIx) === route2.stopAt(stopIx)) {
          tracker.exchangeGossip(driver1, driver2);
        }
      }
      if (tracker.allGossipExchanged()) {
        return stopIx + 1;
      }
    }

    return 'never';
  }
}
