import {SinglyLinkedList, SinglyLinkedListNode} from './SinglyLinkedList';

const list = new SinglyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
// console.log(list.toString());

/**
 * Реализуйте алгоритм для нахождения в односвязном списке k-го элемента с конца.
 */
describe('2.2', () => {

  /**
   *
   */
  it('011', () => {
    expect(getNodeByNumFromEnd(list, 1)?.data).toBe(2);
  });

  /**
   *
   */
  function getNodeByNumFromEnd(list: SinglyLinkedList, numFromEnd: number): SinglyLinkedListNode | null {
    const arrNodes = [...list];
    return arrNodes[arrNodes.length - 1 - numFromEnd];
  }

});
