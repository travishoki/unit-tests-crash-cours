import { sum } from './numbers';

/*
Task:
- Throw error for undefined props
*/
describe('numbers - sum', () => {
  it('sum - undefined props', () => {
    expect(sum).toThrow('num1 undefined');
  });

  it('sum - undefined prop num2', () => {
    const num1 = 1;
    expect(() => sum(num1)).toThrow('num2 undefined');
  });
});
