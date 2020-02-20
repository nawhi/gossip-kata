type Stop = number;
type Route = Stop[];

export class GossipCalculator {
  constructor(private routes: Route[]) {
  }

  public calculateStops(): number | 'never' {
    const [r1, r2] = this.routes;

    for (const i of [0, 1, 2]) {
      if (Number(r1[i]) === Number(r2[i])) {
        return i + 1;
      }
    }
    return 'never';
  }
}
