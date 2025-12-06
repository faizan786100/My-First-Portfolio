import React from 'react'
import "./skill.css"

const skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="heading text-center">
          <h2 className="sec-h2">Skills & Expertise</h2>
        </div>
        <div className="skills-chart">
          <div className="skill-item">
            <h3>HTML5</h3>
            <div className="skill-progress">
              <div className="skill-level html"></div>
            </div>
            <p>95%</p>
          </div>
          <div className="skill-item">
            <h3>CSS3</h3>
            <div className="skill-progress">
              <div className="skill-level css"></div>
            </div>
            <p>90%</p>
          </div>
          <div className="skill-item">
            <h3>JavaScript</h3>
            <div className="skill-progress">
              <div className="skill-level js"></div>
            </div>
            <p>85%</p>
          </div>
          <div className="skill-item">
            <h3>React</h3>
            <div className="skill-progress">
              <div className="skill-level react"></div>
            </div>
            <p>80%</p>
          </div>
          <div className="skill-item">
            <h3>Node.js</h3>
            <div className="skill-progress">
              <div className="skill-level node-js"></div>
            </div>
            <p>75%</p>
          </div>
          <div className="skill-item">
            <h3>UI/UX Design</h3>
            <div className="skill-progress">
              <div className="skill-level ui-ux"></div>
            </div>
            <p>85%</p>
          </div>
        </div>

        <div className="tech-stack">
          <div className="heading text-center">
            <h2 className="sec-h2">Our Tech Stack</h2>
          </div>
          <div className="language-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <img src={require("../../Images/html_logo.png")} alt="HTML" />
                  <h2>HTML</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <img src={require("../../Images/css_logo.png")} alt="CSS" />
                  <h2>CSS</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <img src={require("../../Images/js_logo.png")} alt="JavaScript" />
                  <h2>JavaScript</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <img src={require("../../Images/react_logo.png")} alt="React" />
                  <h2>React JS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills
