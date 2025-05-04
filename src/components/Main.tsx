import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../assets/styles/Main.scss'

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="./assets/images/portrait.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/TwpsynSinsir"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/calum-wicks-468517218/"
              target="_blank"
              rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Calum Wicks</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/TwpsynSinsir"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/calum-wicks-468517218/"
              target="_blank"
              rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
