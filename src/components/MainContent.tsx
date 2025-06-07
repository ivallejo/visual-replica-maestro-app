
const MainContent = () => {
  return (
    <div className="flex-1 space-y-6">
      {/* Blue banner */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white rounded-full p-2">
              <span className="text-blue-600 text-2xl">🍃</span>
            </div>
            <div>
              <h3 className="text-sm font-bold">atemgroup</h3>
              <p className="text-xs">AGENCIA DE COMUNICACIONES</p>
            </div>
          </div>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="text-6xl">🎯</div>
        </div>
      </div>

      {/* Orange banner */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">LYNON</h3>
          </div>
          <div className="text-right">
            <div className="bg-black text-white px-2 py-1 rounded text-sm mb-2">
              📱 Bono retroactivo de hasta un 10%
            </div>
            <div className="bg-white text-orange-600 px-3 py-1 rounded text-sm font-bold">
              ¡Haz te con el Tuyo Ahora!
            </div>
            <p className="text-xs mt-1">Código Exclusivo Como Regalo</p>
          </div>
        </div>
      </div>

      {/* Event section */}
      <div className="bg-purple-900 rounded-lg overflow-hidden">
        <div className="bg-orange-500 text-white px-4 py-2">
          <span className="text-sm font-bold">EVENTOS</span>
        </div>
        <div className="p-6 text-white">
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <p className="text-sm mb-2">ENTREVISTA A:</p>
              <h2 className="text-3xl font-bold mb-2">SLOBODAN GEORGIJEVSKI</h2>
              <p className="text-sm mb-4">DIRECTOR DE VENTAS DE SOFT2BET</p>
              <p className="text-xs mb-4">EXCLUSIVO SOLOAZAR</p>
            </div>
            <div className="w-48 h-48">
              <img 
                src="/lovable-uploads/2640aa7b-6e01-4e4b-a4f7-7e89677aff16.png" 
                alt="Slobodan Georgijevski" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technology banner */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">REDEFINIENDO LA INNOVACIÓN: TECNOLOGÍA</h2>
      </div>
    </div>
  );
};

export default MainContent;
