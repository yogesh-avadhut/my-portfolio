
import { useRef, useEffect, useState } from "react";
import "../styles/Certificates.css";

import cert1 from "../assets/certificates/javascript_hackerRank.jpg";
import cert2 from "../assets/certificates/softwareEng_hackerRank.jpg";
import cert3 from "../assets/certificates/nodejs_simpliLearn.jpg";
import cert4 from "../assets/certificates/introPro1_saylor.jpg";
import cert5 from "../assets/certificates/introPro2.jpg";
import cert6 from "../assets/certificates/IntroGenerativeAI_simpliLearn_.jpg";
import cert7 from "../assets/certificates/projecrManager_simpliLearn.jpg";


const certificates = [
  { title: "Javascript", image: cert1 },
  { title: "Software Engineering", image: cert2 },
  { title: "Nodejs", image: cert3 },
  { title: "Introduction Generative AI", image: cert6 },
  { title: "Project Manager", image: cert7 },
  { title: "Introduction To programming1", image: cert4 },
  { title: "Introduction To programming2", image: cert5 },

];

const Certificates = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += 0.4;

        // smooth infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">📜 Certifications & Achievements </h2>

      <div className="carousel-wrapper">
        <div className="fade left"></div>
        <div className="fade right"></div>

        <div
          className="scroll-container"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...certificates, ...certificates].map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img
                src={cert.image}
                alt={cert.title}
                onClick={() => setSelectedImage(cert.image)}
              />
              <h3>{cert.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}
    </section>
  );
};

export default Certificates;