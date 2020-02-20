import { GossipCalculator } from './GossipCalculator';

describe('GossipCalculator', () => {
  describe('2 drivers', () => {
    describe('identical-length routes', () => {
      test('meeting at the first stop', () => {
        const routes = [[1], [1]];
        expect(new GossipCalculator(routes).calculateStops()).toBe(1);
      });

      test('meeting at the second stop', () => {
        const routes = [[1, 2], [3, 2]];
        expect(new GossipCalculator(routes).calculateStops()).toBe(2);
      });

      test('meeting at the third stop', () => {
        const routes = [[1, 2, 3], [5, 4, 3]];
        expect(new GossipCalculator(routes).calculateStops()).toBe(3);
      });

      test('meeting after 479 stops', () => {
        const routes = [
          Array(478).fill(1).concat(2),
          Array(479).fill(2)
        ];
        expect(new GossipCalculator(routes).calculateStops()).toBe(479);
      });

      test('meeting after 480-stop cutoff', () => {
        const routes = [
          Array(480).fill(1).concat(2),
          Array(481).fill(2)
        ];
        expect(new GossipCalculator(routes).calculateStops()).toBe('never');
      });

      test('never meeting', () => {
        const routes = [[1], [2]];
        expect(new GossipCalculator(routes).calculateStops()).toBe('never');
      });
    });

    describe('different-length routes', () => {
      test('single-stop routes repeat themselves', () => {
        const routes = [[1, 2, 3], [3]];
        expect(new GossipCalculator(routes).calculateStops()).toBe(3);
      });

      test('multi-stop routes repeat themselves', () => {
        const routes = [[1, 2], [4, 3, 2]];
        // 121212
        // 432432
        //      ^
        expect(new GossipCalculator(routes).calculateStops()).toBe(6);
      });
    });
  });

  describe('3 drivers', () => {
    test('all meeting at the first stop', () => {
      const routes = [[1], [1], [1]];
      expect(new GossipCalculator(routes).calculateStops()).toBe(1);
    });

    test('all meeting at the second stop', () => {
      const routes = [[1], [1], [2, 1]];
      expect(new GossipCalculator(routes).calculateStops()).toBe(2);
    });

    test('meeting at different stops', () => {
      const routes = [
        [1, 9, 3],
        [1, 2, 9],
        [9, 2, 3]
      ];
      expect(new GossipCalculator(routes).calculateStops()).toBe(3);
    });
  });

  describe('4 drivers', () => {
    test('2 meeting at the first stop and the rest at the second', () => {
      const routes = [
        [1, 9],
        [1, 9],
        [2, 9],
        [3, 9]
      ];
      expect(new GossipCalculator(routes).calculateStops()).toBe(2);

    })
  });

});
