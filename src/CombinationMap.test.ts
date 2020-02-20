import { GossipTracker, generateDriverCombinations } from './GossipTracker';

describe('CombinationMap', () => {
  it('knows if not all combinations have been registered', () => {
    const map = new GossipTracker(2);
    expect(map.allGossipExchanged()).toBe(false);
  });

  it('registers a combination with indices (0-indexed)', () => {
    const map = new GossipTracker(2);
    map.registerGossip(0, 1);
    expect(map.allGossipExchanged()).toBe(true);
  });

  it('works for 3', () => {
    const map = new GossipTracker(3);
    map.registerGossip(0, 1);
    map.registerGossip(1, 2);
    map.registerGossip(0, 2);
    expect(map.allGossipExchanged()).toBe(true);
  });

  it('ignores duplicate registrations', () => {
    const map = new GossipTracker(3);
    map.registerGossip(0, 1);
    map.registerGossip(1, 0);
    map.registerGossip(1, 2);
    expect(map.allGossipExchanged()).toBe(false);
  });

  it('returns registered combinations', () => {
    const map = new GossipTracker(9);
    map.registerGossip(0, 1);
    expect(map.combinations()).toEqual([[0, 1]]);
  });
});

describe('generateCombinations', () => {
  it('generates all combinations of 2 numbers from 3', () => {
    expect(generateDriverCombinations(3)).toEqual([
      [0, 1], [0, 2], [1, 2]
    ]);
  });

  it('generates all combinations of 2 numbers from 4', () => {
    expect(generateDriverCombinations(4)).toEqual([
      [0, 1], [0, 2], [0, 3],
      [1, 2], [1, 3], [2, 3]
    ]);
  })
});
