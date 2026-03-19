
import '../styles/Navbar.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Yogesh Avdhut</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="social-icons">
        <a href="https://github.com/YOUR_GITHUB" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;
