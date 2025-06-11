import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const mainMenuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Igaming', href: '/category/igaming' },
    { label: 'Casino', href: '/category/casino' },
    { label: 'Poker', href: '/category/poker' },
    { label: 'eSports', href: '/category/esports' },
    { label: 'Entrevistas', href: '/category/entrevistas' },
    { label: 'Eventos', href: '/category/eventos' },
  ];

  const categories = [
    'Apuestas Deportivas',
    'Bingo',
    'Casino',
    'Conferencias',
    'Empresas',
    'eSports',
    'Eventos',
    'Igaming',
    'Juegos Online',
    'Legislación',
    'Lotería',
    'Marketing',
    'Oportunidad Laboral',
    'Otros',
    'Sportbook',
    'Tecnología',
    'Webinar',
    'Poker'
  ];

  return (
    <header className="bg-gray-900 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Main header content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded transform rotate-12 flex items-center justify-center">
              <span className="text-white font-bold text-sm">🔥</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white font-['Poppins']">
              GAMING<span className="text-blue-500">360</span>
            </span>
            {/* <p className="text-xs text-gray-400 mt-1">Tu visión completa del iGaming en LATAM</p> */}
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainMenuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-gray-300 hover:text-white font-medium text-sm hover:border-b-2 hover:border-blue-500 pb-1 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Categories dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-300 hover:text-white font-medium text-sm"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                Categoría
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown menu */}
              <div className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 ${
                isCategoriesOpen ? 'block' : 'hidden'
              }`}>
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          
          <div className="flex items-center gap-4">
            <Search className="text-gray-400 w-5 h-5" />
            <div className="hidden sm:flex gap-2">
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">POR</button>
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">ENG</button>
            </div>
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 relative z-[60]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className={`fixed left-0 top-0 h-full w-80 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Sidebar header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded transform rotate-12 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🔥</span>
                </div>
                <span className="text-xl font-bold text-white font-['Poppins']">
                  GAMING<span className="text-blue-500">360</span>
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            {/* Mobile navigation menu */}
            <nav className="p-4">
              <div className="flex flex-col space-y-1">
                {mainMenuItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="text-gray-200 hover:text-white hover:bg-gray-700 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile categories section */}
                <div className="mt-4">
                  <button 
                    className="w-full text-left text-gray-200 hover:text-white hover:bg-gray-700 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 border-b border-gray-700"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  >
                    Categoría
                  </button>
                  
                  {isCategoriesOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {categories.map((category) => (
                        <a
                          key={category}
                          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block py-2 text-gray-400 hover:text-white hover:bg-gray-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Language buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-700">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex-1">
                  POR
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex-1">
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
