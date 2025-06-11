import { Info, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const MainContent = () => {
  const mainNews = {
    image: 'https://picsum.photos/id/257/800/600',
    category: 'JUEGO ONLINE',
    title: 'LOTBA lanza la nueva campaña "Hablar es ganar" para prevenir el juego en menores',
    date: 'junio 10, 2025',
    link: '#',
  };

  const sideNews = [
    {
      image: 'https://picsum.photos/id/227/400/300',
      category: 'G&M EVENTOS',
      title: 'Para agendar: Quinta edición de día completo de G&M Eventos Perú',
      date: 'junio 11, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/247/400/300',
      category: 'MERCADOS | LATAM Y CARIBE',
      title: 'Ricardo Solano (Solano Abogados). Posicionamiento, tributación y lucha contra la ilegalidad en el juego peruano',
      date: 'junio 12, 2025',
      link: '#',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Main News Article */}
      <a href={mainNews.link} className="relative flex-1 rounded-lg overflow-hidden shadow-lg group h-[400px]">
        <img src={mainNews.image} alt={mainNews.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full inline-block mb-2 self-start">{mainNews.category}</span>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">{mainNews.title}</h2>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{mainNews.date}</p>
        </div>
      </a>

      {/* Side News Articles */}
      <div className="flex flex-col gap-6 lg:w-96">
        {sideNews.map((news, index) => (
          <a key={index} href={news.link} className="relative h-[188px] rounded-lg overflow-hidden shadow-lg group">
            <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full inline-block mb-2 self-start">{news.category}</span>
              <h3 className="text-lg font-bold leading-tight mb-2">{news.title}</h3>
              <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{news.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
