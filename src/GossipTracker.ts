export class GossipTracker {

  private readonly numCombos: number;
  private registered = new Set<string>();

  constructor(nels: number) {
    this.numCombos = choose(nels, 2);
  }

  public registerGossip(i: number, j: number) {
    const hashedValue: string = tuple(i, j);
    this.registered.add(hashedValue);
  }

  public combinations(): number[][] {
    return [...this.registered].map(detuple);
  }

  public allGossipExchanged(): boolean {
    return this.registered.size === this.numCombos;
  }

}

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

function tuple(i, j): string {
  return [i, j].sort().join('|');
}

function detuple(aTuple: string): number[] {
  return [...aTuple.split('|')].map(i => parseInt(i, 10));
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
