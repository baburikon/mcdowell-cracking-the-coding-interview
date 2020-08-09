/**
 *
 */
export class SinglyLinkedList {

  head: SinglyLinkedListNode | undefined = undefined;

  /**
   * в начало
   */
  insert(data: number) {
    if (!this.head) {
      this.head = new SinglyLinkedListNode(data);
    } else {
      const oldHead = this.head;
      this.head = new SinglyLinkedListNode(data);
      this.head.next = oldHead;
    }
    // this.size++;
  }

  /**
   *
   */
  isEqual(list: SinglyLinkedList): boolean {
    let curSelfNode = this.head;
    let curListNode = list.head;
    while (curSelfNode || curListNode) {
      if (!curSelfNode || !curListNode) return false;
      if (curSelfNode.data !== curListNode.data) return false;
      curSelfNode = curSelfNode.next;
      curListNode = curListNode.next;
    }
    return true;
  }

  /**
   *
   */
  *[Symbol.iterator]() {
    let curNode = this.head;
    while (curNode) {
      yield curNode;
      curNode = curNode.next;
    }
  }

  /**
   *
   */
  toString() {
    return 'SinglyLinkedList: ' + this.toJSON().join(', ');
  }

  /**
   *
   */
  toJSON() {
    return [...this].map(node => node.data);
  }

}

/**
 *
 */
export class  SinglyLinkedListNode {

  data: number;
  next: SinglyLinkedListNode | undefined = undefined;

  /**
   *
   */
  constructor(data: number) {
    this.data = data;
  }
}
