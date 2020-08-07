const strOnlyOnce = 'йцукенгшщзхъ';
const strNotOnlyOnce1 = `й${strOnlyOnce}`;
const strNotOnlyOnce2 = `${strOnlyOnce}ъ`;

/**
 * Реализуйте алгоритм, определяющий, все ли символы в строке встречаются только один раз.
 */
describe('1.1.1', () => {

  /**
   *
   */
  it('011', () => {
    expect(onlyOnce(strOnlyOnce)).toBe(true);
  });
  it('012', () => {
    expect(onlyOnce(strNotOnlyOnce1)).toBe(false);
  });
  it('013', () => {
    expect(onlyOnce(strNotOnlyOnce2)).toBe(false);
  });

  /**
   *
   */
  function onlyOnce(str: string): boolean {
    const set = new Set();
    for (const symb of str) {
      if (set.has(symb)) {
        return false;
      } else {
        set.add(symb);
      }
    }
    return true;
  }

});

/**
 * А если при этом запрещено использование дополнительных структур данных?
 */
describe('1.1.2', () => {

  /**
   *
   */
  it('021', () => {
    expect(onlyOnceWithoutAdditionalStructure(strOnlyOnce)).toBe(true);
  });
  it('022', () => {
    expect(onlyOnceWithoutAdditionalStructure(strNotOnlyOnce1)).toBe(false);
  });
  it('023', () => {
    expect(onlyOnceWithoutAdditionalStructure(strNotOnlyOnce2)).toBe(false);
  });

  /**
   *
   */
  function onlyOnceWithoutAdditionalStructure(str: string): boolean {
    if (str.length < 2) return true;
    const penultimateIndex = str.length - 2;
    for (let i = 0; i <= penultimateIndex; i++) {
      const symb = str[i];
      const tail = str.substring(i + 1);
      if (tail.includes(symb)) {
        return false;
      }
    }
    return true;
  }

});
