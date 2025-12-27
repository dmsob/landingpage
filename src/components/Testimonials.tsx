import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-main">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Что говорят мои клиенты
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

