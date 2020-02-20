export class GossipTracker {

  private readonly numCombos: number;
  private registered = new Set<string>();

  constructor(nels: number) {
    this.numCombos = choose(nels, 2);
  }

  public registerGossip(i: number, j: number) {
    const hashedValue: string = this.hash(i, j);
    this.registered.add(hashedValue);
  }

  public combinations() {
    return [...this.registered]
      .map(hash => this.unhash(hash));
  }

  public allGossipExchanged(): boolean {
    return this.registered.size === this.numCombos;
  }

  private hash(i, j) {
    return [i, j].sort().join('|');
  }

  private unhash(hash: string): number[] {
    return [...hash.split('|')].map(i => parseInt(i, 10));
  }
}

export function generateDriverCombinations(nels: number): number[][] {
  const map = new GossipTracker(nels);
  for (let i = 0; i < nels; i++) {
    for (let j = 0; j < nels; j++) {
      if (i !== j) {
        map.registerGossip(i, j);
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
