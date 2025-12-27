export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-main">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Обо мне</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Специалист с 20+ летним опытом в информационных технологиях
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card">
            <div className="text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Системное администрирование</h3>
            <p className="text-gray-600">
              Windows, Linux, FreeBSD серверы. Настройка, оптимизация и безопасность инфраструктуры.
            </p>
          </div>
          
          <div className="card">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Телекоммуникации</h3>
            <p className="text-gray-600">
              Опыт с АТС Siemens, Panasonic. Видеонаблюдение и телефонные системы для предприятий.
            </p>
          </div>
          
          <div className="card">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Системная интеграция</h3>
            <p className="text-gray-600">
              Внедрение 1С в торговле, бухгалтерии, производстве и сельском хозяйстве.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Мой опыт охватывает:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li>✓ Настройка серверов (Windows, Linux, FreeBSD)</li>
              <li>✓ Видеонаблюдение и безопасность</li>
              <li>✓ АТС и телефонные системы</li>
              <li>✓ Системная интеграция</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>✓ 1С интеграция и автоматизация</li>
              <li>✓ Облачные решения</li>
              <li>✓ Системный анализ</li>
              <li>✓ Web-разработка</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

