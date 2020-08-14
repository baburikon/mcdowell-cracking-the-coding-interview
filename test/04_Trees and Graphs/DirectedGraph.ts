/**
 *
 */
export class DirectedGraph<K, W=boolean> {

  readonly nodes: Map<K, Node<K, W>>;

  /**
   *
   */
  constructor(nodes?: Map<K, Node<K, W>>) {
    this.nodes = nodes ?? new Map<K, Node<K, W>>();
  }

  /**
   *
   */
  addNode(node: Node<K, W>) {
    this.nodes.set(node.id, node);
  }

  /**
   * Breadth-First Search (Level-Order Traversal for trees)
   */
  traverseBFS(node: Node<K, W>, funcVisitor: (node: Node<K, W>)=>boolean|void): void {
    const queue: Node<K, W>[] = []; // !!!
    const visited = new Set();
    queue.push(node);
    while (queue.length) {
      const curNode = queue.shift() as Node<K, W>;
      if (visited.has(curNode)) continue;
      visited.add(curNode);
      const breakTraverse = funcVisitor(curNode);
      if (breakTraverse) return;
      for (const [childId] of curNode.children) {
        queue.push(this.nodes.get(childId) as Node<K, W>);
      }
    }
  }

  /**
   * Depth-First Search (Pre-order Traversal for trees)
   */
  traverseDFS(node: Node<K, W>, funcVisitor: (node: Node<K, W>)=>boolean|void): void {
    const stack: Node<K, W>[] = []; // !!!
    const visited = new Set();
    stack.push(node);
    while (stack.length) {
      const curNode = stack.pop() as Node<K, W>;
      if (visited.has(curNode)) continue;
      visited.add(curNode);
      const breakTraverse = funcVisitor(curNode);
      if (breakTraverse) return;
      const reversChildren = [...curNode.children].reverse();
      for (const [childId] of reversChildren) {
        stack.push(this.nodes.get(childId) as Node<K, W>);
      }
    }
  }
}

/**
 *
 */
export class Node<K, W=boolean> {

  id: K;
  children = new Map<K, W>();

  /**
   *
   */
  constructor(id: K, children?: Map<K, W>) {
    this.id = id;
    this.children = children ?? new Map<K, W>();
  }

  /**
   *
   */
  addChild(node: Node<K, W>, weight: W) {
    this.children.set(node.id, weight);
  }

  /**
   *
   */
  getEdgeWeight(node: Node<K, W>): W | undefined {
    return this.children.get(node.id);
  }

  /**
   *
   */
  isChild(node: Node<K, W>): boolean {
    const weight = this.getEdgeWeight(node);
    return weight !== undefined;
  }
}
