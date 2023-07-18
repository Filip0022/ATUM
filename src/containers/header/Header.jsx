import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './header.css';
import { sliderData } from './header-data.js';

const Header = () => {
    const [currentSlide, setCurrentSlice] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
    
    const nextSlide = () => {
      setCurrentSlice(currentSlide === slideLength -1 ? 0 :
        currentSlide + 1);
    };

    const prevSlide = () => {
      setCurrentSlice( currentSlide === 0 ? slideLength - 1 :
        currentSlide - 1);
    };

    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
      setCurrentSlice(0)
    }, []);

    useEffect(() => {
      if (autoScroll) {
        auto()
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);

  return (
    <div className="atum__slider">
      <AiOutlineArrowLeft className="atum__arrow-prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="atum__arrow-next" onClick={nextSlide}/>

      {sliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide current" : "slide"} key={index}> 
            {index === currentSlide && (
              <>
              <img src={slide.image} alt="slide" />
              <div className="content">
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <hr />
              </div>
              </>
            )}
          </div>
        )
      })}
    </div>
    
  )
}

export default Header