export class CombinationMap {
  private readonly numCombos: number;
  private registered = new Set<string>();

  constructor(nels: number) {
    this.numCombos = choose(nels, 2);
  }

  public register(n1: number, n2: number) {
    const hashedValue: string =
      [n1, n2].sort().join('');
    this.registered.add(hashedValue);
  }

  public allRegistered() {
    return this.registered.size === this.numCombos;
  }
}

function choose(n, m) {
  return fact(n) / (fact(m) * fact(n - m));
}

function fact(n)
{
  let ret = 1;
  for (let i = 2; i <= n; i++) {
    ret *= i;
  }
  return ret;
}
