const strSource = 'цууук';
const strShuffle = 'укууц';
const strNotShuffle1 = 'цуSук';
const strNotShuffle2 = 'цууукЫ';
const strNotShuffle3 = 'цуук';

/**
 * Для двух строк напишите метод, определяющий, является ли одна строка перестановкой другой.
 */
describe('1.2', () => {

  /**
   *
   */
  it('011', () => {
    expect(checkShuffle(strSource, strShuffle)).toBe(true);
  });
  it('012', () => {
    expect(checkShuffle(strSource, strNotShuffle1)).toBe(false);
  });
  it('013', () => {
    expect(checkShuffle(strSource, strNotShuffle2)).toBe(false);
  });
  it('014', () => {
    expect(checkShuffle(strSource, strNotShuffle3)).toBe(false);
  });

  /**
   *
   */
  function checkShuffle(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const map1 = _createMapSymbs(str1);
    const map2 = _createMapSymbs(str2);
    if (map1.size !== map2.size) return false;

    for (const [symb, countSymbs1] of map1.entries()) {
      const countSymbs2 = map2.get(symb);
      if (countSymbs1 !== countSymbs2) return false;
    }
    return true;

    /**
     *
     */
    function _createMapSymbs(str: string): Map<string, number> {
      const mapSymbs = new Map();
      for (const symb of str) {
        const countAddedSymbs = mapSymbs.get(symb) ?? 0;
        mapSymbs.set(symb, countAddedSymbs + 1);
      }
      return mapSymbs;
    }
  }

});
