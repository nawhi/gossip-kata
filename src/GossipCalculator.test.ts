import { GossipCalculator } from './GossipCalculator';

describe('GossipCalculator', () => {
  it('calculates that 2 drivers meet at the first stop', () => {
    const routes = [[1], [1]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(1);
  });

  it('calculates that 2 drivers never meet if their routes do not interact', () => {
    const routes = [[1], [2]];
    expect(new GossipCalculator(routes).calculateStops()).toBe('never');
  });

  it('calculates for 2 drivers who meet at the second stop', () => {
    const routes = [[1, 2], [3, 2]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(2);
  });

  it('calculates for 2 drivers who meet at the third stop', () => {
    const routes = [[1, 2, 3], [5, 4, 3]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(3);
  });

  it('calculates for 2 drivers who meet after 479 stops', () => {
    const routes = [
      Array(478).fill(1).concat(2),
      Array(479).fill(2)
    ];
    expect(new GossipCalculator(routes).calculateStops()).toBe(479);
  });

  it('returns "never" for drivers who meet after 480 stops', () => {
    const routes = [
      Array(480).fill(1).concat(2),
      Array(481).fill(2)
    ];
    expect(new GossipCalculator(routes).calculateStops()).toBe('never');
  });

  it('repeats a single-stop route when it ends', () => {
    const routes = [[1, 2, 3], [3]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(3);
  });

  it('repeats a multi-stop route when it ends', () => {
    // 121212
    // 432432
    //      ^
    const routes = [[1, 2], [4, 3, 2]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(6);
  });
});
