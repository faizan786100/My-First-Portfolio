import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './blogPage.css'
import blog01 from "../../Images/blog_01.png"
import blog02 from "../../Images/blog_02.webp"
import blog03 from "../../Images/blog_03.jpg"
import blog04 from "../../Images/blog_04.jpg"
import blog05 from "../../Images/blog_05.jpg"
import blog06 from "../../Images/blog_06.avif"

const blogsData = [
    {
        id: 1,
        imgSrc: blog01,
        alt: "Modern Web Design Trends",
        category: "Design",
        title: "Modern Web Design Trends",
        excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2023.",
    },
    {
        id: 2,
        imgSrc: blog02,
        alt: "SEO Best Practices",
        category: "SEO",
        title: "SEO Best Practices",
        excerpt: "Learn how to optimize your website for search engines and drive organic traffic.",
    },
    {
        id: 3,
        imgSrc: blog03,
        alt: "The Power of UI/UX",
        category: "UI/UX",
        title: "The Power of UI/UX",
        excerpt: "Understand how user experience design can transform your digital products and services.",
    },
    {
        id: 4,
        imgSrc: blog04,
        alt: "React vs Angular",
        category: "Development",
        title: "React vs Angular",
        excerpt: "A comprehensive comparison of two popular JavaScript frameworks for web development.",
    },
    {
        id: 5,
        imgSrc: blog05,
        alt: "Progressive Web Apps",
        category: "Technology",
        title: "Why Progressive Web Apps Are the Future",
        excerpt: "Discover how PWAs combine the best of web and mobile apps for a seamless user experience.",
    },
    {
        id: 6,
        imgSrc: blog06,
        alt: "AI in Web Development",
        category: "AI",
        title: "How AI Is Transforming Web Development",
        excerpt: "Explore the impact of artificial intelligence on modern web design and development workflows.",
    }
]

const Blog = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')

    const [showToast, setShowToast] = React.useState(false);

    const filteredBlogs = activeFilter === 'all' ? blogsData : blogsData.filter(blog => blog.category === activeFilter);

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate subscription
        setFeedback('Thank you for subscribing!')
        setEmail('')
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }



    return (
        <main className="blog-main">
            <div className={`toast success ${showToast ? 'show' : ''}`}>
                <p>Subscription successful! Thank you for subscribing.</p>
            </div>
            <div className="o-hero">
                <div className="o-hero-content text-center">
                    <h1>Web Development <span className="highlight">Blog</span></h1>
                    <p>Insights, tutorials, and thought leadership on web development and design.</p>
                </div>
                <div className="o-hero-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="o-c-content section-padding">
                <div className="filter-container">
                    <h2>Filter Blogs</h2>
                    <div className="filter-options">
                        <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
                        <button className={`filter-btn ${activeFilter === 'Design' ? 'active' : ''}`} onClick={() => setActiveFilter('Design')}>Design</button>
                        <button className={`filter-btn ${activeFilter === 'SEO' ? 'active' : ''}`} onClick={() => setActiveFilter('SEO')}>SEO</button>
                        <button className={`filter-btn ${activeFilter === 'UI/UX' ? 'active' : ''}`} onClick={() => setActiveFilter('UI/UX')}>UI/UX</button>
                        <button className={`filter-btn ${activeFilter === 'Development' ? 'active' : ''}`} onClick={() => setActiveFilter('Development')}>Development</button>
                        <button className={`filter-btn ${activeFilter === 'Technology' ? 'active' : ''}`} onClick={() => setActiveFilter('Technology')}>Technology</button>
                        <button className={`filter-btn ${activeFilter === 'AI' ? 'active' : ''}`} onClick={() => setActiveFilter('AI')}>AI</button>
                    </div>
                </div>

                <div className="o-grid">
                    {filteredBlogs.map(blog => (
                        <div key={blog.id} className="o-card" data-category={blog.category}>
                            <div className="o-c-image">
                                <img src={blog.imgSrc} alt={blog.alt} />
                            </div>
                            <div className="o-c-content">
                                <h3>{blog.title}</h3>
                                <p>{blog.excerpt}</p>
                                <Link to={`/blogDetail/${blog.id}`} className="btn-primary">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="newsletter-section">
                <div className="newsletter-container">
                    <div className="newsletter-content">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Stay updated with our latest articles, tips, and industry insights directly in your inbox.</p>
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required />
                            <button type="submit" className="btn-primary">Subscribe</button>
                            <div className="newsletter-feedback">{feedback}</div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog
