import {SinglyLinkedList} from './SinglyLinkedList';

const list1 = new SinglyLinkedList();
list1.insert(3);
list1.insert(2);
list1.insert(2);
list1.insert(5);

const list2 = new SinglyLinkedList();
list2.insert(3);
list2.insert(2);
list2.insert(2);
list2.insert(5);

const list3 = new SinglyLinkedList();
const list4 = new SinglyLinkedList();

const list5 = new SinglyLinkedList();
list5.insert(3);
list5.insert(2);

const list6 = new SinglyLinkedList();
list6.insert(3);
list6.insert(2);
list6.insert(2);
list6.insert(5);
list6.insert(6);

/**
 *
 */
describe('SinglyLinkedList', () => {

  it('011', () => {
    expect(list1.head?.data).toBe(5);
  });

});

/**
 *
 */
describe('SinglyLinkedList :: isEqual', () => {

  it('021', () => {
    expect(list1.isEqual(list2)).toBe(true);
  });
  it('022', () => {
    expect(list2.isEqual(list1)).toBe(true);
  });
  it('023', () => {
    expect(list3.isEqual(list4)).toBe(true);
  });
  it('024', () => {
    expect(list1.isEqual(list5)).toBe(false);
  });
  it('025', () => {
    expect(list1.isEqual(list6)).toBe(false);
  });
  it('026', () => {
    expect(list1.isEqual(list3)).toBe(false);
  });
  it('027', () => {
    expect(list1.isEqual(list1)).toBe(true);
  });

});


