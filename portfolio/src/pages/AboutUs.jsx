import React from 'react';

function AboutUs() {
  return (
    <main className="about-us-page">
      <section className="hero">
        <h1>About Us</h1>
        <p>Learn more about our mission, values, and the team behind our work.</p>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          We are dedicated to creating meaningful experiences through thoughtful design and
          intentional development. Our team collaborates to bring ideas to life with clarity
          and impact.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Creativity</li>
          <li>Quality</li>
          <li>Collaboration</li>
          <li>Continuous improvement</li>
        </ul>
      </section>
    </main>
  );
}

export default AboutUs;
