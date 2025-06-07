
const Sidebar = () => {
  return (
    <div className="w-80 space-y-4">
      {/* News section */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="bg-orange-500 text-white px-4 py-2">
          <span className="text-sm font-bold">NOTICIAS</span>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex gap-3">
              <img src="/lovable-uploads/2640aa7b-6e01-4e4b-a4f7-7e89677aff16.png" alt="News" className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="text-sm font-bold text-purple-600 mb-1">THUNDER REBORN</h4>
                <p className="text-xs text-gray-600">XTENSION LINK</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <img src="/lovable-uploads/2640aa7b-6e01-4e4b-a4f7-7e89677aff16.png" alt="News" className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="text-sm font-bold mb-1">ATLASLIVE TUVO UN GRAN IMPACTO EN BIS SIGMA AMERICAS 2025</h4>
                <p className="text-xs text-gray-600">Las Paulo, Exclusivo SoloAzar. Atlaslive obtuvo una audiencia internacional y promocionó exitosos reconocimientos en la industria en BIS SIGMA Americas, según informes. La sesión de preguntas y respuestas con SoloAzar Led más sobre cómo la compañía logró conectar con las diferentes audiencias de la industria, red estratégica y su presencia destacada...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad banners */}
      <div className="space-y-4">
        <div className="bg-purple-600 rounded-lg p-4 text-white text-center">
          <p className="text-sm">17 DE JUNIO DE 2025 19:00H</p>
          <p className="text-sm">CASA ALVARADO - MIRAFLORES (LIMA)</p>
          <div className="mt-2 text-right">
            <span className="text-xs">www.egt.com</span>
          </div>
        </div>

        <div className="bg-teal-600 rounded-lg p-4 text-white">
          <h3 className="text-sm font-bold">CT INTERACTIVE</h3>
          <p className="text-xs mt-1">KEEP THE GAME GOING</p>
        </div>

        <div className="bg-red-600 rounded-lg p-4 text-white text-center">
          <h3 className="text-sm font-bold">boost your sportsbook</h3>
          <p className="text-xs">Get your free copy</p>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 text-white">
          <div className="flex items-center gap-2">
            <span className="text-lg">🐼</span>
            <div>
              <h3 className="text-sm font-bold text-yellow-400">PANDA FURY</h3>
              <p className="text-xs">WORLDMATCH</p>
            </div>
          </div>
        </div>

        <div className="bg-pink-500 rounded-lg p-4 text-white h-20"></div>

        <div className="space-y-2">
          <div className="bg-gray-200 rounded-lg p-3 text-center">
            <span className="text-sm font-bold text-gray-800">VIRAL</span>
          </div>
          <div className="bg-purple-600 rounded-lg p-3 text-white text-center">
            <span className="text-sm font-bold">SBC SUMMIT MALTA</span>
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg p-4 text-white text-center">
          <h3 className="text-xl font-bold">BELATRA</h3>
        </div>

        <div className="bg-blue-800 rounded-lg p-4 text-white">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚽</span>
            <div>
              <h3 className="text-sm font-bold">PGS LIVE</h3>
              <p className="text-xs">FERIA LATINOAMERICANA DE JUEGOS</p>
              <p className="text-xs">SEE YOU AT 48A</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border">
          <p className="text-xs text-gray-600 mb-2">🌐 CÁMARA ARGENTINA DE SALALES CASINOS, BINGOS Y ANEXOS</p>
        </div>

        <div className="bg-orange-500 rounded-lg p-3 text-white text-center">
          <span className="text-sm font-bold">EVENTO</span>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 text-white">
          <h3 className="text-sm font-bold mb-2">BETCONSTRUCT ANUNCIA QUE LA ORTAK FUTURE CONFIDENCE CONFERENCE HARA UNA PARADA EN PERÚ</h3>
          <p className="text-xs text-gray-300">Persis., BetConstruct se enorgullece de...</p>
          <div className="mt-2 text-right">
            <span className="text-xs">Intellij ID</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
