import '../styles/Head.css';
import profileImg from '../assets/myprofile.jpeg';
import resume from '../assets/yogesh_avadhut_mca.pdf';


const Head = () => {
  return (
    <section className="head" id="head">
      <div className="head-content">
        <div className="head-text">
          <h1>Hi, I'm <span>Yogesh Avdhut</span></h1>
          <h2>AWS & MERN Stack Developer</h2>
          <p>
            Passionate full-stack developer with experience in building scalable web applications using React, Node, MongoDB, and AWS. Let's build something amazing together!
          </p>
          <div className="head-buttons">
            <a href="https://github.com/yogesh-avadhut" target="_blank" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/yogesh-avadhut-7b7007211/" target="_blank" className="btn btn-outline">LinkedIn</a>
            <a href={resume} download className="btn btn-outline">Download Resume</a>
          </div>
        </div>
        <div className="head-image">
          <img src={profileImg} alt="Yogesh Avdhut" />
        </div>
      </div>
    </section>
  );
};

export default Head;
