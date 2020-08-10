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
    const newNode = new DoublyLinkedListNode<T>(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head as DoublyLinkedListNode<T>;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
    }
  }

  /**
   *
   */
  addAtTail(data: T) {
    const newNode = new DoublyLinkedListNode<T>(data);
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      const oldTail = this.tail as DoublyLinkedListNode<T>;
      this.tail = newNode;
      newNode.prev = oldTail;
      oldTail.next = newNode;
    }
  }

  /**
   *
   */
  deleteAtHead(): T | undefined {
    if (this.isEmpty()) return undefined;
    const oldHead = this.head as DoublyLinkedListNode<T>;
    const data = oldHead.data;
    if (this.isSingle()) {
      this.clear();
    } else {
      this.head = oldHead.next as DoublyLinkedListNode<T>;
      this.head.prev = undefined;
    }
    return data;
  }

  /**
   *
   */
  deleteAtTail(): T | undefined {
    if (this.isEmpty()) return undefined;
    const oldTail = this.tail as DoublyLinkedListNode<T>;
    const data = oldTail.data;
    if (this.isSingle()) {
      this.clear();
    } else {
      this.tail = oldTail.prev as DoublyLinkedListNode<T>;
      this.tail.next = undefined;
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
  clear(): void {
    this.head = undefined;
    this.tail = undefined;
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
