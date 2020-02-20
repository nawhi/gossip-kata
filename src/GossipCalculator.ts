type Stop = number;
type Route = Stop[];

export class GossipCalculator {
    constructor(private routes: Route[]) {

    }

    public calculateStops(): number | 'never' {
        const [r1, r2] = this.routes;

        if (r1[0] === r2[0]) {
            return 1;
        }
        if (Number(r1[1]) === Number(r2[1])) {
            return 2;
        }
        return 'never';
    }
}
