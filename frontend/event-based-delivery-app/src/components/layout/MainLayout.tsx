import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideNav from '../common/SideNav';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-layout">
      {/* Header stays fixed at top */}
      <Header />

      <div className="layout-body">
        {/* SideNav controlled by layout state */}
        <SideNav isOpen={isSidebarOpen} toggle={toggleSidebar} />

        {/* Main Content Area */}
        <main className={`content-wrapper ${isSidebarOpen ? 'expanded' : ''}`}>
          <div className="page-content">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;