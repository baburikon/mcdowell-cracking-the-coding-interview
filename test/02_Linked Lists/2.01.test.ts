import {SinglyLinkedList} from './SinglyLinkedList';

const list = new SinglyLinkedList();
list.insert(3);
list.insert(2);
list.insert(2);
list.insert(2);
list.insert(5);
// console.log(list.toString());

const listWithoutDuplicates = new SinglyLinkedList();
listWithoutDuplicates.insert(3);
listWithoutDuplicates.insert(2);
listWithoutDuplicates.insert(5);
// console.log(listWithoutDuplicates.toString());

/**
 * Напишите код для удаления дубликатов из несортированного связного списка.
 * Как вы будете решать задачу, если использовать временный буфер запрещено?
 */
describe('2.1', () => {

  /**
   *
   */
  it('021', () => {
    expect(deleteDuplicatesWithoutBuffer(list).isEqual(listWithoutDuplicates)).toBe(true);
  });

  /**
   *
   */
  function deleteDuplicatesWithoutBuffer(list: SinglyLinkedList): SinglyLinkedList {
    let prevNode = list.head;
    if (!prevNode) return list;
    let curNode = list.head?.next;
    while (curNode) {
      if (!curNode) return list;
      const prevData = prevNode?.data;
      const curData = curNode.data;
      if (prevNode && curData === prevData) {
        curNode = curNode.next;
        prevNode.next = curNode?.next;
      }
      prevNode = curNode;
      curNode = curNode?.next;
    }
    // console.log(list.toString());
    return list;
  }

});
