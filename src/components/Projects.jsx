import '../styles/Projects.css';
import project1 from '../assets/kiranashop.png';
import project2 from '../assets/expensetracker.png';
import project3 from '../assets/savari clone.png';

const projects = [
  {
  title: 'Kirana Store E-Commerce Platform',
  description:
    'E-commerce platform for a local kirana store with product catalog, cart, authentication, and admin panel. Integrated AI for fraud detection, stock recommendations, and price analysis with smart search assistant.',
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'PrimeReact', 'Claude AI'],
  image: project1,
  live: '#',
  github: 'https://github.com/yogesh-avadhut'
},
  {
    title: 'Expense Tracker App',
    description:
      'Track daily expenses with add/edit/delete functionality, MongoDB backend, and clean UI. Built a web app to manage daily expenses with add, edit, and delete functionality using Node.js and Express.js for expense CRUD operations and MongoDB Atlas to store expense records.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'PrimeReact'],
    image: project2,
    live: '#',
    github: 'https://github.com/yogesh-avadhut'
  },
  {
    title: 'Cab Booking Clone (Savaari)',
    description:
      'Frontend clone of cab booking app with fare calculation and booking confirmation. Developed a cab booking frontend application inspired by Ola/Uber with features like cab category selection, pickup and drop input forms, and booking confirmation page.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript', 'PrimeReact'],
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
                {/* <a href={project.live} target="_blank" className="btn">Live Demo</a> */}
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