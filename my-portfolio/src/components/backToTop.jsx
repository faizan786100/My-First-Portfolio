import React, { useEffect } from 'react'

const BackToTop = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop');

    // Back to Top Button
    window.addEventListener('scroll', () => {
      if (!backToTopButton) return;

      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    if (backToTopButton) {
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    return () => {
      if (backToTopButton) {
        backToTopButton.removeEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    };
  }, []);

  return (
    <div className="back-to-top" id="backToTop">
      <i className="bi bi-arrow-up"></i>
    </div>
  )
}

export default BackToTop
