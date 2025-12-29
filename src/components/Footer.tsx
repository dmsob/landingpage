import { TelegramIcon, VKIcon } from './SocialIcons';

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
              <img 
                src="/logo.png" 
                alt="IT Консультант - Логотип" 
                className="h-16 w-auto object-contain"
              />
              <span className="font-bold text-white brand-text hidden sm:inline">Системный аналитик</span>
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
            <div className="flex gap-4">
              <a
                href="https://vk.com/dmsob"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                aria-label="ВКонтакте"
              >
                <VKIcon className="w-5 h-5 text-gray-300 hover:text-white transition" />
              </a>
              <a
                href="https://t.me/dmsob"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-5 h-5 text-gray-300 hover:text-white transition" />
              </a>
             
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-400">
            &copy; ИП Соболевский Д.Ю.  •  ОГРНИП 319631300080961  •  ИНН 632311086793  •  2025-2026  •  Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

