import { generateDriverCombinations } from './generateDriverCombinations';

describe('generateDriverCombinations', () => {
  it('generates combinations of 2 drivers from 3', () => {
    expect(generateDriverCombinations(3)).toEqual([
      [0, 1], [0, 2], [1, 2]
    ]);
  });

  it('generates combinations of 2 drivers from 4', () => {
    expect(generateDriverCombinations(4)).toEqual([
      [0, 1], [0, 2], [0, 3],
      [1, 2], [1, 3], [2, 3]
    ]);
  })
});
