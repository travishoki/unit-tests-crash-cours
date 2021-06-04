import React from 'react';

import { CHARACTER_LIST, TYPES } from './constants';
// import { filterOutTypeSith } from './ComponentA.helpers';

/*
Task:
- Filter out siths from characters 
- Use a pure functino to filter 
*/

export const ComponentA = () => {
  if (!isVisible) return null;

  return CHARACTER_LIST
    // .filter(item => item.type !== TYPES.SITH)
    .map((item) => (
      <p>{item.name}</p>
    ));
};

export default ComponentA;
