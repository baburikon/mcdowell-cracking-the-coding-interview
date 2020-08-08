const testCases: [number, number[][], number[][]][] = [
  [11, [
    [11, 0, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34]
  ], [
    [0, 0, 0, 0],
    [21, 0, 23, 24],
    [31, 0, 33, 34]
  ]],
  [12, [], []]
];

/**
 * Напишите алгоритм, реализующий следующее условие: если элемент матрицы MxN равен О, то весь столбец и вся строка обнуляются.
 */
describe('1.8', () => {

  for (const testCase of testCases) {
    const numTest = testCase[0];
    it(`${numTest}`.padStart(3, '0'), () => {
      const arr = testCase[1];
      const arrWithNulls = testCase[2];
      expect(setNulls(arr)).toEqual(arrWithNulls);
    });
  }

  /**
   *
   */
  function setNulls(arr: number[][]): number[][] {
    const N = arr.length;
    if (N === 0) return arr;

    const M = arr[0].length;
    if (M === 0) return arr;

    const maxIndexN = N - 1;
    const maxIndexM = M - 1;

    const nullColumns = new Set();
    const nullRows = new Set();
    for (let i = 0; i <= maxIndexN; i++) {
      for (let k = 0; k <= maxIndexM; k++) {
        const val = arr[i][k];
        if (val === 0) {
          nullRows.add(i);
          nullColumns.add(k);
        }
      }
    }
    for (let i = 0; i <= maxIndexN; i++) {
      for (let k = 0; k <= maxIndexM; k++) {
        if (nullRows.has(i) || nullColumns.has(k)) {
          arr[i][k] = 0;
        }
      }
    }
    return arr;
  }

});
