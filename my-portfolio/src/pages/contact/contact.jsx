import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <main>
      <section class="o-hero">
        <div class="o-hero-content text-center">
          <h1>Get in <span class="highlight">Touch</span></h1>
          <p>We're here to help you build your digital presence. Let's start a conversation about your project.
          </p>
        </div>
        <div class="o-hero-animation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section class="contact-details">
        <div class="container">
          <div class="contact-details_inner">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-info-card">
                  <div class="row mb-4">
                    <div class="col-lg-6 col-md-6">
                      <div class="contact-method">
                        <div class="icon-container">
                          <i class="bi bi-geo-alt-fill"></i>
                        </div>
                        <h3>Our Location</h3>
                        <p>123 Web Street<br />Digital City, 10001</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="contact-method">
                        <div class="icon-container">
                          <i class="bi bi-phone"></i>
                        </div>
                        <h3>Phone Number</h3>
                        <p>+1 (123) 456-7890<br />+1 (098) 765-4321</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="contact-method">
                        <div class="icon-container">
                          <i class="bi bi-envelope"></i>
                        </div>
                        <h3>Email Address</h3>
                        <p>info@yourwebsite.com<br />support@yourwebsite.com</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="contact-method">
                        <div class="icon-container">
                          <i class="bi bi-clock"></i>
                        </div>
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 9am - 5pm<br />Weekend: 10am - 2pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-form-container">
                  <div class="heading">
                    <h2 class="sec-h2">Send Us a Message</h2>
                  </div>
                  <form class="contact_form" id="contactForm">
                    <div class="row">
                      <div className="col col-lg-6 col-md-6">
                        <div class="form-group">
                          <label for="name">Your Name</label>
                          <input type="text" id="name" name="name" placeholder="Enter your name"
                            required />
                        </div>
                      </div>
                      <div className="col col-lg-6 col-md-6">
                        <div class="form-group">
                          <label for="email">Your Email</label>
                          <input type="email" id="email" name="email" placeholder="Enter your email"
                            required />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="subject">Subject</label>
                      <input type="text" id="subject" name="subject"
                        placeholder="What is this regarding?" required />
                    </div>
                    <div class="form-group">
                      <label for="message">Your Message</label>
                      <textarea id="message" name="message" rows="6"
                        placeholder="Tell us about your project..." required></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Send Message <i
                      class="bi bi-paper-plane"></i></button>
                  </form>
                  <div id="formSuccess" class="form-success">
                    <i class="bi bi-check-circle"></i>
                    <p>Thank you! Your message has been sent successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="heading d-flex justify-content-center align-items-center flex-column">
          <h2 class="sec-h2">Find Us</h2>
        </div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.0497633608556!2d73.0124479766476!3d33.474055148037195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8df1eb448567%3A0xba41c1632d0f154c!2sAdyala%20Rd%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1742709444083!5m2!1sen!2sus"
            title="Embedded Google Map showing our location"
            width="100%" height="100%" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
  )
}

export default contact
