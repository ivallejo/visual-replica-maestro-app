import { useState } from 'react';
import Header from '../components/Header';
import HeroBanners from '../components/HeroBanners';
import NewsSection from '../components/NewsSection';
import NewsGrid from '../components/NewsGrid';
import Sidebar from '../components/Sidebar';
import '../styles/gaming360.css';
import MainContent from '@/components/MainContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanners />
      <Header />
      
      {/* Blue promotional banner */}
      <a href="#" className="block bg-gray-600 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity mx-4 my-4 h-28">
        <img
          src="https://picsum.photos/id/243/1200/300" 
          alt="Promotional Banner"
          className="w-full h-full object-cover"
        />
      </a>
      
      <NewsSection />
      
      {/* Main content area with responsive layout */}
      {/* <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <MainContent />
        </div>
      </div> */}

      {/* Main content area with responsive layout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <NewsGrid />
          <div className="lg:w-80">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
