import { TelegramIcon, VKIcon, GitHubIcon } from './SocialIcons';

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
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-white brand-text hidden sm:inline">IT Консультант</span>
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
                className="hover:text-white transition"
                aria-label="ВКонтакте"
              >
                <VKIcon className="w-6 h-6 text-gray-300 hover:text-white transition" />
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-6 h-6 text-gray-300 hover:text-white transition" />
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-6 h-6 text-gray-300 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-400">
            &copy; 2026 IT Консультант. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

