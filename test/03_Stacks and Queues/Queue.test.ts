import {Queue} from './Queue';

/**
 *
 */
describe('Queue', () => {

  let queue: Queue<number>;
  let emptyQueue: Queue<number>;

  beforeEach(() => {
    queue = new Queue([1, 2, 3]);
    emptyQueue = new Queue();
  });

  it('011', () => {
    expect(queue.peek()).toBe(1);
  });

  it('012', () => {
    queue.add(4);
    const res = new Queue([1, 2, 3, 4]);
    expect(queue.isEqual(res)).toBe(true);
  });

  it('013', () => {
    queue.remove();
    const res = new Queue([2, 3]);
    expect(queue.isEqual(res)).toBe(true);
  });

  it('014', () => {
    expect(emptyQueue.peek()).toBe(undefined);
  });

  it('015', () => {
    expect(emptyQueue.remove()).toBe(undefined);
  });

  it('016', () => {
    expect(emptyQueue.peek()).toBe(undefined);
  });

  it('017', () => {
    expect(queue.isEmpty()).toBe(false);
  });

  it('018', () => {
    expect(emptyQueue.isEmpty()).toBe(true);
  });

});
