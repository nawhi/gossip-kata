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
  
  it('calculates that 2 drivers with different routes meet at the second stop', () => {
    const routes = [[1, 2], [3, 2]];
    expect(new GossipCalculator(routes).calculateStops()).toBe(2);
  })
});
