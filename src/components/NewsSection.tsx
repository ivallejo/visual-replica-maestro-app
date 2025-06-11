import { ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const NewsSection = () => {
  const newsItems = [
    { time: '12:00', text: 'Belgrade Future Gaming Show 2025: Un evento exitoso para Amatic Industries' },
    { time: '12:30', text: 'CT Gaming: Next y Diamond Glittering Ways. Este es un texto de ejemplo mucho más largo para probar el desplazamiento de la marquesina y ver cómo funciona.' },
    { time: '13:00', text: 'Belgrade Future Gaming Show 2026: Un evento exitoso para Amatic Industries' },
    { time: '13:45', text: 'Nueva regulación de iGaming aprobada en Perú, con detalles sobre las implicaciones para los operadores y jugadores locales.' },
  ];

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [displayDuration, setDisplayDuration] = useState(8000); // Duración inicial para noticias cortas (8 segundos)

  const currentNews = newsItems[currentNewsIndex];

  // Efecto para determinar si el texto desborda y establecer displayDuration
  useEffect(() => {
    if (textRef.current) {
      const parentWidth = textRef.current.parentElement?.offsetWidth || 0;
      const textWidth = textRef.current.scrollWidth;
      const overflows = textWidth > parentWidth;
      setIsOverflowing(overflows);

      // Establecer duración de visualización dinámica
      if (overflows) {
        setDisplayDuration(32000); // Animación de marquesina es 30s, añadir 2s de búfer
      } else {
        setDisplayDuration(8000); // 8 segundos para noticias cortas
      }
    }
  }, [currentNewsIndex, currentNews.text]); // Recalcular cuando la noticia cambia

  // Efecto para la transición automática de noticias
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
    }, displayDuration);

    return () => clearInterval(interval);
  }, [displayDuration, newsItems.length]); // Volver a ejecutar cuando displayDuration o newsItems.length cambian

  const handlePrev = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-white py-4 mx-4 rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-bold flex-shrink-0 flex items-center gap-2">
            <Bell className="w-4 h-4" /> NOTICIAS RECIENTES
          </div>
          <div className="flex-1 text-sm text-gray-900 overflow-hidden flex items-center gap-2">
            <button className="p-1 rounded text-gray-600 hover:bg-gray-100" onClick={handlePrev}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-bold text-gray-400 flex-shrink-0">{currentNews.time}</span>
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <a 
                href={`/news/${currentNews.text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                className="inline-block w-full"
              >
                <span
                  key={currentNewsIndex}
                  ref={textRef}
                  className={`inline-block ${isOverflowing ? 'animate-marquee-text' : ''} w-full`}
                >
                  {currentNews.text}
                </span>
              </a>
            </div>
            <button className="p-1 rounded text-gray-600 hover:bg-gray-100" onClick={handleNext}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
