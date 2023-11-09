import React from 'react';

function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="https://github.com/Landdoraine" target="_blank" rel="noopener noreferrer"> 
            <img src="/GithubIcon.png" alt="GitHub Logo" /> 
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wen-ding-chen-22a9a6283/" target="_blank" rel="noopener noreferrer">
            <img src="/LinkedInIcon.png" alt="LinkedIn Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCh0VHyjyKcuByehBFlyOuTw/" target="_blank" rel="noopener noreferrer">
            <img src="/YoutubeIcon.png" alt="Youtube Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
