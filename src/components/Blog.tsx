import { blogPosts } from '../data';

export default function Blog() {
  return (
    <section id="blog" className="section bg-gray-50">
      <div className="container-main">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Блог</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Статьи о технологиях, лучших практиках и кейсы
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <span className="badge">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <a href={post.link} className="text-blue-600 font-medium hover:text-blue-700">
                  Читать →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

