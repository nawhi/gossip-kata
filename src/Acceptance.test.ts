import { GossipCalculator } from './GossipCalculator';

describe('Gossip Calculator Acceptance', () => {
  it('calculates number of stops for drivers to know all the gossips', () => {
    // *3*  1    2   3  *1*  2   3   1   2    3   1  *2*
    // *3* *2*  *3*  1   3   2   3   1   3    2   3   1
    //  4  *2*  *3*  4   5   4   2   3   4    5   4  *2*
    //  5   4   *3*  2  *1*  5   4   3   2    1   5   4
    //  ^   ^    ^       ^                            ^
    // 01  12  12,13    03                           02
    const routes = [
      [3, 1, 2],
      [3, 2, 3, 1],
      [4, 2, 3, 4, 5],
      [5, 4, 3, 2, 1]
    ];
    expect(new GossipCalculator(routes).calculateStops()).toBe(12);
  });

  it('returns "never" if not all drivers know all gossips after 480 minutes', () => {
    const routes = [
      [2, 1, 2],
      [5, 2, 8]
    ];
    expect(new GossipCalculator(routes).calculateStops()).toBe('never');
  });
});
