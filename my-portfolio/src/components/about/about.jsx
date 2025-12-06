import React from 'react'
import "./about.css"
const about = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about_inner">
          <div className="heading text-center">
            <h2 className="sec-h2">About Us</h2>
          </div>
          <div className="about-container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-right">
                  <div className="accordion accordion-flush shadow-lg rounded-4 bg-dark border border-secondary"
                    id="accordionExample">
                    <div className="accordion-item bg-dark mb-3 border-0 rounded-3 text-light">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button fw-bold text-light bg-dark rounded-3 border-bottom border-secondary shadow-sm"
                          type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true"
                          aria-controls="collapseOne">
                          <i className="bi bi-people me-2"></i> Who We Are
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div
                          className="accordion-body text-light bg-dark border-top border-secondary rounded-bottom-3">
                          We are a team of passionate web developers and designers dedicated
                          to creating exceptional digital experiences. With years of
                          experience
                          in the industry, we understand what makes a website not just
                          functional, but also engaging and effective.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-dark mb-3 border-0 rounded-3 text-light">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed fw-bold text-light bg-dark rounded-3 border-bottom border-secondary shadow-sm"
                          type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false"
                          aria-controls="collapseTwo">
                          <i className="bi bi-code-slash me-2"></i> What We Do
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse"
                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div
                          className="accordion-body text-light bg-dark border-top border-secondary rounded-bottom-3">
                          We provide comprehensive web development services, from initial
                          concept and design to final deployment and maintenance. Our focus is
                          on
                          creating modern, responsive, and user-friendly websites that help
                          our clients
                          achieve their business goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-dark border-0 rounded-3 text-light">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed fw-bold text-light bg-dark rounded-3 border-bottom border-secondary shadow-sm"
                          type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false"
                          aria-controls="collapseThree">
                          <i className="bi bi-bullseye me-2"></i> Our Mission
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div
                          className="accordion-body text-light bg-dark border-top border-secondary rounded-bottom-3">
                          Our mission is to empower businesses and individuals with
                          high-quality web solutions that drive growth and success in the
                          digital world.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                <figure className="about-left mb-0">
                  <img src={require("../../Images/about-us_img.jpg")} alt="Our Team"
                    className="img-fluid rounded shadow" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
