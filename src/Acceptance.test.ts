import {GossipCalculator} from './GossipCalculator';

describe('Gossip Calculator Acceptance', () => {
    it('calculates number of stops for drivers to know all the gossips', () => {
        const routes = [
            [3, 1, 2, 3],
            [3, 2, 3, 1],
            [4, 2, 3, 4, 5]
        ];
        expect(new GossipCalculator(routes).calculateStops()).toBe(5);
    });

    it('returns null if not all drivers know all gossips after 480 minutes', () => {
        const routes = [
            [2, 1, 2],
            [5, 2, 8],
        ];
        expect(new GossipCalculator(routes).calculateStops()).toBe('never');
    });
});
