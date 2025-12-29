export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Обо мне</h2>
            <p className="text-lg text-gray-600 mb-6">
              Меня зовут Дмитрий Соболевский, я являюсь специалистом с 20+ летним опытом работы в информационных технологиях
            </p>
            <p className="text-gray-600">
              Профессионал в области системного анализа, администрирования и разработки. 
              Более 20 лет успешной работы в IT сфокусированы на помощи компаниям в 
              оптимизации процессов и внедрении современных технологических решений.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-lg photo-container">
              <img 
                src="/photo.png" 
                alt="IT Консультант - Специалист с 20+ летним опытом" 
                className="w-full h-full object-cover rounded-2xl photo-image"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 about-grid">
          <div className="card text-center">
            <div className="text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Системное администрирование</h3>
            <p className="text-gray-600">
              Windows, Linux серверы. Настройка, оптимизация и безопасность инфраструктуры, проектирование сетей.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Телекоммуникации</h3>
            <p className="text-gray-600">
              Опыт с АТС Siemens, Panasonic. Видеонаблюдение и телефонные системы для предприятий.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Системная интеграция</h3>
            <p className="text-gray-600">
              Внедрение 1С в торговле, бухгалтерии, производстве и сельском хозяйстве.
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Бизнес/Системный анализ</h3>
            <p className="text-gray-600">
              Анализ бизнес-процессов, разработка IT-стратегии и оптимизация работы компании. Выявление потребностей и предложение эффективных решений.
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Web-разработка</h3>
            <p className="text-gray-600">
              Разработка веб-приложений с использованием современных технологий (React, TypeScript, FastAPI, Django). Полный цикл от проектирования до запуска.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Мой опыт охватывает:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li>✓ Настройка серверов (Windows, Linux)</li>
              <li>✓ Видеонаблюдение и безопасность</li>
              <li>✓ АТС и телефонные системы</li>
              <li>✓ Системная интеграция</li>
              <li>✓ Документирование ИТ-инфраструктуры</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>✓ 1С интеграция и автоматизация</li>
              <li>✓ Облачные решения</li>
              <li>✓ Системный анализ</li>
              <li>✓ Web-разработка</li>
              <li>✓ Работа с ИИ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

