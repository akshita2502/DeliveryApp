import React from 'react';
import Home from './pages/Home';
import './index.css'; // Ensure global styles are applied

const App: React.FC = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;