import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './HeroSlider.css';

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface HeroSliderProps {
  slides: SlideData[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleScrollDown = () => {
    // Scrolls smoothly to the next section (approx 500px down or to the grid section)
    window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="hero-slider">
      <div 
        className="slider-wrapper" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="btn-primary">Explore Products</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-btn prev-btn" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="slider-btn next-btn" onClick={nextSlide}>
        <FaChevronRight />
      </button>
      {/* New Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={handleScrollDown}>
        <FaChevronDown />
      </div>
      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;