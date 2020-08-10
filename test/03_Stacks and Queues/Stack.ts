/**
 *
 */
export class Stack<T> {

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
    return this.#arr[this.#arr.length - 1];
  }

  /**
   *
   */
  push(value: T) {
    this.#arr.push(value);
  }

  /**
   *
   */
  pop(): T | undefined {
    return this.#arr.pop();
  };

}
