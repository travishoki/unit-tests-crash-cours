import { toUpperCase } from './helpers';

describe('toHaveLength', () => {
  it('toHaveLength', () => {
    const str = 'foo';
    const value = toUpperCase(str);
    const expectedValue = 'FOO';

    expect(value).toEqual(expectedValue);
  });
});
