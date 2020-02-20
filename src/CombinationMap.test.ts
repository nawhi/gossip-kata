import { CombinationMap, generateCombinations } from './CombinationMap';

describe('CombinationMap', () => {
  it('knows if not all combinations have been registered', () => {
    const map = new CombinationMap(2);
    expect(map.allRegistered()).toBe(false);
  });

  it('registers a combination with indices (0-indexed)', () => {
    const map = new CombinationMap(2);
    map.register(0, 1);
    expect(map.allRegistered()).toBe(true);
  });

  it('works for 3', () => {
    const map = new CombinationMap(3);
    map.register(0, 1);
    map.register(1, 2);
    map.register(0, 2);
    expect(map.allRegistered()).toBe(true);
  });

  it('ignores duplicate registrations', () => {
    const map = new CombinationMap(3);
    map.register(0, 1);
    map.register(1, 0);
    map.register(1, 2);
    expect(map.allRegistered()).toBe(false);
  });

  it('returns registered combinations', () => {
    const map = new CombinationMap(9);
    map.register(0, 1);
    expect(map.combinations()).toEqual([[0, 1]]);
  });
});

describe('generateCombinations', () => {
  it('generates all combinations of 2 numbers from 3', () => {
    expect(generateCombinations(3)).toEqual([
      [0, 1], [0, 2], [1, 2]
    ]);
  });

  it('generates all combinations of 2 numbers from 4', () => {
    expect(generateCombinations(4)).toEqual([
      [0, 1], [0, 2], [0, 3],
      [1, 2], [1, 3], [2, 3]
    ]);
  })
});
