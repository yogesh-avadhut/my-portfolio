import '../styles/Projects.css';
import project1 from '../assets/react.svg';
import project2 from '../assets/react.svg';
import project3 from '../assets/react.svg';

const projects = [
  {
    title: 'Kirana Store E-Commerce Platform',
    description:
      'E-commerce site for local store with product catalog, cart, secure login/signup, and admin panel.',
    tech: ['React', 'Node.js', 'MongoDB', 'PrimeReact'],
    image: project1,
    live: '#',
    github: 'https://github.com/yogesh-avadhut'
  },
  {
    title: 'Expense Tracker App',
    description:
      'Track daily expenses with add/edit/delete functionality, MongoDB backend, and clean UI.',
    tech: ['React', 'Express', 'MongoDB', 'PrimeReact'],
    image: project2,
    live: '#',
    github: 'https://github.com/yogesh-avadhut'
  },
  {
    title: 'Cab Booking Clone (Savaari)',
    description:
      'Frontend clone of cab booking app with fare calculation and booking confirmation.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    image: project3,
    live: '#',
    github: 'https://github.com/yogesh-avadhut'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.live} target="_blank" className="btn">Live Demo</a>
                <a href={project.github} target="_blank" className="btn btn-outline">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
