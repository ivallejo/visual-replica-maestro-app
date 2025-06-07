
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
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Sidebar header */}
            <div className="flex items-center justify-between p-4 border-b">
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
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Navigation menu */}
            <nav className="p-4">
              <div className="flex flex-col gap-4">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-orange-500 font-medium text-base py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRINCIPAL
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-orange-500 font-medium text-base py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NOTICIAS & CONTENIDO
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-orange-500 font-medium text-base py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EVENTOS
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-orange-500 font-medium text-base py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PODCAST
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-orange-500 font-medium text-base py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ENTREVISTAS
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-orange-500 font-medium text-base py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACTO
                </a>
                
                {/* Language buttons */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                  <button className="bg-teal-400 text-white px-4 py-2 rounded text-sm font-medium">POR</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">ENG</button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
