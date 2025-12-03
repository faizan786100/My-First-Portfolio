import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "./project.css"
import img1 from "./../../Images/first_project-imgs/main_img.png"
import img2 from "./../../Images/second_project-imgs/main_img.jpg"
import img3 from "./../../Images/third_project-imgs/main_img.webp"
import img4 from "./../../Images/fourth_project-imgs/main_img.png"
import img5 from "./../../Images/fifth_project-imgs/main_img.jpg"
import img6 from "./../../Images/sixth_project-imgs/main_img.webp"

const slideData = [
  { id: 1, img: img1, title: 'E-Commerce Website', desc: 'Custom online store with payment integration' },
  { id: 2, img: img2, title: 'Corporate Website', desc: 'Modern website for a Fortune 500 company with custom CMS' },
  { id: 3, img: img3, title: 'Fitness Tracking App', desc: 'Cross-platform mobile application for fitness tracking' },
  { id: 4, img: img4, title: 'SaaS Dashboard', desc: 'Interactive dashboard with real-time data visualization' },
  { id: 5, img: img5, title: 'Educational Platform', desc: 'Online learning platform with interactive course materials' },
  { id: 6, img: img6, title: 'Restaurant Website', desc: 'Elegant website with online reservation system' }
]

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects_inner">
                    <div className="heading d-flex justify-content-center align-items-center flex-column">
                        <h2 className="sec-h2">Our Projects</h2>
                        <p className="section-subheading">Explore our latest work and creative solutions</p>
                    </div>

                    <div className="projects-swiper-wrapper">
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                          320: { slidesPerView: 1 },
                          640: { slidesPerView: 2 },
                          992: { slidesPerView: 3 }
                        }}
                      >
                        {slideData.map(slide => (
                          <SwiperSlide key={slide.id}>
                            <div className="portfolio-item slide-card">
                              <figure>
                                <img src={slide.img} alt={slide.title} />
                              </figure>
                              <figcaption className="portfolio-overlay">
                                <h3 className="portfolio-title">{slide.title}</h3>
                                <p className="portfolio-desc">{slide.desc}</p>
                                <Link to={`/project-detail/${slide.id}`} className="btn-primary">View Project</Link>
                              </figcaption>
                            </div>
                          </SwiperSlide>
                        ))}

                      </Swiper>

                      {/* centered CTA */}
                      <div className="view-all-projects">
                        <Link to="/our-projects" className="btn-primary">View All Projects</Link>
                      </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Projects
