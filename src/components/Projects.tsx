import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section bg-white">
      <div className="container-main">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Проекты</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Примеры реализованных решений
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-project">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">{project.icon}</div>
                  <p className="text-gray-600 font-semibold">{project.category}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

