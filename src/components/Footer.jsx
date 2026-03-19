import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Yogesh Avdhut. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/yogesh-avadhut" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yogesh-avadhut-7b7007211/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
