class CircularArray<T> {
  constructor(private array: T[]) {
  }

  public get(i) {
    return this.array[i % this.array.length];
  }
}

export function circular<T>(arr: T[]): CircularArray<T> {
  return new CircularArray<T>(arr);
}
