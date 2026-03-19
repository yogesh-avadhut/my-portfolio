import '../styles/Education.css';

const education = [
  {
    institute: 'Dr. Babasaheb Ambedkar Marathwada University Sub-campus, Dharashiv',
    degree: 'Master of Computer Applications',
    period: 'July 2021 – May 2023',
    grade: '70%',
  },
  {
    institute: 'Shriman Bhahusaheb Zadbuke Mahavidyalaya, Barshi',
    degree: 'Bachelor of Computer Applications',
    period: 'June 2018 – May 2021',
    grade: '70%',
  },
  {
    institute: 'Kalegaon Jr. College, Kalegaon',
    degree: 'Higher Secondary Certificate in Arts',
    period: 'June 2017 – March 2018',
    grade: '78%',
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="section-title"> 🎓 Education</h2>
      <div className="edu-stack">
        {education.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-header">
              <h3>{edu.degree}</h3>
              <span className="period">{edu.period}</span>
            </div>
            <p className="institute">{edu.institute}</p>
            <div className="grade">Grade: {edu.grade}</div>
            {index < education.length - 1 }
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
