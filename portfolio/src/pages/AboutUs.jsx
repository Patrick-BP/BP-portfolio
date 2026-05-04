import React from 'react';
import { useEffect, useRef } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";


function AboutUs() {
  const calendarRef = useRef(null);

  useEffect(() => {
    GitHubCalendar(calendarRef.current, "patrick-BP", {
      responsive: true,
      global_stats: false,
    });
  }, []);
  return (
    <main className="about-us-page">
      <section className="hero">
        <h1 className="banner-content__title">Learn More About Me</h1>
        <div className="introduction">

        <p >
          
          Hi Everyone, I am <span className='puple-color'>Snaichuk Volodymyr</span>,
          a software engineer currently based in <span className='puple-color'>Krakow, Poland</span>.
    </p>
        <p>
          I have a Bachelor's degree in Computer Science and
          Master's degree in Project Management from Ternopil Academy.
        </p>
        <p>My hobbies beyond programming:</p>
        <ul>
          <li>Playing Games</li>
          <li>Reading</li>
          <li>Travelling</li>
        </ul>
        </div>
      </section>

      <section className="story">
        <h1 className="banner-content__title">My Skills</h1>
         <h1>My <span>Skills</span></h1>
  <div className="grid-rows">

    {/* <!-- Row 1: TS, JS, React, Angular, NodeJS --> */}
    <div className="grid-row">

      {/* <!-- TypeScript --> */}
      <div className="skill-card" title="TypeScript">
        <div className="badge ts">TS</div>
        <span className="skill-label">TypeScript</span>
      </div>

      {/* <!-- JavaScript --> */}
      <div className="skill-card" title="JavaScript">
        <div className="badge js">JS</div>
        <span className="skill-label">JavaScript</span>
      </div>

      {/* <!-- React --> */}
      <div className="skill-card" title="React">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.1" fill="#c8bfe8"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#c8bfe8" strokeWidth="1.3" fill="none"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#c8bfe8" strokeWidth="1.3" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#c8bfe8" strokeWidth="1.3" fill="none" transform="rotate(120 12 12)"/>
        </svg>
        <span className="skill-label">React</span>
      </div>

      {/* <!-- Angular --> */}
      <div className="skill-card" title="Angular">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#c8bfe8">
          <path d="M12 2.5L2 6.2l1.5 12.8L12 22.5l8.5-3.5L22 6.2 12 2.5zm0 2.1l7.1 2.9-1.2 10.4L12 20.3l-5.9-2.4L4.9 7.5 12 4.6zm0 2.9L7.5 17h1.9l.9-2.3h3.3l.9 2.3H16L12 7.5zm0 2.3l1.2 3.1h-2.4L12 9.8z"/>
        </svg>
        <span className="skill-label">Angular</span>
      </div>

      {/* <!-- Node.js --> */}
      <div className="skill-card" title="Node.js">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#c8bfe8">
          <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35C3.3 6.6 3 7.1 3 7.65v8.7c0 .55.3 1.05.78 1.3l7.44 4.3c.22.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.25.78-.75.78-1.3v-8.7c0-.55-.3-1.05-.78-1.3L12.78 2.05c-.23-.13-.5-.2-.78-.2zm0 2.1l6.5 3.75v7.5L12 19l-6.5-3.8V7.7L12 3.95z"/>
          <path d="M12 7.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S14.49 7.5 12 7.5zm0 1.5c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/>
        </svg>
        <span className="skill-label">Node.js</span>
      </div>
    </div>

    {/* <!-- Row 2: Express, SQL, MongoDB, Spring Boot --> */}
    <div className="grid-row">

      {/* <!-- Express.js --> */}
      <div className="skill-card" title="Express.js">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#c8bfe8">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.157l-.1-.831c0-.146 0-.292-.041-.696zm1.181-.132h9.354c-.58-4.528-5.049-5.583-9.354 0z"/>
        </svg>
        <span className="skill-label">Express.js</span>
      </div>

      {/* <!-- SQL --> */}
      <div className="skill-card" title="SQL">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#c8bfe8">
          <path d="M12 2C7.03 2 3 3.8 3 6v12c0 2.2 4.03 4 9 4s9-1.8 9-4V6c0-2.2-4.03-4-9-4zm0 2c4.42 0 7 1.57 7 2s-2.58 2-7 2-7-1.57-7-2 2.58-2 7-2zm7 14c0 .43-2.58 2-7 2s-7-1.57-7-2v-2.23C6.61 17.63 9.2 18 12 18s5.39-.37 7-1.23V18zm0-5c0 .43-2.58 2-7 2s-7-1.57-7-2v-2.23C6.61 12.63 9.2 13 12 13s5.39-.37 7-1.23V13z"/>
        </svg>
        <span className="skill-label">SQL</span>
      </div>

      {/* <!-- MongoDB --> */}
      <div className="skill-card" title="MongoDB">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#c8bfe8">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
        </svg>
        <span className="skill-label">MongoDB</span>
      </div>

      {/* <!-- Spring Boot --> */}
      <div className="skill-card" title="Spring Boot">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#c8bfe8">
          <path d="M20.59 4.19a10.6 10.6 0 01.83 7.7 10.6 10.6 0 01-4.78 6.23 10.56 10.56 0 01-7.9.94 10.57 10.57 0 01-6.16-4.87A10.56 10.56 0 012 6.28a10.57 10.57 0 014.87-6.17l.66 1.26a9.1 9.1 0 00-4.2 5.32 9.1 9.1 0 00.8 6.8 9.1 9.1 0 005.3 4.2 9.1 9.1 0 006.8-.81 9.1 9.1 0 004.2-5.32 9.1 9.1 0 00-.71-6.63zM22.5 0l-4.5 10.5L22.5 0z"/>
          <circle cx="12" cy="12" r="4.5"/>
          <circle cx="12" cy="12" r="2" fill="#0e0b1e"/>
        </svg>
        <span className="skill-label">Spring Boot</span>
      </div>

    </div>
  </div>
        
      </section>

       <section className="bg-[#100719] text-white p-8 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">
        My <span className="text-purple-400">Coding</span> Journey
      </h2>

      <div className="github-calendar" ref={calendarRef}>
        Loading GitHub activity...
      </div>
    </section>
    </main>
  );
}

export default AboutUs;
