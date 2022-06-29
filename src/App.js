import React from 'react';
import './style.css';
import ThemeContext from './Context';
import Child1 from './Child1';

export default function App() {
  return (
    <div>
      <ThemeContext.Provider value={4567}>
        <Child1 />
      </ThemeContext.Provider>
    </div>
  );
}
