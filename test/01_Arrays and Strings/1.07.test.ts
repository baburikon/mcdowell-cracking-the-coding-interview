/**
 * Имеется изображение, представленное матрицей NxN; каждый пиксел представлен 4 байтами.
 * Напишите метод для поворота изображения на 90 градусов.
 * Удастся ли вам выполнить эту операцию «на месте»?
 */
describe('1.7', () => {

  const testCases: [number, number[][], number[][]][] = [
    [11, [
      [11, 12, 13, 14],
      [21, 22, 23, 24],
      [31, 32, 33, 34],
      [41, 42, 43, 44]
    ], [
      [41, 31, 21, 11],
      [42, 32, 22, 12],
      [43, 33, 23, 13],
      [44, 34, 24, 14]
    ]],
    [12, [], []]
  ];

  for (const testCase of testCases) {
    const numTest = testCase[0];
    it(`${numTest}`.padStart(3, '0'), () => {
      const arr = testCase[1];
      const arrRotation = testCase[2];
      expect(rotation90(arr)).toEqual(arrRotation);
    });
  }

  /**
   *
   */
  function rotation90(arr: number[][]): number[][] {
    const N = arr.length;
    if (N <= 1) return arr;

    const maxIndex = N - 1;

    const halfX = Math.ceil(N / 2);
    const halfY = Math.floor(N / 2);

    for (let i = 0; i < halfX; i++) {
      const dopI = maxIndex - i;

      for (let k = 0; k < halfY; k++) {
        const dopK = maxIndex - k;

        /*[
          arr[2][4],
          arr[4][3],
          arr[3][1],
          arr[1][2],
        ] = [
          arr[1][2],
          arr[2][4],
          arr[4][3],
          arr[3][1],
        ];*/

        [
          arr[k][dopI],
          arr[dopI][dopK],
          arr[dopK][i],
          arr[i][k]
        ] = [
          arr[i][k],
          arr[k][dopI],
          arr[dopI][dopK],
          arr[dopK][i]
        ];
      }
    }
    return arr;
  }

});
