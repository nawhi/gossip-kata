type Stop = number;
type Route = Stop[];

export class GossipCalculator {
  constructor(private routes: Route[]) {
  }

  public calculateStops(): number | 'never' {
    const [r1, r2] = this.routes;

    for (const i of [0, 1, 2, 3, 4, 5]) {
      if (r1[i % r1.length] === r2[i % r2.length]) {
        return i + 1;
      }
    }
    return 'never';
  }
}
