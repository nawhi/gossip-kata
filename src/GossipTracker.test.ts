import { generateDriverCombinations } from './generateDriverCombinations';
import { GossipTracker} from './GossipTracker';

describe('GossipTracker', () => {
  it('has no gossip exchanged initially', () => {
    const map = new GossipTracker(2);
    expect(map.allGossipExchanged()).toBe(false);
  });

  it('registers a 0-indexed number combination as a gossip exchange', () => {
    const map = new GossipTracker(2);
    map.registerGossip(0, 1);
    expect(map.allGossipExchanged()).toBe(true);
  });

  it('knows when all gossip has been exchanged between 3 drivers', () => {
    const map = new GossipTracker(3);
    map.registerGossip(0, 1);
    map.registerGossip(1, 2);
    map.registerGossip(0, 2);
    expect(map.allGossipExchanged()).toBe(true);
  });

  it('ignores duplicates', () => {
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
