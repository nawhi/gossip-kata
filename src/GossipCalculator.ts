type Stop = number;
type Route = Stop[];

export class GossipCalculator {
    constructor(private routes: Route[]) {

    }

    public calculateStops(): number | 'never' {
        if (this.routes[0][0] === this.routes[1][0]) {
            return 1;
        }
        return 'never';
    }
}
