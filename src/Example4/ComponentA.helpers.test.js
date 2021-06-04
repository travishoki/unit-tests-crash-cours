import { filterOutTypeSith } from './ComponentA.helpers';

/*
Task:
- Write the expected result for filterOutTypeSith
*/
describe('filterOutTypeSith', () => {
  it('filterOutTypeSith', () => {
    const list = [
      {
        name: 'Darth Vader',
        type: 'sith',
      },
      {
        name: 'Luke Skywalker',
        type: 'jedi',
      },
    ];
    const result = list.filter(filterOutTypeSith);
    const expectedResult = [
    ];

    expect(result).toEqual(expectedResult);
  });
});