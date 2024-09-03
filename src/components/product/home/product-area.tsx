'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import product_data from '@/data/product-data';
import ProductSingle from '../product-single/product-single';
import { usePathname } from 'next/navigation';

// slider setting
const slider_setting = {
   slidesPerView: 6,
   spaceBetween: 20,
   observer: true,
   observeParents: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: true,
   },
   breakpoints: {
      '1200': {
         slidesPerView: 6,
      },
      '992': {
         slidesPerView: 4,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 1.2, // Show 1 full card + part of the next one
         spaceBetween: 10,  // Adjust space between slides
      },
      '0': {
         slidesPerView: 1.2, // Show 1 full card + part of the next one
         spaceBetween: 10,  // Adjust space between slides
      },
   },
   navigation: {
      nextEl: '.tpproduct-btn__nxt',
      prevEl: '.tpproduct-btn__prv',
   }
}


const ProductArea = () => {
   const products = [...product_data].slice(-10);
   const pathname = usePathname(); // Get the current locale
   const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found
  return (
    <>
     <section className="product-area grey-bg pt-100  pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tpsection mb-35 text-center">
                        <h4  className='ibx-font' style={activeLocale ==='ar' ? {direction:"rtl" , fontSize: "23px"} : {direction:"ltr",fontSize: "23px"}}>{activeLocale ==='ar' ? "مستحضرات التجميل " : "Cosmetics"}</h4>
                        {/* <p>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p> */}
                     </div>
                  </div>
               </div>
               <div className="tpproduct__arrow p-relative">
               <div className="d-flex flex-sm-row flex-column flex-wrap gap-3 justify-content-center align-items-center" style={activeLocale ==='ar' ? {direction:"rtl" } : {direction:"ltr"}}>
                      {products.map((product, index) => (
                       <div className='mt-2 mb-2' style={{width:"350px"}} key={index}>
                             <ProductSingle  product={product}  />
                       </div>
                        ))}
                        </div>
                  {/* <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active tpslider-bottom p-relative">
                     {products.map((product, index) => (
                        <SwiperSlide key={index}>
                           <ProductSingle product={product} />
                        </SwiperSlide>
                     ))}
                  </Swiper> */}
                  {/* <div className="tpproduct-btn">
                     <div className="tpprduct-arrow tpproduct-btn__prv"><a href="#"><i className="icon-chevron-left"></i></a></div>
                     <div className="tpprduct-arrow tpproduct-btn__nxt"><a href="#"><i className="icon-chevron-right"></i></a></div>
                  </div> */}
               </div>
            </div>
         </section>
    </>
  );
};

export default ProductArea;