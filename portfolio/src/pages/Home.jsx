import React from "react";
import developer from "../assets/developer.png";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section>
        <div className="banner-content">
          <div className="">
            <h1 className="banner-content__title">Greatings!</h1>
            <p className="banner-content__subtitle">
              I'M <span className="banner-content__name">BIHIZI PATRICK</span>
            </p>
            <p className="banner-content__description">
              Software Engineer | Web Developer | Tech Enthusiast
            </p>
          </div>
          <div className="">
            <img src={developer} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="introduction">
          <h2 className="section-title">
            LET ME <span className="puple-color">INTRODUCE</span> MYSELF
          </h2>
          <p className="section-description">
            I'm a React Native Developer with{" "}
            <span style={{ fontWeight: 700 }}>3 years</span> of experience
            creating mobile apps for the iOS, Android, and Web platforms.
          </p>
          <p className="section-description">
            My skills include proficiency in{" "}
            <span className="puple-color">TypeScript</span>,{" "}
            <span className="puple-color">React</span>,{" "}
            <span className="puple-color">ReactJs, Angular</span>, and other
            relevant technologies. I have experience in integrating various
            third-party libraries, API integration, push notifications and
            analytics.
          </p>
          <p className="section-description">
            My field of Interest's are building new{" "}
            <span className="puple-color">Technologies and Products</span>
          </p>
        </div>
        <div className="social-media">
            <h1>FIND ME ON</h1>
            <p>Feel free to connect with me on any of these platforms!</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/bihizi-patrick-9b8b1a1b3/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/bihizipatrick" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://www.facebook.com/bihizi.patrick" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
            </div>
        </div>
      </section>
    </main>
  );
}
