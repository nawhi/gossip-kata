type Driver = number;

export class GossipTracker {

  private readonly numCombos: number;
  private registered = new Set<string>();

  constructor(numDrivers: number) {
    this.numCombos = choose(numDrivers, 2);
  }

  public registerGossip(i: Driver, j: Driver) {
    const hashedValue: string = tuple(i, j);
    this.registered.add(hashedValue);
  }

  public combinations(): Driver[][] {
    return [...this.registered].map(detuple);
  }

  public allGossipExchanged(): boolean {
    return this.registered.size === this.numCombos;
  }

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
