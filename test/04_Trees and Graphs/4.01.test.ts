import {DirectedGraph, Node} from './DirectedGraph';

describe('4.1', () => {

  let graph: DirectedGraph<number, number>;

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
  });

  /**
   *
   */
  it('011', () => {
    expect(existPath(graph, 1, 122)).toBe(true);
  });
  it('012', () => {
    expect(existPath(graph, 2, 122)).toBe(false);
  });

  /**
   *
   */
  function existPath(
    graph: DirectedGraph<number, number>,
    origNodeId: number,
    destNodeId: number
  ): boolean {
    const origNode = graph.nodes.get(origNodeId) as Node<number, number>;
    let exist: boolean = false;
    graph.traverseBFS(origNode, (node): boolean|void => {
      if (node.id === destNodeId) {
        exist = true;
        return true;
      }
    });
    return exist;
  }

});
