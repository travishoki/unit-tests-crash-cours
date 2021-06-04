import React from 'react';

import { CHARACTER_LIST, TYPES } from './constants';
// import { filterOutTypeSith } from './ComponentA.helpers';

/*
Task:
- Filter out siths from characters 
- Use a testable pure function to filter 
*/
export const ComponentA = () => {
  return CHARACTER_LIST
    // .filter(item => item.type !== TYPES.SITH)
    .map((item) => (
      <p>{item.name}</p>
    ));
};

export default ComponentA;
