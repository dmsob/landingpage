import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-main">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Комплексные решения для развития вашего бизнеса
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2 text-sm text-gray-700">
                {service.features.map((feature, index) => (
                  <p key={index}>✓ {feature}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

