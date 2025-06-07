
const HeroBanners = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-900">
      <div className="bg-blue-900 rounded-lg p-4 text-white relative overflow-hidden">
        <div className="absolute top-2 left-2 text-orange-500 text-2xl">🔥</div>
        <h3 className="text-sm font-bold mt-6">soloazar</h3>
        <p className="text-xs mt-1">INFORMATION IS OUR BEST BET</p>
      </div>
      
      <div className="bg-purple-900 rounded-lg p-4 text-white relative">
        <h3 className="text-xs font-bold">Nuevo Blog!</h3>
        <p className="text-xs mt-1">Los beneficios y desafíos de la autoexclusión centralizada</p>
        <span className="text-xs bg-white text-black px-2 py-1 rounded absolute top-2 right-2">GLI</span>
      </div>
      
      <div className="bg-blue-800 rounded-lg p-4 text-white relative">
        <div className="text-4xl font-bold text-blue-300">M&D</div>
        <p className="text-xs mt-2">Premium</p>
      </div>
      
      <div className="bg-purple-600 rounded-lg p-4 text-white">
        <h3 className="text-sm font-bold">LA PRIMERA DEL SECTOR</h3>
        <div className="mt-2 text-yellow-400 text-xl">===</div>
      </div>
      
      <div className="bg-blue-700 rounded-lg p-4 text-white">
        <h3 className="text-sm font-bold">RULETAS ELECTRÓNICAS</h3>
        <p className="text-xs mt-1">🎯</p>
      </div>
      
      <div className="bg-purple-500 rounded-lg p-4 text-white">
        <h3 className="text-sm font-bold">PLATAFORMA DE IGAMING</h3>
        <p className="text-xs mt-1">TODO EN UNO</p>
        <span className="text-xs">⚡ Uplatform</span>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-4 text-white">
        <h3 className="text-xs font-bold">INDICADORES DE INTERACCIONES EN TOTAL</h3>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-xs">
            <span>⭕ 4124</span>
            <span>SOLOAZAR GAMING</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>❷ 1685</span>
            <span>GAMBLING INSIDER</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>❸ 1196</span>
            <span>EUROPEAN GAMING MEDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanners;
