import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsSection from '../components/NewsSection';
import HeroBanners from '@/components/HeroBanners';
import { featuredNews, newsItems } from '../components/NewsGrid'; // Importar los arrays de noticias

const NewsDetailPage = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    // Combinar todas las noticias disponibles
    const allNews = [...featuredNews, ...newsItems];

    // Buscar la noticia por su ID (usaremos el title como ID temporalmente, idealmente sería un slug o ID único)
    const foundNews = allNews.find(item => 
      item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === newsId
    );
    setNews(foundNews);
  }, [newsId]);

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Cargando noticia o noticia no encontrada...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanners />
      <Header />
      <NewsSection />
      
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            {news.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h1>
          <p className="text-gray-600 text-sm mb-6">Publicado el {news.date}</p>
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-auto rounded-lg mb-6"
          />
          <div className="text-gray-800 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: news.content }}></div>
          {/* Aquí podrías añadir más contenido detallado de la noticia */}
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-80">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage; 