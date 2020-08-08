const testCases: [number, string, string, boolean][] = [
  [11, 'pale', 'ple', true],
  [12, 'pales', 'pale', true],
  [13, 'pale', 'bale', true],
  [14, 'pale', 'pale', true],
  [15, '', '', true],
  [16, 'pale', 'bake', false]
];

/**
 * Существуют три вида модифицирующих операций со строками: вставка символа, удаление символа и замена символа.
 * Напишите функцию, которая проверяет, находятся ли две строки на расстоянии одной модификации (или нуля модификаций).
 */
describe('1.5', () => {

  for (const testCase of testCases) {
    const numTest = testCase[0];
    it(`${numTest}`.padStart(3, '0'), () => {
      const str1 = testCase[1];
      const str2 = testCase[2];
      const res = testCase[3];
      expect(checkDistanceLessOrEqualOneModification(str1, str2)).toBe(res);
    });
  }

  /**
   *
   */
  function checkDistanceLessOrEqualOneModification(str1: string, str2: string): boolean {
    if (str1 === str2) return true;

    const maxLevenshteinDistance = 1;

    const maxDiffLength = maxLevenshteinDistance;
    const len1 = str1.length;
    const len2 = str2.length;
    const diffLength = Math.abs(len1 - len2);
    if (diffLength > maxDiffLength) return false;

    const commonLength = Math.max(len1, len2);

    let levenshteinDistance = 0;
    let shift1 = 0;
    let shift2 = 0;
    for (let i = 0; i < commonLength; i++) {

      const symb1 = str1[i + shift1];
      const symb2 = str2[i + shift2];
      if (symb1 === symb2) continue;

      levenshteinDistance++;
      if (levenshteinDistance > maxLevenshteinDistance) return false;

      if (len1 > len2) {
        shift1 = 1;
      } else if (len1 < len2) {
        shift2 = 1;
      }
    }
    return true;
  }

});
