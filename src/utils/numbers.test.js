import { sum } from './numbers';

describe('sum', () => {
  it('sum', () => {
    const num1 = 1;
    const num2 = 2;
    const result = sum(num1, num2);
    const expectedValue = 3;

    expect(result).toEqual(expectedValue);
  });

  it('sum - undefined prop', () => {
    expect(sum).toThrow('num1 undefined');
  });

  it('sum - undefined prop num2', () => {
    const num1 = 1;
    expect(() => sum(num1)).toThrow('num2 undefined');
  });
});
