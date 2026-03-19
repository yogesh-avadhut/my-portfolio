import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Yogesh Avdhut. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:dev.yogeshavadhut@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
