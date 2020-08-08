const strPalindrome = 'а роза упала на лапу Азора';
const strPalindromeShuffle1 = 'зпаро уаап алоАн зарлуа а';
const strPalindromeShuffle2 = 'ы';
const strPalindromeShuffle3 = '';
const strNotPalindromeShuffle = '12345';

/**
 * Напишите функцию, которая проверяет, является ли заданная строка перестановкой палиндрома.
 * Палиндром - слово или фраза, одинаково читающиеся в прямом и обратном направлении;
 * перестановка - строка, содержащая те же символы в другом порядке.
 * Палиндром не ограничивается словами из словаря.
 */
describe('1.4', () => {

  /**
   *
   */
  it('011', () => {
    expect(checkPalindromeShuffle(strPalindrome)).toBe(true);
  });
  it('012', () => {
    expect(checkPalindromeShuffle(strPalindromeShuffle1)).toBe(true);
  });
  it('013', () => {
    expect(checkPalindromeShuffle(strPalindromeShuffle2)).toBe(true);
  });
  it('014', () => {
    expect(checkPalindromeShuffle(strPalindromeShuffle3)).toBe(true);
  });
  it('015', () => {
    expect(checkPalindromeShuffle(strNotPalindromeShuffle)).toBe(false);
  });

  /**
   * если всего символов четное количество, то количество каждого символа в строке должно быть четным
   * если нечетное, то, возможно, кроме одного
   */
  function checkPalindromeShuffle(str: string): boolean {
    const strWithoutBlank = str.replace(/\s/g, '');
    const strLength = strWithoutBlank.length;
    if (!strLength) return true;
    if (strLength === 1) return true;

    const maxCountOddCount = _isOdd(strLength) ? 1 : 0;

    const strLowerCase = strWithoutBlank.toLowerCase();

    const setTestedSymbs = new Set();
    let symbsOddCount = 0;
    for (let i = 0; i < strLength; i++) {
      const symb = strLowerCase[i];
      if (setTestedSymbs.has(symb)) continue;

      let symbCount = 1;
      for (let k = i + 1; k < strLength; k++) {
        if (strLowerCase[k] === symb) symbCount++;
      }
      if (_isOdd(symbCount)) symbsOddCount++;
      if (symbsOddCount > maxCountOddCount) return false;
      setTestedSymbs.add(symb);
    }

    return true;

    /**
     *
     */
    function _isOdd(num: number): boolean {
      return !!(num % 2);
    }
  }

});
