import React, { useContext } from 'react';
import ThemeContext from './Context';
const Child1 = () => {
  console.log('child1', useContext(ThemeContext));
  const ContextVal = useContext(ThemeContext);
  return (
    <div>
      <span>Value: {ContextVal}</span>
    </div>
  );
};

export default Child1;
