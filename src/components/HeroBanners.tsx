const HeroBanners = () => {
  // IDs de imágenes de Picsum Photos para mantener consistencia
  const imageIds = [
    '238', // Imagen de ciudad
    '239', // Imagen de tecnología
    '240', // Imagen de negocios
    '241', // Imagen de deportes
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4 bg-gray-900">
      <a href="https://gli.org" className="bg-purple-900 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity">
        <img 
          src={`https://picsum.photos/id/${imageIds[0]}/800/600`}
          alt="GLI Blog" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-xs font-bold text-white">Nuevo Blog!</h3>
          <p className="text-xs text-white/80">Los beneficios y desafíos de la autoexclusión centralizada</p>
        </div>
      </a>
      
      <a href="https://md.com" className="bg-gray-800 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity">
        <img 
          src={`https://picsum.photos/id/${imageIds[1]}/800/600`}
          alt="M&D Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-xs font-bold text-white">Nuevo Blog!</h3>
          <p className="text-xs text-white/80">Los beneficios y desafíos de la autoexclusión centralizada</p>
        </div>
      </a>
      
      <a href="https://sector.com" className="bg-purple-600 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity">
        <img 
          src={`https://picsum.photos/id/${imageIds[2]}/800/600`}
          alt="Sector" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-xs font-bold text-white">Nuevo Blog!</h3>
          <p className="text-xs text-white/80">Los beneficios y desafíos de la autoexclusión centralizada</p>
        </div>
      </a>
      
      <a href="https://ruletas.com" className="bg-gray-700 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity">
        <img 
          src={`https://picsum.photos/id/${imageIds[3]}/800/600`}
          alt="Ruletas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-xs font-bold text-white">Nuevo Blog!</h3>
          <p className="text-xs text-white/80">Los beneficios y desafíos de la autoexclusión centralizada</p>
        </div>
      </a>
    </div>
  );
};

export default HeroBanners;
