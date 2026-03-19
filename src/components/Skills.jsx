import '../styles/Skills.css';
import {
  SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiGithub, SiPostman, SiDocker, SiJsonwebtokens
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'JWT', icon: <SiJsonwebtokens /> }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
