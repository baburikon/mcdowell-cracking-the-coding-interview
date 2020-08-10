import {Stack} from './Stack';

/**
 *
 */
describe('Stack', () => {

  let stack: Stack<number>;
  let emptyStack: Stack<number>;

  beforeEach(() => {
    stack = new Stack([1, 2, 3]);
    emptyStack = new Stack();
  });

  it('011', () => {
    expect(stack.peek()).toBe(3);
  });

  it('012', () => {
    stack.push(4);
    expect(stack.peek()).toBe(4);
  });

  it('013', () => {
    stack.pop();
    expect(stack.peek()).toBe(2);
  });

  it('014', () => {
    expect(emptyStack.peek()).toBe(undefined);
  });

  it('015', () => {
    expect(emptyStack.pop()).toBe(undefined);
  });

  it('016', () => {
    expect(emptyStack.peek()).toBe(undefined);
  });

  it('017', () => {
    expect(stack.isEmpty()).toBe(false);
  });

  it('018', () => {
    expect(emptyStack.isEmpty()).toBe(true);
  });

});
