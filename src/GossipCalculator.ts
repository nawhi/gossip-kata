type Stop = number;
type Route = Stop[];

export class GossipCalculator {
    constructor(private routes: Route[]) {

    }

    public calculateStops(): number | 'never' {
        throw new Error('not implemented');
    }
}
