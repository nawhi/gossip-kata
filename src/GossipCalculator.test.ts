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

  it('calculates for 2 drivers who meet after 300 stops', () => {
    const routes = [
      Array(299).fill(1).concat(2),
      Array(300).fill(2)
    ];
    expect(new GossipCalculator(routes).calculateStops()).toBe(300);
  });

  it('repeats single-stop route when it ends', () => {
    const routes = [[1, 2, 3], [3]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(3);
  });

  it('repeats multi-stop route when it ends', () => {
    // 121212
    // 432432
    //      ^
    const routes = [[1, 2], [4, 3, 2]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(6);
  });

  xit('does not match drivers after the 480-stop maximum', () => {
    const routes = [
      Array(499).fill(1).concat(2),
      Array(500).fill(2)
    ];
    expect(new GossipCalculator(routes).calculateStops()).toBe('never');
  });

});
