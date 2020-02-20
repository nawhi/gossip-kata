import { generateDriverCombinations, GossipTracker } from './GossipTracker';
import { Route } from './Route';

const MAX_MINUTES = 480;

export function gossipCalculator(input: number[][]) {
  const routes = getRoutesFrom(input);
  const numDrivers = routes.length;
  const tracker = new GossipTracker(numDrivers);

  for (let minute = 0; minute < MAX_MINUTES; minute++) {
    for (const [driver1, driver2] of generateDriverCombinations(numDrivers)) {
      if (routes[driver1].stopAt(minute) === routes[driver2].stopAt(minute)) {
        tracker.registerGossip(driver1, driver2);
      }
    }
    if (tracker.allGossipExchanged()) {
      return minute + 1;
    }
  }

  return 'never';
}

function getRoutesFrom(rawRoutes: number[][]): Route[] {
  return rawRoutes.map(stops => new Route(stops));
}
