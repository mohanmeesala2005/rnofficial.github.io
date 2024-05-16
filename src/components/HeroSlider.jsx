import React, { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import styles from './HeroSlider.module.css'; // Import CSS module

const HeroSlider = () => {
  useEffect(() => {
    const options = {
      accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
    };

    const carousel = document.querySelector('[data-carousel]');
    const slides = Array.from(document.getElementsByClassName('carousel-cell'));
    const flkty = new Flickity(carousel, options);

    flkty.on('scroll', () => {
      flkty.slides.forEach((slide, i) => {
        const image = slides[i];
        const x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
      });
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  return (
    <div className={styles["hero-slider"]} data-carousel>
      <CarouselCell
        backgroundImage="https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg"
        subtitle="Slide 1"
        title="Flickity Parallax"
        link="https://flickity.metafizzy.co/"
      />
      <CarouselCell
        backgroundImage="https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg"
        subtitle="Slide 2"
        title="Flickity Parallax"
        link="https://flickity.metafizzy.co/"
      />
      <CarouselCell
        backgroundImage="https://68.media.tumblr.com/3beb13a4167aa8b5c4743eac17bf351c/tumblr_o8nyvtiHfC1slhhf0o1_1280.jpg"
        subtitle="Slide 3"
        title="Flickity Parallax"
        link="https://flickity.metafizzy.co/"
      />
    </div>
  );
};

const CarouselCell = ({ backgroundImage, subtitle, title, link }) => {
  return (
    <div className={styles["carousel-cell"]} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.inner}>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <h2 className={styles.title}>{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.btn}>Tell me more</a>
      </div>
    </div>
  );
};

export default HeroSlider;
