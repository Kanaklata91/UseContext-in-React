import React from 'react';
import './style.css';
import ThemeContext from './Context';
import Child1 from './Child1';

export default function App() {
  const val = 500;
  return (
    <div>
      <ThemeContext.Provider value={val}>
        <Child1 />
      </ThemeContext.Provider>
    </div>
  );
}
