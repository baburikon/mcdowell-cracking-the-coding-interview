/**
 *
 */
export class DoublyLinkedList<T> {

  head: DoublyLinkedListNode<T> | undefined = undefined;
  tail: DoublyLinkedListNode<T> | undefined = undefined;

  /**
   *
   */
  constructor(arr?: T[]) {
    if (!arr) return;
    for (const data of arr) {
      this.addAtTail(data);
    }
  }

  /**
   *
   */
  addAtHead(data: T) {
    if (!this.head) {
      this.head = new DoublyLinkedListNode<T>(data);
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = new DoublyLinkedListNode<T>(data);
      this.head.next = oldHead;
    }
  }

  /**
   *
   */
  addAtTail(data: T) {
    if (!this.tail) {
      this.tail = new DoublyLinkedListNode<T>(data);
      this.head = this.tail;
    } else {
      const oldTail = this.tail;
      this.tail = new DoublyLinkedListNode<T>(data);
      this.tail.prev = oldTail;
      oldTail.next = this.tail;
    }
  }

  /**
   *
   */
  deleteAtHead(): T | undefined {
    if (!this.head) return undefined;
    const data = this.head.data;
    if (this.isSingle()) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    return data;
  }

  /**
   *
   */
  deleteAtTail(): T | undefined {
    if (!this.tail) return undefined;
    const data = this.tail.data;
    if (this.isSingle()) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.tail = this.tail.prev;
    }
    return data;
  }

  /**
   *
   */
  findAndDeleteAtHead(funcCmp: (data: T) => boolean): T | undefined {
    let curNode: DoublyLinkedListNode<T> | undefined = this.head;
    while (curNode) {
      if (funcCmp(curNode.data)) {
        return this.deleteNode(curNode);
      }
      curNode = curNode.next;
    }
    return undefined;
  }

  /**
   *
   */
  private deleteNode(node: DoublyLinkedListNode<T>): T {
    const data: T = node.data;
    if (this.isSingle()) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      if (node.prev) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
    }
    return data;
  }

  /**
   *
   */
  isEmpty(): boolean {
    return this.head === undefined;
  }

  /**
   *
   */
  isSingle(): boolean {
    return this.head === this.tail;
  }

  /**
   *
   */
  isEqual(list: DoublyLinkedList<T>): boolean {
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
  * [Symbol.iterator]() {
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
    return 'DoublyLinkedList: ' + this.toArray().join(', ');
  }

  /**
   *
   */
  toArray() {
    return [...this].map(node => node.data);
  }

}

/**
 *
 */
class DoublyLinkedListNode<T> {

  data: T;
  prev: DoublyLinkedListNode<T> | undefined = undefined;
  next: DoublyLinkedListNode<T> | undefined = undefined;

  /**
   *
   */
  constructor(data: T) {
    this.data = data;
  }
}
