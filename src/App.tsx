// src/App.tsx
import React, { useState } from 'react';
import TipCalculator from './components/TipCalculator';
import './styles/main.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
};

export default App;
