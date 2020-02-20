import { GossipTracker } from './GossipTracker';

export function generateDriverCombinations(nels: number): number[][] {
  const tracker = new GossipTracker(nels);
  for (let i = 0; i < nels; i++) {
    for (let j = 0; j < nels; j++) {
      if (i !== j) {
        tracker.registerGossip(i, j);
      }
    }
  }
  return tracker.combinations();
}
