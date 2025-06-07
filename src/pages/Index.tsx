
import { useState } from 'react';
import Header from '../components/Header';
import HeroBanners from '../components/HeroBanners';
import NewsSection from '../components/NewsSection';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import '../styles/soloazar.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanners />
      <Header />
      
      {/* Blue promotional banner */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-sm">R. FRANCO DIGITAL</span>
              <span className="ml-0 sm:ml-4 text-base sm:text-lg font-bold block sm:inline">EL MEJOR PARTNER PARA LATAM</span>
            </div>
            <span className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold self-start sm:self-auto">💬 HABLEMOS</span>
          </div>
        </div>
      </div>
      
      {/* Purple promotional banner */}
      <div className="bg-purple-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-sm">FLAMING BOMBS BINGO NOW AVAILABLE</span>
              <br />
              <span className="text-xs">IN BOTH SPANISH & PORTUGUESE</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <img src="/lovable-uploads/2640aa7b-6e01-4e4b-a4f7-7e89677aff16.png" alt="Flaming Bombs" className="h-8 sm:h-12" />
              <span className="text-base sm:text-lg font-bold">FLAMING BOMBS</span>
              <span className="text-sm hidden sm:inline">🎲 air dice</span>
            </div>
          </div>
        </div>
      </div>
      
      <NewsSection />
      
      {/* Main content area with responsive layout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <MainContent />
          <div className="lg:w-80">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
