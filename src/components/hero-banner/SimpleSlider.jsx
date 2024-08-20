"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import hero slider data
import { hero_slider_data } from "@/data/hero-slider-data";

const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const pathname = usePathname();
  const activeLocale = pathname.split('/')[1] || "en";

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setPrevSlide(currentSlide);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % hero_slider_data.length);
        setTransitioning(false);
      }, 500); // This should match the transition duration
    }, 6000); // Change slide every 7 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const style = {
    backgroundImage: 'url("https://res.cloudinary.com/dsiku9ipv/image/upload/v1723788240/bg-1_zufdyt.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const getTransitionStyle = (index) => ({
    opacity: transitioning ? 0 : (index === currentSlide ? 1 : 0),
    transform: `translateX(${index === currentSlide ? '0' : (index === prevSlide ? '-100px' : '100px')})`,
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: index === currentSlide ? 2 : 1,
    pointerEvents: index === currentSlide ? 'auto' : 'none',
  });

  return (
    <section className="slider-area" style={style}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xxl-1 col-lg-1 col-md-6 col-12 col-sm-6"></div>
          <div className="col-xxl-5 col-lg-5 col-md-6 col-12 col-sm-6">
            <div className="slider-content pt-20 text-center" style={{ position: 'relative', height: '300px', zIndex: 200, overflow: 'hidden' }}>
              {hero_slider_data.map((item, index) => (
                <div key={item.id} style={getTransitionStyle(index)}>
                  <span className="slider-subtitle mb-20" style={{ color: item.color || 'inherit', display: 'block' }}>
                    {item.subtitle[activeLocale]}
                  </span>
                  <h1
                    className="slider-title ibx-font" style={{fontSize:"26px"}}
                    dangerouslySetInnerHTML={{ __html: item.title[activeLocale] }}
                  ></h1>
                  {item.sm_desc && (
                    <p>{item.sm_desc[activeLocale]}</p>
                  )}
                  <div className="slider-btn">
                    <Link href={activeLocale === 'ar' ? item.link.ar : item.link.en} className="tp-btn">
                      {activeLocale === 'ar' ? "التفاصيل" : "VIEW"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xxl-6 col-lg-5 col-md-6 col-12 col-sm-6">
            <div className="slider-thumb p-relative pt-15" style={{ position: 'relative', height: '500px', zIndex: 100, overflow: 'hidden' }}>
              {hero_slider_data.map((item, index) => (
                <div key={item.id} style={getTransitionStyle(index)}>
                  <Image
                    className="slider-thumb-img"
                    src={item.bg_img}
                    width={1000}
                    height={715}
                    alt="slider-bg"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;