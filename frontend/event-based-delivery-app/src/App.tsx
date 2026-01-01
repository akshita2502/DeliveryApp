import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout'; // Import Layout
import Home from './pages/Home';
import EventProducts from './pages/EventProducts';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Wrap routes in MainLayout to persist SideNav/Header/Footer */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventId" element={<EventProducts />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;