import React from 'react';

function Resume() {
  const resumeLink = "/ResumePlaceHolder.pdf";

  return (
    <section className="resume">
      <h2>My Resume</h2>
      <p>You can download my resume below</p>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-link">
        Download Resume
      </a>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
    </section>
  );
}

export default Resume;
