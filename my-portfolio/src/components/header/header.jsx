import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {

  useEffect(() => {
    const menuIcon = document.querySelector('.menuBox-icon');
    const menuBox = document.querySelector('.menuBox');
    const navbar = document.getElementById('navbar');

    if (menuIcon && !menuIcon.querySelector('span')) {
      const span = document.createElement('span');
      menuIcon.appendChild(span);
    }

    const handleClick = () => {
      if (!menuBox || !menuIcon) return;

      menuBox.classList.toggle('active');
      menuIcon.classList.toggle('active');

    };

    if (menuIcon) {
      menuIcon.addEventListener('click', handleClick);
    }

    // Back to Top Button and Navbar Scroll Handling
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 300) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });

    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <header>
        <nav id="navbar" className="d-flex justify-content-between align-items-center position-fixed w-100">
            <figure className="logo">
                <Link to="/">
                    <img src={require("../../Images/logo.png")} alt="Logo"/>
                </Link>
            </figure>
            <ul className="menu-des m-0 p-0">
                <li>
                    <Link to="/" className="menu-items"><i className="bi bi-house"></i> Home</Link>
                </li>
                <li>
                    <Link to="/projects" className="menu-items"><i className="bi bi-folder"></i> Projects</Link>
                </li>
                <li>
                    <a href="#services" className="menu-items"><i className="bi bi-tools"></i> Services</a>
                </li>
                <li>
                    <a href="#skills" className="menu-items"><i className="bi bi-star"></i> Skills</a>
                </li>
                <li>
                    <Link to="/blog" className="menu-items"><i className="bi bi-journal"></i> Blog</Link>
                </li>
                <li>
                    <a href="#about" className="menu-items"><i className="bi bi-info-circle"></i> About us</a>
                </li>
                <li>
                    <Link to="/contact" className="menu-items"><i className="bi bi-envelope"></i> Contact us</Link>
                </li>
            </ul>
            <i className="menuBox-icon"></i>
            <ul className="menuBox">
                <li>
                    <a href="#home" className="menu-items"><i className="bi bi-house"></i> Home</a>
                </li>
                <li>
                    <a href="#projects" className="menu-items"><i className="bi bi-folder"></i> Projects</a>
                </li>
                <li>
                    <a href="#services" className="menu-items"><i className="bi bi-tools"></i> Services</a>
                </li>
                <li>
                    <a href="#skills" className="menu-items"><i className="bi bi-star"></i> Skills</a>
                </li>
                <li>
                    <a href="#testimonials" className="menu-items"><i className="bi bi-chat-quote"></i> Testimonials</a>
                </li>
                <li>
                    <a href="#blog" className="menu-items"><i className="bi bi-journal"></i> Blog</a>
                </li>
                <li>
                    <a href="#about" className="menu-items"><i className="bi bi-info-circle"></i> About us</a>
                </li>
                <li>
                    <a href="#contact" className="menu-items"><i className="bi bi-envelope"></i> Contact us</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
