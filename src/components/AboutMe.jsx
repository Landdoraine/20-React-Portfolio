import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="avatar">
          <img
            src="/WensProfile.jpg"
            alt="Photo of Myself"
            className="avatar-image"
          />
        </div>
        <div className="bio">
          <p>
            Hello there. I am Wenson, a budding web developer with a passion for tackling challenges. 
            I began my journey in high school from modding video games.
            Now I am an aspiring Full-Stack developer capable of handling apps using technologies such as React and Express!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
