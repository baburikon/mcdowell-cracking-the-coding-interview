import {DoublyLinkedList} from './DoublyLinkedList';

/**
 *
 */
describe('DoublyLinkedList', () => {

  let list1: DoublyLinkedList<number>;
  let list2: DoublyLinkedList<number>;
  let list3: DoublyLinkedList<number>;
  let emptyList1: DoublyLinkedList<number>;
  let emptyList2: DoublyLinkedList<number>;

  beforeEach(() => {
    list1 = new DoublyLinkedList<number>([1, 2, 3]); // console.log(list1.toArray());
    list2 = new DoublyLinkedList<number>([1, 2, 3]);
    list3 = new DoublyLinkedList<number>([1, 2, 3, 4]);
    emptyList1 = new DoublyLinkedList<number>();
    emptyList2 = new DoublyLinkedList<number>();
  });

  it('011', () => {
    expect(list1.head?.data).toBe(1);
  });
  it('012', () => {
    expect(list1.tail?.data).toBe(3);
  });

  it('021', () => {
    expect(list1.isEqual(list2)).toBe(true);
  });
  it('022', () => {
    expect(list2.isEqual(list1)).toBe(true);
  });
  it('023', () => {
    expect(emptyList1.isEqual(emptyList1)).toBe(true);
  });
  it('024', () => {
    expect(list1.isEqual(emptyList1)).toBe(false);
  });
  it('025', () => {
    expect(list1.isEqual(list3)).toBe(false);
  });
  it('026', () => {
    expect(list3.isEqual(list1)).toBe(false);
  });
  it('027', () => {
    expect(list1.isEqual(list1)).toBe(true);
  });

  it('031', () => {
    list1.addAtHead(42);
    expect(list1.toArray()).toEqual([42, 1, 2, 3]);
  });
  it('032', () => {
    list1.addAtTail(42);
    expect(list1.toArray()).toEqual([1, 2, 3, 42]);
  });

  it('041', () => {
    expect(list1.deleteAtHead()).toBe(1);
  });
  it('042', () => {
    list1.deleteAtHead();
    expect(list1.toArray()).toEqual([2, 3]);
  });

  it('051', () => {
    expect(list1.deleteAtTail()).toBe(3);
  });
  it('052', () => {
    list1.deleteAtTail();
    expect(list1.toArray()).toEqual([1, 2]);
  });

});


