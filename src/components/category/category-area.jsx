"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import category_data from "@/data/category-data";
import { usePathname, useRouter } from "next/navigation";
import { auto } from "@popperjs/core";

const CategoryArea = ({cls,perView=8,showCount=true}) => {
  const router = useRouter();
  
  // Slider settings
  const slider_setting = {
    slidesPerView: perView,
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    breakpoints: {
      "1400": {
        slidesPerView: perView,
      },
      "1200": {
        slidesPerView: 6,
      },
      "992": {
        slidesPerView: 5,
      },
      "768": {
        slidesPerView: 4,
      },
      "576": {
        slidesPerView: 3,
      },
      "0": {
        slidesPerView: 2,
      },
    },
  };

  const pathname = usePathname(); 
  const activeLocale = pathname.split('/')[1] || "en";
  const suppLink =activeLocale === 'ar' ? "/ar/products#suppliments" : "/en/products#suppliments";
  const cosmeticsLink =activeLocale === 'ar' ? "/ar/products#dehanso" : "/en/products#dehanso";

  // Handle search 
  const handleCategorySearch = (title) => {
    router.push(`/search?category=${title.split(" ").join("-").toLowerCase()}`);
  };

  return (
    <>
     
      <div className="category-list flex-wrap">
      {category_data.map((item) => (
            <div key={item.id} className="category__item mb-30 ">
              <div className="category__thumb fix mb-15">
                <Link href={item.name.en ==='Supplements' ?suppLink :cosmeticsLink } className="pointer">
                  <img
                    src={item.img}
                   
                    alt="category-thumb"
                  />
                </Link>
              </div>
              <div className="category__content">
                <h5 className="category__title">
                  <Link className="ibx-font" href={item.name.en ==='Supplements' ?suppLink :cosmeticsLink }>
                    {activeLocale === 'ar' ? item.name.ar : item.name.en}
                  </Link>
                </h5>
                {showCount && (
                  <span className="category__count">
                    {item.product_id.length <= 9 && item.product_id.length !== 0
                      ? `0${item.product_id.length}`
                      : `${item.product_id.length}`}{" "}
                    items
                  </span>
                )}
              </div>
            </div>
        ))}
      </div>
      
    </>
  );
};

export default CategoryArea;
