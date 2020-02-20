export class GossipCalculator {
    constructor(private routes: number[][]) {

    }

    public calculateStops(): number | 'never' {
        throw new Error('not implemented');
    }
}
