import React from 'react'
import "./testimonials.css"

const testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="heading text-center">
          <h2 className="sec-h2">Client Testimonials</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-card">
              <figure>
                <img src={require("../../Images/client_01.png")} alt="Client 1" className="testimonial-image" />
              </figure>
              <figcaption>
                <p className="testimonial-text">"Working with this team was an absolute pleasure. They
                  delivered our project on time and exceeded our expectations with their attention to
                  detail."</p>
                <p className="testimonial-author">- Sarah Johnson, CEO at TechStart</p>
              </figcaption>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-card">
              <figure>
                <img src={require("../../Images/client_02.png")} alt="Client 2" className="testimonial-image" />
              </figure>
              <figcaption>
                <p className="testimonial-text">"The website they built for our restaurant has significantly
                  increased our online reservations. The design is elegant and user-friendly."</p>
                <p className="testimonial-author">- Michael Chen, Owner of Fusion Kitchen</p>
              </figcaption>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-card">
              <figure>
                <img src={require("../../Images/client_03.png")} alt="Client 3" className="testimonial-image" />
              </figure>
              <figcaption>
                <p className="testimonial-text">"Their expertise in e-commerce development helped us launch
                  our online store seamlessly. Sales have increased by 200% since the launch."</p>
                <p className="testimonial-author">- Emily Rodriguez, Founder of EcoStyle</p>
              </figcaption>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="testimonial-card">
              <figure>
                <img src={require("../../Images/client_04.png")} alt="Client 4" className="testimonial-image" />
              </figure>
              <figcaption>
                <p className="testimonial-text">"Responsive, professional, and talented. They understood our
                  vision perfectly and brought it to life beautifully."</p>
                <p className="testimonial-author">- David Wilson, Marketing Director</p>
              </figcaption>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default testimonials
