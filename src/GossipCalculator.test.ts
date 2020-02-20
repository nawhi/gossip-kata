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
  })
  
  it('repeats routes when they end', () => {
    const routes = [[1, 2, 3], [3]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(3);
  });
  
  it.todo('better for repeating route - [1, 2] + [4, 3, 2]')
});
