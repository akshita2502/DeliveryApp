import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import EventProducts from './pages/EventProducts';
import Login from './pages/Login';       // New Import
import Register from './pages/Register'; // New Import
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        {/* Public Authentication Routes (No Layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Application Routes (Wrapped in MainLayout) */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events/:eventId" element={<EventProducts />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;