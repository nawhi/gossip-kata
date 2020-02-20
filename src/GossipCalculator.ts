import { generateDriverCombinations, GossipTracker } from './GossipTracker';
import { Route } from './Route';

const MAX_STOPS = 480;

function getRoutesFrom(rawRoutes: number[][]) {
  return rawRoutes.map(stops => new Route(stops));
}

export function gossipCalculator(input: number[][]) {
  const routes = getRoutesFrom(input);
  const numDrivers = routes.length;
  const tracker = new GossipTracker(numDrivers);
  for (let stopIx = 0; stopIx < MAX_STOPS; stopIx++) {
    for (const [driver1, driver2] of generateDriverCombinations(numDrivers)) {
      const route1 = routes[driver1];
      const route2 = routes[driver2];

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
