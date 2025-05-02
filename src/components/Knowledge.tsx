import React from 'react'
import '../assets/styles/Knowledge.scss'
import '/node_modules/flag-icons/css/flag-icons.min.css'

function Knowledge() {
  return (
    <div className="container" id="knowledge">
      <div className="items-container">
        <h1>Knowledge</h1>
        <div className="item-grid">
          <div className="item">
            <h2>Full Stack Web Development</h2>
            <p>
              I have built functional web applications from scratch using modern
              technologies such as React and Rails. I am confident in both
              frontend and backend development, with much experience working as
              part of a team.
            </p>

            <div className="items-grid">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                alt="javascript logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
                alt="typescript logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                alt="react logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
                alt="rails logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="python logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="html5 logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="css3 logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="tailwind logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
                alt="sqlite logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql logo"
              />
            </div>
          </div>
          <div className="item">
            <h2>Tools of the Trade</h2>
            <p>
              To make the best use of my skills, I operate a wide range of tools
              and programmes. Testing, CI/CD pipelines, and deployment tools are
              vital parts of the process. I pride myself on seeing the job
              through to the end.
            </p>
            <div className="items-grid">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                alt="vscode logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="git logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="github logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg"
                alt="oauth logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
                alt="docker logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                alt="figma logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                alt="npm logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="node logo"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                alt="postman logo"
              />
            </div>
          </div>
          <div className="item">
            <h2>Tertiary Education</h2>
            <p>
              I am proud of my education and research background. Primarily
              focused on the East-Asian Region, I have a strong grasp of
              Japanese markets and work-culture.
            </p>

            <p>
              Certificate in Applied Software (NZQA Level 6), Dev Academy
              Aotearoa (2025)
            </p>

            <p>
              Postgraduate Diploma in Asian Studies, University of Auckland
              (2024)
            </p>

            <p>
              Graduate Diploma in Politics & International Relations, University
              of Auckland (2022)
            </p>

            <p>
              Bachelor of Arts in Japanese Studies, Oxford Brookes University
              (2018)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Knowledge
