


import { useState } from 'react';
import '../styles/Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Yogesh Avdhut</div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </div>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
        <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <div className="social-icons">
        <a href="https://github.com/yogesh-avadhut" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/yogesh-avadhut-7b7007211/" target="_blank"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;