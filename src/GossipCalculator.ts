type Stop = number;
type Route = Stop[];

export class GossipCalculator {
  constructor(private routes: Route[]) {
  }

  public calculateStops(): number | 'never' {
    const [r1, r2] = this.routes;

    for (let i = 0; i < 301; i++) {
      if (r1[i % r1.length] === r2[i % r2.length]) {
        return i + 1;
      }
    }

    return 'never';
  }
}
