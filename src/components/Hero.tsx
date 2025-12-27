export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLearnMoreClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="hero-section pt-32 pb-16">
      <div className="container-main">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Системный анализ, администрирование<br />и <span className="gradient-text">веб-разработка</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              20+ лет опыта в IT. Помогу вашей компании оптимизировать процессы, настроить инфраструктуру и внедрить современные решения.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button onClick={handleContactClick} className="btn-primary">
                Заказать консультацию
              </button>
              <button onClick={handleLearnMoreClick} className="btn-secondary">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

