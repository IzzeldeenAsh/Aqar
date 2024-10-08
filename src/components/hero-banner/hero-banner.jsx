"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
// internal
import { hero_slider_data } from "@/data/hero-slider-data";
import shape_1 from "@/assets/img/slider/slider-shape-1.png";
import shape_2 from "@/assets/img/slider/slider-shape-2.png";
import shape_3 from "@/assets/img/slider/slider-shape-3.png";
import shape_4 from "@/assets/img/slider/slider-shape-4.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { handleModalProduct, handleOpenModal } from "@/redux/features/utility";

// Slider settings
const slider_setting = {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 2000, // 2 seconds delay between slides
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".tpslider__arrow-prv",
    prevEl: ".tpslider__arrow-nxt",
  },
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
};

// Image style
const img_style = {
  width: "100%",
  height: "100%",
};

function ShapeImg({ img, cls }) {
  return (
    <Image
      className={cls}
      src={img}
      alt="shape"
      style={{ width: "auto", height: "auto" }}
    />
  );
}

const HeroBanner = () => {
  const pathname = usePathname();
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found
  const style = {
    backgroundImage: 'url("https://res.cloudinary.com/dsiku9ipv/image/upload/v1725363606/bg-1_y07hbw.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  const dispatch = useAppDispatch();
  const handleProductModal = (prd) => {
    dispatch(handleModalProduct({ product: prd }))
    dispatch(handleOpenModal())
  }
  return (
    <>
      <section className="slider-area tpslider-delay">
        <Swiper
          {...slider_setting}
          modules={[Navigation, EffectFade]}
          className="swiper-container slider-active"
        >
          {hero_slider_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="tpslider pt-90 pb-0 grey-bg"
                style={style}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="tpslider__content pt-20 text-center">
                        <h1
                          className="tpslider__title"
                          dangerouslySetInnerHTML={{ __html: item.title[activeLocale] }}
                        ></h1>
                        <span className="tpslider__sub-title mb-20" style={item.color ? { color: item.color } : {}}>
                          {item.subtitle[activeLocale]}
                        </span>
                        <div className="tpslider__btn">
                          <Link href={activeLocale === 'ar' ? "/ar/products" : "/en/products"} className="tp-btn">
                            {activeLocale === 'ar' ? "التفاصيل" : "VIEW"}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="tpslider__thumb p-relative pt-15">
                        <Image
                          className="tpslider__thumb-img"
                          src={item.bg_img}
                          width={1000}
                          height={715}
                          alt="slider-bg"
                          style={img_style}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="tpslider__arrow d-none d-xxl-block">
            <button className="tpsliderarrow tpslider__arrow-prv">
              <i className="icon-chevron-left"></i>
            </button>
            <button className="tpsliderarrow tpslider__arrow-nxt">
              <i className="icon-chevron-right"></i>
            </button>
          </div>
          <div className="slider-pagination d-xxl-none"></div>
        </Swiper>
      </section>
    </>
  );
};

export default HeroBanner;
