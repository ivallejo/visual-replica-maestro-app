import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid, { featuredNews, newsItems } from '../components/NewsGrid';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import HeroBanners from '@/components/HeroBanners';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [filteredNews, setFilteredNews] = useState([]);
  const [filteredFeaturedNews, setFilteredFeaturedNews] = useState([]);

  // Aquí necesitaríamos una forma de acceder a todas las noticias, idealmente
  // desde un contexto o una API para evitar duplicar datos.
  // Por ahora, para la demostración, duplicaré las noticias de NewsGrid.
  // En un proyecto real, se debería centralizar la gestión de noticias.

  // IMPORTANTE: Este es un placeholder. En una aplicación real, no duplicarías los datos.
  // Deberías obtener la lista completa de noticias de un lugar centralizado (API, contexto).
  const allNewsItems = [
    {
      image: 'https://picsum.photos/id/250/600/400',
      category: 'Entrevistas',
      title: 'Andrés Portocarrero: Llevando la IA al siguiente nivel en G&M Eventos Perú 2025',
      description: 'Andrés Portocarrero de Happy Studio comparte sus insights sobre cómo la inteligencia artificial está transformando la industria del iGaming y su impacto en eventos como G&M Events Perú.',
      date: 'mayo 12, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/251/600/400',
      category: 'Igaming',
      title: 'Gabriel Katz: El campeón del Desafío G&M',
      description: 'Una entrevista exclusiva con Gabriel Katz, el ganador del Desafío G&M, donde comparte su experiencia y estrategias en el competitivo mundo del iGaming.',
      date: 'febrero 10, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/252/600/400',
      category: 'Otros',
      title: 'Los juegos de azar en la Antigüedad',
      description: 'Un recorrido histórico por los orígenes de los juegos de azar, desde las civilizaciones antiguas hasta sus primeras regulaciones.',
      date: 'enero 6, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/253/600/400',
      category: 'Empresas',
      title: 'Ingresar y crecer en el mercado del juego de América Latina',
      description: 'Un análisis profundo sobre las estrategias clave para entrar y expandirse exitosamente en el dinámico mercado del juego en América Latina.',
      date: 'mayo 5, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/254/600/400',
      category: 'Tecnología',
      title: 'Innovación en plataformas de apuestas: El futuro ya está aquí',
      description: 'Exploramos las últimas tendencias en tecnología de iGaming y cómo están redefiniendo la experiencia del usuario y la seguridad en las plataformas de apuestas.',
      date: 'febrero 1, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/255/600/400',
      category: 'Legislación',
      title: 'El impacto de las nuevas leyes en el mercado de LatAm',
      description: 'Análisis de las recientes legislaciones en América Latina y su efecto en el panorama de los operadores de iGaming y la protección al jugador.',
      date: 'marzo 5, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/270/600/400',
      category: 'Igaming',
      title: 'Colombia lidera el crecimiento del iGaming en Sudamérica',
      description: 'El mercado colombiano muestra un crecimiento récord en el sector del iGaming, con un aumento del 45% en operadores registrados durante el último trimestre.',
      date: 'junio 15, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/271/600/400',
      category: 'Tecnología',
      title: 'Blockchain revoluciona la transparencia en apuestas deportivas',
      description: 'Las plataformas de apuestas deportivas adoptan blockchain para garantizar la transparencia y seguridad en las operaciones.',
      date: 'junio 14, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/272/600/400',
      category: 'Eventos',
      title: 'SIGMA Americas 2025: El evento más grande de iGaming en Latinoamérica',
      description: 'La próxima edición de SIGMA Americas promete ser la más grande hasta la fecha, con más de 500 expositores y 15,000 asistentes esperados.',
      date: 'junio 13, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/273/600/400',
      category: 'Legislación',
      title: 'Nuevo marco regulatorio para casinos online en México',
      description: 'El gobierno mexicano anuncia un nuevo marco regulatorio para casinos online, estableciendo estándares más claros para operadores y jugadores.',
      date: 'junio 12, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/274/600/400',
      category: 'Tecnología',
      title: 'Realidad aumentada transforma la experiencia en casinos online',
      description: 'Los casinos online implementan tecnología de realidad aumentada para crear experiencias más inmersivas y atractivas para los jugadores.',
      date: 'junio 11, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/275/600/400',
      category: 'Igaming',
      title: 'Chile avanza en la regulación del iGaming',
      description: 'El Congreso chileno debate una nueva ley que regularía el mercado del iGaming, abriendo oportunidades para operadores internacionales.',
      date: 'junio 10, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/276/600/400',
      category: 'Tecnología',
      title: 'Inteligencia artificial mejora la detección de juego responsable',
      description: 'Nuevos algoritmos de IA ayudan a identificar patrones de juego problemático y prevenir adicciones.',
      date: 'junio 9, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/277/600/400',
      category: 'Entrevistas',
      title: 'Entrevista exclusiva con el CEO de Bet365 sobre el mercado latino',
      description: 'El CEO de Bet365 comparte su visión sobre el futuro del iGaming en Latinoamérica y las estrategias de expansión de la empresa.',
      date: 'junio 8, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/278/600/400',
      category: 'Apuestas Deportivas',
      title: 'Nuevas tendencias en apuestas en vivo',
      description: 'Las apuestas en vivo evolucionan con nuevas características y mercados, ofreciendo más opciones a los apostadores.',
      date: 'junio 7, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/279/600/400',
      category: 'Casino',
      title: 'Los juegos de mesa más populares en Latinoamérica',
      description: 'Un análisis de los juegos de casino online más demandados en la región y las tendencias emergentes.',
      date: 'junio 6, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/280/600/400',
      category: 'Igaming',
      title: 'Perú: Oportunidades de crecimiento en el iGaming',
      description: 'El mercado peruano muestra un gran potencial para el desarrollo del iGaming, con un aumento significativo en la adopción digital.',
      date: 'junio 5, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/281/600/400',
      category: 'Tecnología',
      title: 'Criptomonedas en el iGaming: Tendencias y desafíos',
      description: 'Análisis del impacto de las criptomonedas en la industria del iGaming y su adopción por operadores y jugadores.',
      date: 'junio 4, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/282/600/400',
      category: 'Juegos Online',
      title: 'El auge de los juegos móviles en el iGaming',
      description: 'Cómo el desarrollo de juegos móviles está transformando la industria del iGaming y atrayendo a una nueva generación de jugadores.',
      date: 'junio 3, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/283/600/400',
      category: 'Tecnología',
      title: 'Ciberseguridad en plataformas de juego: Protegiendo al usuario',
      description: 'Las últimas estrategias y tecnologías en ciberseguridad para garantizar un entorno de juego seguro y proteger los datos de los usuarios.',
      date: 'junio 2, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/284/600/400',
      category: 'Otros',
      title: 'Reporte anual del mercado de iGaming en LATAM: Cifras clave',
      description: 'Un resumen de las estadísticas más relevantes del último año en el mercado de iGaming latinoamericano, destacando tendencias y proyecciones futuras.',
      date: 'junio 1, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/285/600/400',
      category: 'Otros',
      title: 'La influencia de los juegos de azar en la cultura popular',
      description: 'Exploramos cómo los juegos de azar han sido representados en el cine, la literatura y la música, y su impacto en la sociedad.',
      date: 'mayo 30, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/286/600/400',
      category: 'Empresas',
      title: 'Oportunidades de inversión en startups de iGaming',
      description: 'Análisis de las startups más prometedoras en el sector del iGaming y las oportunidades para inversores.',
      date: 'mayo 29, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/287/600/400',
      category: 'eSports',
      title: 'El crecimiento exponencial de las apuestas en deportes virtuales',
      description: 'El fenómeno de los deportes virtuales y cómo están captando la atención de los apostadores a nivel global.',
      date: 'mayo 28, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/288/600/400',
      category: 'Legislación',
      title: 'Desafíos legales de la publicidad en el iGaming',
      description: 'Un análisis de las regulaciones y desafíos legales que enfrentan los operadores de iGaming en sus campañas publicitarias.',
      date: 'mayo 27, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/289/600/400',
      category: 'Tecnología',
      title: 'Gamificación en casinos online: ¿El futuro del entretenimiento?',
      description: 'Cómo la gamificación está redefiniendo la experiencia del usuario en los casinos online, haciéndolos más interactivos y atractivos.',
      date: 'mayo 26, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/290/600/400',
      category: 'Otros',
      title: 'Juego responsable: Compromiso de la industria con la comunidad',
      description: 'Las iniciativas y programas que la industria del iGaming está implementando para promover el juego responsable y prevenir adicciones.',
      date: 'mayo 25, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/291/600/400',
      category: 'Otros',
      title: 'La evolución de las tragamonedas: De lo clásico a lo digital',
      description: 'Un viaje a través de la historia de las tragamonedas, desde sus inicios mecánicos hasta las complejas versiones digitales de hoy.',
      date: 'mayo 24, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/292/600/400',
      category: 'Oportunidad Laboral',
      title: 'Capacitación profesional en iGaming: Un sector en expansión',
      description: 'La importancia de la formación y capacitación para profesionales en el creciente mercado del iGaming, y dónde encontrar los mejores programas.',
      date: 'mayo 23, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/293/600/400',
      category: 'Otros',
      title: 'Impacto económico del iGaming en el PIB regional',
      description: 'Un análisis de cómo la industria del iGaming contribuye al crecimiento económico de las regiones donde opera.',
      date: 'mayo 22, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/294/600/400',
      category: 'Oportunidad Laboral',
      title: 'Creación de empleo en el sector iGaming: Oportunidades y desafíos',
      description: 'Cómo la expansión del iGaming está generando nuevas oportunidades de empleo y los perfiles más demandados.',
      date: 'mayo 21, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/295/600/400',
      category: 'Eventos',
      title: 'Resumen de G2E Las Vegas 2024: Innovaciones destacadas',
      description: 'Los momentos más importantes y las innovaciones tecnológicas presentadas en la Global Gaming Expo de Las Vegas.',
      date: 'mayo 20, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/296/600/400',
      category: 'Casino',
      title: 'El resurgimiento de los casinos tradicionales: Una nueva era',
      description: 'Cómo los casinos físicos se están reinventando para competir en el panorama digital y atraer a nuevas audiencias.',
      date: 'mayo 19, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/297/600/400',
      category: 'Legislación',
      title: 'Debate sobre la tributación del iGaming en Sudamérica',
      description: 'Los desafíos y propuestas en torno a la implementación de sistemas fiscales justos para la industria del iGaming en la región.',
      date: 'mayo 18, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/298/600/400',
      category: 'Tecnología',
      title: 'Big Data en el iGaming: Personalización y prevención del fraude',
      description: 'Cómo el análisis de Big Data está permitiendo a los operadores ofrecer experiencias personalizadas y mejorar la seguridad.',
      date: 'mayo 17, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/299/600/400',
      category: 'Otros',
      title: 'El futuro del entretenimiento en los casinos: Más allá del juego',
      description: 'Los casinos están evolucionando para ofrecer experiencias completas, combinando juego, gastronomía, espectáculos y ocio.',
      date: 'mayo 16, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/300/600/400',
      category: 'Tecnología',
      title: 'Realidad mixta en el iGaming: Un paso adelante en inmersión',
      description: 'Explorando cómo la realidad mixta (RM) se integra en los juegos de casino para ofrecer una inmersión sin precedentes.',
      date: 'mayo 15, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/301/600/400',
      category: 'Igaming',
      title: 'Brasil: El gigante emergente del iGaming en Latinoamérica',
      description: 'El potencial del mercado brasileño con su reciente regulación y el interés de operadores internacionales.',
      date: 'mayo 14, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/302/600/400',
      category: 'Otros',
      title: 'Campañas de concientización sobre juego responsable: Avances',
      description: 'Las últimas campañas y sus resultados en la promoción de hábitos de juego saludables y la prevención de la ludopatía.',
      date: 'mayo 13, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/303/600/400',
      category: 'Otros',
      title: 'Mujeres líderes en el iGaming: Rompiendo barreras',
      description: 'Destacando la trayectoria y el impacto de mujeres que están abriendo camino en roles de liderazgo dentro de la industria del iGaming.',
      date: 'mayo 12, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/304/600/400',
      category: 'Juegos Online',
      title: 'Nuevos lanzamientos de juegos de casino: Lo más esperado de 2025',
      description: 'Un adelanto de los juegos de casino más innovadores y emocionantes que se esperan para el próximo año.',
      date: 'mayo 11, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/305/600/400',
      category: 'Marketing',
      title: 'Marketing digital en el iGaming: Tendencias y mejores prácticas',
      description: 'Las estrategias de marketing digital más efectivas para atraer y retener jugadores en el competitivo mundo del iGaming.',
      date: 'mayo 10, 2025',
      link: '#',
    },
    {
      image: 'https://picsum.photos/id/306/600/400',
      category: 'Eventos',
      title: 'Latin American Gaming Summit 2025: Un encuentro clave',
      description: 'Cobertura completa de la cumbre que reúne a los líderes de la industria del juego en Latinoamérica para discutir el futuro del sector.',
      date: 'mayo 9, 2025',
      link: '#',
    }
  ];

  useEffect(() => {
    if (categoryName) {
      const decodedCategory = decodeURIComponent(categoryName.replace(/-/g, ' ')).toLowerCase();

      const allNews = [...featuredNews, ...newsItems];
      const filtered = allNews.filter(news => 
        news.category.toLowerCase() === decodedCategory
      );
      setFilteredNews(filtered);

      // Filtrar también las noticias destacadas si es necesario para el diseño
      const filteredFeatured = featuredNews.filter(news => 
        news.category.toLowerCase() === decodedCategory
      );
      setFilteredFeaturedNews(filteredFeatured);
    }
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanners />
      <Header />
      {/* Blue promotional banner - Mantener los anuncios de la página principal */}
      <a href="#" className="block bg-gray-600 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity mx-4 my-4 h-28">
        <img
          src="https://picsum.photos/id/243/1200/300" 
          alt="Promotional Banner"
          className="w-full h-full object-cover"
        />
      </a>
      <NewsSection />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Noticias de "{categoryName?.replace(/-/g, ' ')}"</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Si hay noticias destacadas filtradas, podrías mostrar una sección diferente aquí */}
          {filteredFeaturedNews.length > 0 ? (
            <NewsGrid featuredNews={filteredFeaturedNews} newsItems={filteredNews} />
          ) : (
            <NewsGrid newsItems={filteredNews} />
          )}
          
          <div className="lg:w-80">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 