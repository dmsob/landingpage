export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-main">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                IT
              </div>
              <span className="font-bold text-white">IT Консультант</span>
            </div>
            <p className="text-sm">20+ лет опыта в информационных технологиях</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition"
                >
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="hover:text-white transition"
                >
                  Проекты
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => handleNavClick(e, '#blog')}
                  className="hover:text-white transition"
                >
                  Блог
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition"
                >
                  Системный анализ
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition"
                >
                  Настройка серверов
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition"
                >
                  Внедрение 1С
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition"
                >
                  Web-разработка
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Социальные сети</h4>
            <div className="flex gap-4 text-sm">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Telegram
              </a>
              <a
                href="#"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-400">
            &copy; 2024 IT Консультант. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

