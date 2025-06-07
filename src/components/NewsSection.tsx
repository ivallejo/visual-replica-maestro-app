
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const NewsSection = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">
            NOTICIAS DE ÚLTIMA
          </div>
          <div className="flex-1 text-sm text-gray-700 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="mr-8">y máquinas en bares afectados por la Dana</span>
              <span className="mr-8 font-bold">12:00</span>
              <span className="mr-8">Belgrade Future Gaming Show 2025: Un evento exitoso para Amatic Industries</span>
              <span className="mr-8 font-bold">12:00</span>
              <span className="mr-8">CT Gaming: Next y Diamond Glittering Ways</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 rounded hover:bg-gray-100">
              <Pause className="w-4 h-4" />
            </button>
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
