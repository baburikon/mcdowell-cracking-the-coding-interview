/**
 * Допустим, что существует метод isSubstring, проверяющий, является ли одно слово подстрокой другого.
 * Для двух строк sl и s2 напишите код, который проверяет, получена ли строка s2 циклическим сдвигом s1, используя только один вызов метода isSubstring
 * (пример: слово waterbottle получено циклическим сдвигом erbottlewat).
 */
describe('1.9', () => {

  const testCases: [number, string, string, boolean][] = [
    [11, 'waterbottle', 'erbottlewat', true],
    [12, '', '', true],
    [13, 'pale', 'bake', false]
  ];

  const isSubstring = (str: string, searchValue: string): boolean => str.indexOf(searchValue) !== -1;

  for (const testCase of testCases) {
    const numTest = testCase[0];
    it(`${numTest}`.padStart(3, '0'), () => {
      const str1 = testCase[1];
      const str2 = testCase[2];
      const res = testCase[3];
      expect(checkCyclicShift(str1, str2)).toBe(res);
    });
  }

  /**
   *
   */
  function checkCyclicShift(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;
    return isSubstring(str1.repeat(2), str2);
  }

});
