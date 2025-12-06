import React from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./blog.css";

const blogData = [
  {
    id: 1,
    imgSrc: require('../../Images/blog_01.png'),
    alt: "Modern Web Design Trends",
    title: "Modern Web Design Trends",
    description: "Discover the latest web design trends that are shaping the digital landscape in 2023.",
    link: "/blogDetail/1"
  },
  {
    id: 2,
    imgSrc: require('../../Images/blog_02.webp'),
    alt: "SEO Best Practices",
    title: "SEO Best Practices",
    description: "Learn how to optimize your website for search engines and drive organic traffic.",
    link: "/blogDetail/2"
  },
  {
    id: 3,
    imgSrc: require('../../Images/blog_03.jpg'),
    alt: "The Power of UI/UX",
    title: "The Power of UI/UX",
    description: "Understand how user experience design can transform your digital products and services.",
    link: "/blogDetail/3"
  },
  {
    id: 4,
    imgSrc: require('../../Images/blog_04.jpg'),
    alt: "React vs Angular",
    title: "React vs Angular",
    description: "A comprehensive comparison of two popular JavaScript frameworks for web development.",
    link: "/blogDetail/4"
  },
  {
    id: 5,
    imgSrc: require('../../Images/blog_05.jpg'),
    alt: "Progressive Web Apps",
    title: "Why Progressive Web Apps Are the Future",
    description: "Discover how PWAs combine the best of web and mobile apps for a seamless user experience.",
    link: "/blogDetail/5"
  },
  {
    id: 6,
    imgSrc: require('../../Images/blog_06.avif'),
    alt: "AI in Web Development",
    title: "How AI Is Transforming Web Development",
    description: "Explore the impact of artificial intelligence on modern web design and development workflows.",
    link: "/blogDetail/6"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog-inner">
          <div className="heading text-center">
            <h2 className="sec-h2">Our Blogs</h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="blog-swiper"
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
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="portfolio-item">
                <figure className='blog-figure'>
                  <img src={blog.imgSrc} alt={blog.alt} />
                </figure>
                <figcaption className='blog-caption'>
                  <h2 className='portfolio-title'>{blog.title}</h2>
                  <p className='portfolio-desc'>{blog.description}</p>
                  <Link className='btn-primary' to={blog.link}>Read More</Link>
                </figcaption>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='view-all-projects'>
          <Link to="/blog" className='btn-primary'>View More</Link>
        </div>
      </div>
    </div>
    </section >
  );
};

export default Blog;
