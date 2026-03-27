import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title"> About Me</h2>
        <p className="about-text">
          I'm Yogesh Avdhut, a full-stack developer specializing in AWS and the MERN stack. With hands-on experience in building scalable and dynamic web applications, I thrive on turning ideas into impactful digital solutions. Currently based in Pune, I'm passionate about clean code, UI/UX, and backend architecture.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🌍 Location</h3>
            <p>Pune, Maharashtra</p>
          </div>
          <div className="about-card">
            <h3>🧑‍💻 Experience</h3>
            <p>1 year in MERN Development</p>
          </div>
          <div className="about-card">
            <h3>🚀 Passion</h3>
            <p>Building impactful digital products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
