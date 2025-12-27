import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Иван Петров"
                  required
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="ivan@example.com"
                  required
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="+7 (999) 123-45-67"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-32"
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>
              <button type="submit" className="w-full btn-primary text-center">
                Отправить
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
                      href="mailto:contact@example.com"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      contact@example.com
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
                      href="tel:+79991234567"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telegram</p>
                    <a
                      href="https://t.me/yourusername"
                      className="text-blue-600 font-medium hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourusername
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      className="text-blue-600 font-medium hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/yourprofile
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

