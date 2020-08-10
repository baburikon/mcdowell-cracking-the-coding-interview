/**
 *
 */
export class Queue<T> {

  readonly #arr: T[];

  /**
   *
   */
  constructor(arr?: T[]) {
    this.#arr = arr?.slice() ?? [];
  }

  /**
   *
   */
  isEmpty(): boolean {
    return this.#arr.length === 0;
  }

  /**
   *
   */
  peek(): T | undefined {
    return this.#arr[0];
  }

  /**
   *
   */
  add(value: T) {
    this.#arr.push(value);
  }

  /**
   *
   */
  remove(): T | undefined {
    return this.#arr.shift();
  };

  /**
   *
   */
  isEqual(queue: Queue<T>): boolean {
    const arr1 = this.#arr;
    const arr2 = queue.getBuffer();
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  /**
   *
   */
  getBuffer(): T[] {
    return this.#arr.slice();
  }

}
