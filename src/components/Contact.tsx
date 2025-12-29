import { useState, FormEvent } from 'react';
import { TelegramIcon, VKIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Получаем API ключ из переменных окружения
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!ACCESS_KEY || ACCESS_KEY === 'your_access_key_here') {
      alert('Ошибка: Web3Forms API ключ не настроен. Пожалуйста, настройте VITE_WEB3FORMS_ACCESS_KEY в .env.local');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'Новое сообщение с лендинга',
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Не указан',
          message: `Имя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone || 'Не указан'}\n\nСообщение:\n${formData.message}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        // Автоматически скрыть сообщение через 5 секунд
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container-main">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Давайте свяжемся</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Готов помочь вашему проекту. Заполните форму или свяжитесь со мной напрямую
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Форма обратной связи</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Сообщения о статусе отправки */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь со мной напрямую.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Иван Петров"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="ivan@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="+7 (999) 123-45-67"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-32 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Расскажите о вашем проекте..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary text-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контакты</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:info@dmsobconsulting.ru"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      info@dmsobconsulting.ru
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Телефон</p>
                    <a
                      href="tel:+79179756318"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      +7 (917) 975-63-18
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TelegramIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telegram</p>
                    <a
                      href="https://t.me/dmsob"
                      className="text-blue-600 font-medium hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @dmsob
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <VKIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ВКонтакте</p>
                    <a
                      href="https://vk.com/dmsob"
                      className="text-blue-600 font-medium hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      vk.com/dmsob
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h4 className="text-lg font-bold mb-3">Время ответа</h4>
              <p className="text-blue-100 mb-4">Обычно отвечаю в течение 24 часов</p>
              <p className="text-sm text-blue-100">
                Наиболее активен в будни с 10:00 до 18:00 (UTC+3)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

