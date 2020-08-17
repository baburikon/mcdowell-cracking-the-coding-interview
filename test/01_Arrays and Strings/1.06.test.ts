/**
 * Реализуйте метод для выполнения простейшего сжатия строк с использованием счетчика повторяющихся символов.
 * Например, строка ааbсссссааа превращается в а2b1с5а3.
 * Если сжатая строка не становится короче исходной, то метод возвращает исходную строку.
 * Предполагается, что строка состоит только из букв верхнего и нижнего регистра (a-z).
 */
describe('1.6', () => {

  const testCases: [number, string, string][] = [
    [11, 'ааbсссссааа', 'а2b1с5а3'],
    [12, 'abc', 'abc'],
    [13, '', '']
  ];

  for (const testCase of testCases) {
    const numTest = testCase[0];
    it(`${numTest}`.padStart(3, '0'), () => {
      const str = testCase[1];
      const strCompressed = testCase[2];
      expect(compress(str)).toBe(strCompressed);
    });
  }

  /**
   *
   */
  function compress(str: string): string {
    const acc: { symb: string, count: number }[] = [];
    for (let i = 0; i < str.length; i++) {
      const symb = str[i];
      const lastIndexAcc = acc.length - 1;
      const previousSymb = acc[lastIndexAcc]?.symb;
      if (symb !== previousSymb) {
        acc.push({
          symb,
          count: 1
        });
      } else {
        acc[lastIndexAcc].count = acc[lastIndexAcc].count + 1;
      }
    }
    const isLengthDecrease = acc.length * 2 < str.length;
    if (isLengthDecrease) {
      return acc
        .map(({symb, count}) => `${symb}${count}`)
        .join('');
    } else {
      return str;
    }
  }

});
