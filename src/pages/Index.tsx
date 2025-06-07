
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
      <div className="bg-blue-600 text-white py-1 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm">R. FRANCO DIGITAL</span>
          <span className="ml-4 text-lg font-bold">EL MEJOR PARTNER PARA LATAM</span>
          <span className="float-right bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold">💬 HABLEMOS</span>
        </div>
      </div>
      <div className="bg-purple-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-sm">FLAMING BOMBS BINGO NOW AVAILABLE</span>
            <br />
            <span className="text-xs">IN BOTH SPANISH & PORTUGUESE</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/2640aa7b-6e01-4e4b-a4f7-7e89677aff16.png" alt="Flaming Bombs" className="h-12" />
            <span className="text-lg font-bold">FLAMING BOMBS</span>
            <span className="text-sm">🎲 air dice</span>
          </div>
        </div>
      </div>
      <NewsSection />
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
};

export default Index;
