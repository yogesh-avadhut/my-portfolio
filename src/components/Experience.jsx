import '../styles/Experience.css';

const experiences = [
  {
    company: 'Skramby Technology Solutions',
    role: 'AWS and MERN Stack Developer',
    period: 'July 2024 – Present',
    location: 'Pune',
    description: `Contributed to two major projects:
    1. changexpert - Developed admin panel, website UI components, backend REST APIs, and integrated Docker for seamless deployment.
    2. cabeefly - Worked on payment flow integration and AWS cloud infrastructure basics.`,
  },
  {
    company: 'Zoom Computers (Deputed at PCMC Corporation)',
    role: 'Computer Engineer (IT Support)',
    period: 'Mar 2018 – May 2021',
    location: 'Pune',
    description: `Handled IT support, installation, maintenance, and troubleshooting of hardware/software and networking devices at PCMC Corporation.`,
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span> | <span className="location">{exp.location}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
