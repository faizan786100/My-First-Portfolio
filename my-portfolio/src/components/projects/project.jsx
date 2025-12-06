import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./project.css";


const projectsData = [
  {
    id: 1,
    imgSrc: require("../../Images/first_project-imgs/main_img.png"),
    alt: "Project 1",
    title: "E-Commerce Website",
    description: "Custom online store with payment integration",
    link: "/projectDetail/1"
  },
  {
    id: 2,
    imgSrc: require("../../Images/second_project-imgs/main_img.jpg"),
    alt: "Project 2",
    title: "Corporate Website",
    description: "Modern website for a Fortune 500 company with custom CMS",
    link: "/projectDetail/2"
  },
  {
    id: 3,
    imgSrc: require("../../Images/third_project-imgs/main_img.webp"),
    alt: "Project 3",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile application for fitness tracking",
    link: "/projectDetail/3"
  },
  {
    id: 4,
    imgSrc: require("../../Images/fourth_project-imgs/main_img.png"),
    alt: "Project 4",
    title: "SaaS Dashboard",
    description: "Interactive dashboard with real-time data visualization",
    link: "/projectDetail/4"
  },
  {
    id: 5,
    imgSrc: require("../../Images/fifth_project-imgs/main_img.jpg"),
    alt: "Project 5",
    title: "Educational Platform",
    description: "Online learning platform with interactive course materials",
    link: "/projectDetail/5"
  },
  {
    id: 6,
    imgSrc: require("../../Images/sixth_project-imgs/main_img.webp"),
    alt: "Project 6",
    title: "Restaurant Website",
    description: "Elegant website with online reservation system",
    link: "/projectDetail/6"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects_inner">
          <div className="heading d-flex justify-content-center align-items-center flex-column">
            <h2 className="sec-h2">Our Projects</h2>
            <p className="section-subheading">Explore our latest work and creative solutions</p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="projects-swiper"
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="portfolio-item">
                  <figure>
                    <img src={project.imgSrc} alt={project.alt} />
                  </figure>
                  <figcaption className="portfolio-overlay">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-desc">{project.description}</p>
                    <Link to={project.link} className="btn-primary">View Project</Link>
                  </figcaption>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="view-all-projects">
            <Link to="/projects" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
