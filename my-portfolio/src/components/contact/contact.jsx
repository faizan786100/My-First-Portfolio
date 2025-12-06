import React from 'react'
import "./contact.css"

const contact = () => {
  return (
    <section id="contact" className="contact">
            <div className="container">
                <div className="contact_inner">
                    <div className="heading text-center">
                        <h2 className="sec-h2">Contact Us</h2>
                    </div>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p>Awan Street, Adyala Road, Rawalpindi</p>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-phone"></i>
                                <p>+92 335 1564708</p>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-envelope"></i>
                                <p>frontenddevloper38@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required/>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default contact
