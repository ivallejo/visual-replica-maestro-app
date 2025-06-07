
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded transform rotate-12 flex items-center justify-center">
              <span className="text-white font-bold text-sm">🔥</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">solo<span className="text-orange-500">azar</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium border-b-2 border-orange-500 pb-1">PRINCIPAL</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">NOTICIAS & CONTENIDO</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">EVENTOS</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">PODCAST</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">ENTREVISTAS</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">CONTACTO</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Search className="text-gray-400 w-5 h-5" />
          <div className="flex gap-2">
            <button className="bg-teal-400 text-white px-3 py-1 rounded text-sm font-medium">POR</button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">ENG</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
