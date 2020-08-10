import {DoublyLinkedList} from '../02_Linked Lists/DoublyLinkedList';

/**
 *
 */
export class AnimalQueue {

  readonly #animals: DoublyLinkedList<Animal>;

  /**
   *
   */
  constructor(arr?: Animal[]) {
    this.#animals = new DoublyLinkedList<Animal>(arr);
  }

  /**
   *
   */
  enqueue(animal: Animal) {
    this.#animals.addAtTail(animal);
  }

  /**
   *
   */
  dequeueAny(): Animal | undefined {
    return this.#animals.deleteAtHead();
  }

  /**
   *
   */
  dequeueDog(): Dog | undefined {
    return this.#animals.findAndDeleteAtHead(animal => animal instanceof Dog);
  }

  /**
   *
   */
  dequeueCat(): Cat | undefined {
    return this.#animals.findAndDeleteAtHead(animal => animal instanceof Cat);
  }

  /**
   *
   */
  isEmpty(): boolean {
    return this.#animals.isEmpty();
  }

  /**
   *
   */
  * [Symbol.iterator]() {
    let curNode = this.#animals.head;
    while (curNode) {
      yield curNode;
      curNode = curNode.next;
    }
  }

  /**
   *
   */
  toString() {
    return 'AnimalQueue: ' + this.toArray().map(name => `"${name}"`).join(', ');
  }

  /**
   *
   */
  toArray() {
    return [...this].map(node => node.data.name);
  }

}

/**
 *
 */
class Animal {

  name: string;

  /**
   *
   */
  constructor({name}: { name: string }) {
    this.name = name;
  }
}

/**
 *
 */
export class Cat extends Animal {
}

/**
 *
 */
export class Dog extends Animal {
}
