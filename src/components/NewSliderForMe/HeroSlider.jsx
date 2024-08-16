"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import { hero_slider_data } from "@/data/hero-slider-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Slider settings
const sliderSettings = {
  slidesPerView: 1,
  effect: "fade",
  pagination: {
    clickable: true,
  },
  loop: true,
  loopAdditionalSlides: 2, // Ensures smooth looping
  autoplay: {
    delay: 10000, // Change slide every 10 seconds
    disableOnInteraction: false,
  },
};

const HeroSlider = () => {
  const pathname = usePathname();
  const activeLocale = pathname.split("/")[1] || "en"; // Default to "en" if no locale is found

  return (
    <section className="hero-slider-area">
      <Swiper {...sliderSettings} modules={[Pagination, EffectFade]}>
        {hero_slider_data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="hero-slider"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/dsiku9ipv/image/upload/v1723787514/bg-1_qahi3n.jpg")`,
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  {/* Text Content */}
                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="hero-slider-content">
                      <h1
                        className="tpslider__title"
                        dangerouslySetInnerHTML={{
                          __html: item.title[activeLocale],
                        }}
                      ></h1>
                      <span
                        className="tpslider__sub-title mb-15"
                        dangerouslySetInnerHTML={{
                          __html: item.subtitle[activeLocale],
                        }}
                      ></span>
                      <p
                        className="hero-slider-description"
                        dangerouslySetInnerHTML={{
                          __html: item.sm_desc[activeLocale],
                        }}
                      ></p>
                      <div className="tpslider__btn">
                        <a className="tp-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  {/* Image Content */}
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="hero-slider-image">
                      <Image
                        src={item.bg_img}
                        alt={item.title[activeLocale]}
                        width={600}
                        height={400}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
