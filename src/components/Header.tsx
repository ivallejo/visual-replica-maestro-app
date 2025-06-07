
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Main header content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded transform rotate-12 flex items-center justify-center">
              <span className="text-white font-bold text-sm">🔥</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              solo<span className="text-orange-500">azar</span>
            </span>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium border-b-2 border-orange-500 pb-1 text-sm">PRINCIPAL</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium text-sm">NOTICIAS & CONTENIDO</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium text-sm">EVENTOS</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium text-sm">PODCAST</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium text-sm">ENTREVISTAS</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium text-sm">CONTACTO</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Search className="text-gray-400 w-5 h-5" />
            <div className="hidden sm:flex gap-2">
              <button className="bg-teal-400 text-white px-3 py-1 rounded text-sm font-medium">POR</button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">ENG</button>
            </div>
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Sidebar header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded transform rotate-12 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🔥</span>
                </div>
                <span className="text-xl font-bold text-gray-800">
                  solo<span className="text-orange-500">azar</span>
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Navigation menu */}
            <nav className="p-6">
              <div className="flex flex-col space-y-1">
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRINCIPAL
                </a>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NOTICIAS & CONTENIDO
                </a>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EVENTOS
                </a>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PODCAST
                </a>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ENTREVISTAS
                </a>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACTO
                </a>
              </div>
                
              {/* Language buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex-1">
                  POR
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex-1">
                  ENG
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
