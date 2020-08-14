import {DirectedGraph, Node} from './DirectedGraph';

/**
 *
 */
describe('DirectedGraph', () => {

  let graph: DirectedGraph<number, number>;
  // let emptyGraph: DirectedGraph<number>;

  beforeEach(() => {
    graph = new DirectedGraph(new Map<number, Node<number, number>>([

      [11, new Node<number, number>(11)],
      [121, new Node<number, number>(121)],
      [122, new Node<number, number>(122)],
      [12, new Node<number, number>(12, new Map<number, number>([
        [121, 765],
        [122, 876],
      ]))],
      [13, new Node<number, number>(13)],
      [1, new Node<number, number>(1, new Map<number, number>([
        [11, 321],
        [12, 432],
        [13, 987],
      ]))],

      [21, new Node<number, number>(21)],
      [22, new Node<number, number>(22)],
      [2, new Node<number, number>(2, new Map<number, number>([
        [21, 543],
        [22, 654],
      ]))],

    ]));
    // emptyGraph = new DirectedGraph();
  });

  it('011', () => {
    const origNode = graph.nodes.get(12) as Node<number, number>;
    const destNode = graph.nodes.get(122) as Node<number, number>;
    expect(origNode.getEdgeWeight(destNode)).toBe(876);
  });

  it('012 BFS', () => {
    const rootNode = graph.nodes.get(1) as Node<number, number>;
    const nodesIds: number[] = [];
    graph.traverseBFS(rootNode, (node): void => {
      nodesIds.push(node.id);
    });
    expect(nodesIds).toEqual([1, 11, 12, 13, 121, 122]);
  });

  it('013 DFS', () => {
    const rootNode = graph.nodes.get(1) as Node<number, number>;
    const nodesIds: number[] = [];
    graph.traverseDFS(rootNode, (node) => {
      nodesIds.push(node.id);
    });
    expect(nodesIds).toEqual([1, 11, 12, 121, 122, 13]);
  });

  it('014 breakTraverse', () => {
    const rootNode = graph.nodes.get(1) as Node<number, number>;
    const nodesIds: number[] = [];
    graph.traverseBFS(rootNode, (node) => {
      nodesIds.push(node.id);
      if (node.id === 12) return true;
    });
    expect(nodesIds).toEqual([1, 11, 12]);
  });

});
