import { toUpperCase } from './strings';

describe('toUpperCase', () => {
  it('toUpperCase', () => {
    const str = 'foo';
    const result = toUpperCase(str);
    const expectedValue = 'FOO';

    expect(result).toEqual(expectedValue);
  });
});
