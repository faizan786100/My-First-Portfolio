import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './hero.css'

const Hero = () => {
    useEffect(() => {
        // Hero animation
        const heroAnimation = document.querySelector('.hero-anim');
        if (heroAnimation) {
            for (let i = 0; i < 10; i++) {
                const span = document.createElement('span');
                span.style.width = `${Math.random() * 30 + 10}px`;
                span.style.height = span.style.width;
                span.style.left = `${Math.random() * 100}%`;
                span.style.animationDelay = `${Math.random() * 5}s`;
                span.style.animationDuration = `${Math.random() * 10 + 15}s`;
                span.style.opacity = Math.random();
                heroAnimation.appendChild(span);
            }
        }
    }, []);

    return (
        <>
            {/* <!--=============== hero section animation ===============--> */}

            <div id="home" className="home">
                <div className="hero-anim">
                </div>
            </div>

            <section className="hero">
                <div className="container">
                    <div className="hero_inner">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <figcaption className="fadeIn">
                                    <h1 className="main_img-heading">
                                        Get the best <br />
                                        <span className="highlight">Web Development</span> <br />
                                        Services
                                    </h1>
                                    <p className="main_img-desc">
                                        Transform your ideas into reality with our top-notch web development services.
                                        We create modern, responsive, and user-friendly websites to elevate your online presence.
                                    </p>
                                    <div className="cta-buttons mt-3">
                                        <Link to="./contact" className="btn-primary pulse">Get Started</Link>
                                        <Link to="/projects" className="btn-secondary ms-3">View Projects</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col-lg-6">
                                <figure className="slideIn">
                                    <img src={require("../../Images/Main_page_image.webp")} alt="Web Development" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
