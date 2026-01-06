import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './blogDetail page.css';
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
    date: "March 15, 2023",
    author: "Sarah Johnson",
    category: "Design",
    title: "Modern Web Design Trends",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2023.",
    overview: "Discover the latest web design trends that are shaping the digital landscape in 2023.",
    description: "The web design landscape is constantly evolving, with new trends emerging each year that redefine how we interact with digital content. In 2023, we're seeing significant shifts toward more immersive, accessible, and user-focused designs.",
    relatedIds: ['2', '3'],
    body: `<p>The web design landscape is constantly evolving, with new trends emerging each year that redefine how we interact with digital content. In 2023, we're seeing significant shifts toward more immersive, accessible, and user-focused designs.</p>

<h3>1. Dark Mode & Color Schemes</h3>
<p>Dark mode has transitioned from a nice-to-have feature to a standard expectation. Not only does it reduce eye strain, but it also saves battery life on OLED displays. Designers are now creating sophisticated color systems that adapt seamlessly between light and dark modes, ensuring brand consistency across both experiences.</p>

<h3>2. Glassmorphism & Neumorphism</h3>
<p>Glassmorphism, characterized by frosted-glass effects with background blur, continues to dominate UI design. This style creates depth and hierarchy while maintaining a modern, clean aesthetic. Neumorphism, with its soft shadows and semi-flat design approach, is being used more selectively to highlight interactive elements.</p>

<h3>3. Micro-Interactions & Motion Design</h3>
<p>Small, purposeful animations that respond to user actions are becoming increasingly sophisticated. These micro-interactions provide immediate feedback, guide users through the interface, and add personality to digital products. Well-executed motion design creates emotional connections and makes interfaces feel more intuitive and alive.</p>

<h3>4. Accessibility-First Design</h3>
<p>Inclusive design is no longer an afterthought but a foundational principle. Designers are prioritizing features like proper contrast ratios, keyboard navigation, screen reader compatibility, and reduced motion options from the beginning of projects, ensuring digital experiences are accessible to all users.</p>

<div className="article-quote">
    <blockquote>
        <p>"The best designs are not just visually appealing but genuinely inclusive, ensuring everyone can access and enjoy your digital experience regardless of their abilities."</p>
    </blockquote>
</div>

<h3>5. Sustainable Web Design</h3>
<p>Environmental consciousness has reached web development. Designers are now considering the carbon footprint of their digital products, optimizing file sizes, reducing unnecessary animations, and streamlining code to create more energy-efficient websites that load faster and consume less power.</p>`,
    tags: ["Web Design", "UI/UX", "Trends", "2023"]
  },
  {
    id: 2,
    imgSrc: blog02,
    alt: "SEO Best Practices",
    date: "February 28, 2023",
    author: "Michael Chen",
    category: "SEO",
    title: "SEO Best Practices",
    excerpt: "Learn how to optimize your website for search engines and drive organic traffic.",
    overview: "Learn how to optimize your website for search engines and drive organic traffic.",
    description: "Search Engine Optimization (SEO) continues to be a critical component of any successful digital strategy. However, with search algorithms constantly evolving, staying current with best practices is essential for maintaining and improving your site's visibility.",
    relatedIds: ['1', '4'],
    body: `<p>Search Engine Optimization (SEO) continues to be a critical component of any successful digital strategy. However, with search algorithms constantly evolving, staying current with best practices is essential for maintaining and improving your site's visibility.</p>

<h3>1. Core Web Vitals & Page Experience</h3>
<p>Google's Core Web Vitals have become key ranking factors, focusing on loading performance, interactivity, and visual stability. Optimizing these metrics not only improves your search rankings but also enhances user experience, reducing bounce rates and increasing engagement.</p>

<h3>2. Semantic HTML & Content Structure</h3>
<p>Using proper semantic HTML elements (headers, section, article, nav, etc.) helps search engines understand your content's structure and purpose. This practice, combined with a logical heading hierarchy (H1, H2, H3), creates a more accessible site that search engines can crawl and index more effectively.</p>

<h3>3. Mobile-First Indexing</h3>
<p>Google now predominantly uses the mobile version of a site for indexing and ranking. Ensuring your site is fully responsive, loads quickly on mobile devices, and provides an excellent mobile user experience is no longer optional—it's essential for SEO success.</p>

<div className="article-quote">
    <blockquote>
        <p>"The most effective SEO strategies focus on creating exceptional user experiences first, with technical optimizations supporting that primary goal."</p>
    </blockquote>
</div>

<h3>4. E-A-T (Expertise, Authoritativeness, Trustworthiness)</h3>
<p>Google continues to emphasize E-A-T as a way to assess content quality, particularly for YMYL (Your Money or Your Life) topics. Building author credentials, citing reliable sources, and maintaining a transparent, trustworthy site are increasingly important for ranking well.</p>

<h3>5. Sustainable Link Building</h3>
<p>Quality backlinks remain crucial, but the focus has shifted toward earning links naturally through valuable content. Creating comprehensive resources, original research, and thought leadership pieces can attract high-quality links without resorting to outdated link-building tactics that may trigger penalties.</p>`,
    tags: ["SEO", "Digital Marketing", "Google", "Web Development"]
  },
  {
    id: 3,
    imgSrc: blog03,
    alt: "The Power of UI/UX",
    date: "January 10, 2023",
    author: "Emily Rodriguez",
    category: "UI/UX",
    title: "The Power of UI/UX",
    excerpt: "Understand how user experience design can transform your digital products and services.",
    overview: "Understand how user experience design can transform your digital products and services.",
    description: "User experience (UX) and user interface (UI) design have become critical differentiators in today's competitive digital landscape. Companies that invest in thoughtful, research-driven design consistently outperform those that treat design as an afterthought.",
    relatedIds: ['1', '4'],
    body: `<p>User experience (UX) and user interface (UI) design have become critical differentiators in today's competitive digital landscape. Companies that invest in thoughtful, research-driven design consistently outperform those that treat design as an afterthought.</p>

<h3>1. The Business Value of Good Design</h3>
<p>Research consistently shows that well-designed products yield tangible business results. Companies with strong design practices have seen up to 32% higher revenue growth and 56% higher shareholder returns compared to their industry peers, according to McKinsey's Design Index.</p>

<h3>2. User-Centered Design Process</h3>
<p>Successful digital products are built around user needs and behaviors, not business assumptions. Implementing a user-centered design process—involving research, persona development, journey mapping, and continuous testing—leads to products that solve real problems and create genuine value.</p>

<div className="article-quote">
    <blockquote>
        <p>"User experience design is not about making things look pretty—it's about making them work beautifully for the people who use them."</p>
    </blockquote>
</div>

<h3>3. Emotional Design</h3>
<p>The most memorable digital experiences connect on an emotional level. By considering how users feel when interacting with your product, you can create experiences that evoke positive emotions, build trust, and foster loyalty. This emotional layer transforms utilitarian interactions into meaningful relationships.</p>

<h3>4. Accessibility as Innovation</h3>
<p>Designing for accessibility often leads to innovations that benefit all users. Features originally created for people with disabilities—like voice interfaces, keyboard shortcuts, and high-contrast modes—have become mainstream conveniences that improve everyone's experience.</p>

<h3>5. Measuring UX Success</h3>
<p>Effective UX design requires clear metrics and continuous measurement. Beyond satisfaction scores, companies should track task completion rates, error rates, time-on-task, conversion rates, and retention metrics to quantify the impact of design improvements and identify opportunities for optimization.</p>`,
    tags: ["UI/UX", "Design", "User Research", "Product Development"]
  },
  {
    id: 4,
    imgSrc: blog04,
    alt: "React vs Angular",
    date: "December 12, 2022",
    author: "David Wilson",
    category: "Development",
    title: "React vs Angular",
    excerpt: "A comprehensive comparison of two popular JavaScript frameworks for web development.",
    overview: "A comprehensive comparison of two popular JavaScript frameworks for web development.",
    description: "React and Angular remain two of the most influential frontend technologies, each with distinct philosophies and approaches to building web applications. Understanding their strengths, limitations, and ideal use cases can help teams make more informed technology decisions.",
    relatedIds: ['2', '6'],
    body: `<p>React and Angular remain two of the most influential frontend technologies, each with distinct philosophies and approaches to building web applications. Understanding their strengths, limitations, and ideal use cases can help teams make more informed technology decisions.</p>

<h3>1. Architecture & Philosophy</h3>
<p>Angular provides a complete framework with strong opinions about application architecture, enforcing structure and consistency across projects. React, as a library, offers more flexibility but requires developers to make more decisions about project structure and complementary libraries.</p>

<h3>2. Learning Curve & Developer Experience</h3>
<p>React's component-based model and JavaScript-centric approach (JSX) are typically easier for newcomers to grasp, especially those already familiar with JavaScript. Angular's comprehensive feature set, TypeScript requirement, and unique syntax constructs create a steeper learning curve but offer a more integrated development experience once mastered.</p>

<div className="article-quote">
    <blockquote>
        <p>"The best framework is the one that aligns with your team's skills, your project's requirements, and your organization's long-term technology strategy."</p>
    </blockquote>
</div>

<h3>3. Performance Considerations</h3>
<p>React's virtual DOM approach excels at efficiently updating the UI, making it particularly well-suited for applications with frequent state changes. Angular's change detection system has improved significantly, but React still maintains an edge in rendering performance for highly dynamic interfaces.</p>

<h3>4. Enterprise Readiness</h3>
<p>Angular's comprehensive framework approach, with built-in solutions for common challenges like state management, HTTP communication, and form handling, makes it a strong choice for enterprise applications. Its strict typing and architecture promote maintainability in larger teams with varying expertise levels.</p>

<h3>5. Community & Ecosystem</h3>
<p>React boasts a larger community and more flexible ecosystem, with numerous libraries available for every conceivable need. Angular's ecosystem is more structured and curated, with official libraries that ensure compatibility and consistency but may offer fewer options for specialized requirements.</p>`,
    tags: ["JavaScript", "React", "Angular", "Frameworks"]
  },
  {
    id: 5,
    imgSrc: blog05,
    alt: "Progressive Web Apps",
    date: "July 31, 2025",
    author: "Fazian Shahzad",
    category: "Technology",
    title: "Why Progressive Web Apps Are the Future",
    excerpt: "Discover how PWAs combine the best of web and mobile apps for a seamless user experience.",
    overview: "Discover how PWAs combine the best of web and mobile apps for a seamless user experience.",
    description: "Progressive Web Apps (PWAs) are revolutionizing the way users interact with websites. By leveraging modern web capabilities, PWAs deliver app-like experiences directly in the browser, including offline access, push notifications, and fast load times.",
    relatedIds: ['4', '6'],
    body: `<p>Progressive Web Apps (PWAs) are revolutionizing the way users interact with websites. By leveraging modern web capabilities, PWAs deliver app-like experiences directly in the browser, including offline access, push notifications, and fast load times.</p>
<h3>1. Offline Functionality</h3>
<p>PWAs use service workers to cache resources, allowing users to access content even without an internet connection. This is a game-changer for reliability and user retention.</p>
<h3>2. App-Like Experience</h3>
<p>PWAs can be installed on devices and launched from the home screen, just like native apps. They offer smooth navigation, responsive layouts, and immersive interactions.</p>
<h3>3. Improved Performance</h3>
<p>With efficient caching and background sync, PWAs load quickly and respond instantly to user actions, reducing bounce rates and increasing engagement.</p>
<div className="article-quote">
    <blockquote>
        <p>"PWAs bridge the gap between web and mobile, offering the best of both worlds for businesses and users."</p>
    </blockquote>
</div>
<h3>4. Easy Updates</h3>
<p>Unlike native apps, PWAs update automatically in the background, ensuring users always have the latest features and security patches.</p>`,
    tags: ["PWA", "Web Apps", "Mobile", "Technology"]
  },
  {
    id: 6,
    imgSrc: blog06,
    alt: "AI in Web Development",
    date: "July 31, 2025",
    author: "Fazian Shahzad",
    category: "AI",
    title: "How AI Is Transforming Web Development",
    excerpt: "Explore the impact of artificial intelligence on modern web design and development workflows.",
    overview: "Explore the impact of artificial intelligence on modern web design and development workflows.",
    description: "Artificial Intelligence (AI) is rapidly changing the landscape of web development. From automating repetitive tasks to enhancing user experiences, AI-powered tools are making websites smarter and more efficient.",
    relatedIds: ['4', '5'],
    body: `<p>Artificial Intelligence (AI) is rapidly changing the landscape of web development. From automating repetitive tasks to enhancing user experiences, AI-powered tools are making websites smarter and more efficient.</p>
<h3>1. Automated Design & Code Generation</h3>
<p>AI tools can generate layouts, write code snippets, and even suggest design improvements, speeding up the development process and reducing human error.</p>
<h3>2. Personalized User Experiences</h3>
<p>Machine learning algorithms analyze user behavior to deliver personalized content, recommendations, and interfaces, increasing engagement and satisfaction.</p>
<h3>3. Enhanced Accessibility</h3>
<p>AI-driven accessibility tools automatically detect and fix issues, ensuring websites are usable by everyone, including people with disabilities.</p>
<div className="article-quote">
    <blockquote>
        <p>"AI empowers developers to build smarter, faster, and more inclusive web experiences."</p>
    </blockquote>
</div>
<h3>4. Intelligent Chatbots</h3>
<p>AI-powered chatbots provide instant support and guidance to users, improving customer service and freeing up human resources for complex tasks.</p>`,
    tags: ["AI", "Web Development", "Machine Learning", "Innovation"]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));
  const relatedBlogs = blogsData.filter(b => blog.relatedIds.includes(b.id.toString()));

  return (
    <main className="project-detail-main">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> /
          <Link to="/blog">Blog</Link> /
          <span>{blog.title}</span>
        </div>
      </div>

      <article id="1st-blog" className="blog-article fadeIn">
        <div className="article-image">
          <img src={blog.imgSrc} alt={blog.alt} />
        </div>
        <div className="article-content">
          <div className="article-meta">
            <span className="date"><i className="far fa-calendar-alt"></i> {blog.date}</span>
            <span className="author"><i className="far fa-user"></i> {blog.author}</span>
            <span className="category"><i className="far fa-folder"></i> {blog.category}</span>
          </div>
          <h2>{blog.title}</h2>
          <p className="article-excerpt">{blog.excerpt}</p>

          <div className="article-body" dangerouslySetInnerHTML={{ __html: blog.body }}></div>

          <div className="share-buttons">
            <span>Share:</span>
            <button className="share-button" aria-label="Share on Facebook"><i
              className="fab fa-facebook-f"></i></button>
            <button className="share-button" aria-label="Share on Twitter"><i
              className="fab fa-twitter"></i></button>
            <button className="share-button" aria-label="Share on LinkedIn"><i
              className="fab fa-linkedin-in"></i></button>
            <button className="share-button" aria-label="Copy Link"><i
              className="fab fa-pinterest"></i></button>
          </div>
          </div>
      </article>

      <div className="related-projects-section">
        <div className="container">
          <h2>Related Blogs</h2>
          <p className="section-intro">Explore more articles in {blog.category}</p>
          <div className="related-projects">
            {relatedBlogs.map((relBlog) => (
              <div key={relBlog.id} className="related-project-card">
                <div className="related-project-image">
                  <img src={relBlog.imgSrc} alt={relBlog.title} />
                </div>
                <div className="related-project-content">
                  <h3>{relBlog.title}</h3>
                  <p>{relBlog.excerpt}</p>
                  <Link to={`/blogDetail/${relBlog.id}`} className="btn-view-project">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
