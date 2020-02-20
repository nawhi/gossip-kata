export class CombinationMap {

  private readonly numCombos: number;
  private registered = new Set<string>();

  constructor(nels: number) {
    this.numCombos = choose(nels, 2);
  }

  public register(i: number, j: number) {
    const hashedValue: string = this.hash(i, j);
    this.registered.add(hashedValue);
  }

  public combinations() {
    return [...this.registered]
      .map(hash => this.unhash(hash));
  }

  public allRegistered() {
    return this.registered.size === this.numCombos;
  }

  private hash(i, j) {
    return [i, j].sort().join('|');
  }

  private unhash(hash: string): number[] {
    return [...hash.split('|')].map(i => parseInt(i, 10));
  }
}

export function generateCombinations(nels: number): number[][] {
  const map = new CombinationMap(nels);
  for (let i = 0; i < nels; i++) {
    for (let j = 0; j < nels; j++) {
      if (i !== j) {
        map.register(i, j);
      }
    }
  }
  return map.combinations();
}

function choose(n, m) {
  return fact(n) / (fact(m) * fact(n - m));
}

function fact(n) {
  let ret = 1;
  for (let i = 2; i <= n; i++) {
    ret *= i;
  }
  return ret;
}
