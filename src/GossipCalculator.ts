import { circular } from './CircularArray';

type Stop = number;
type Route = Stop[];

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
