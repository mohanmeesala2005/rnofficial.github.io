import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './carousel.css';

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
          ></button>
        ))}
      </span>
    </div>
  );
};
export default carousel

