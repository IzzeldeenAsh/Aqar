'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductSingle from '../product-single/product-single';
import product_data from '@/data/other-products-data';
import { IProductData } from '@/types/product-d-t';
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

// tabs
const tabs = ['All Products','Fruit Drink','Fresh Fruits','Vegetables'];
// weekly-product-area whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix
// prop type 
type IProps = {
  style_2?: boolean;
  style_3?: boolean;
}
const AllProducts = ({style_2=false,style_3=false}:IProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [products, setProducts] = React.useState<IProductData[]>([...product_data]);
  const pathname = usePathname(); // Get the current locale
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found
  const handleFilter = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'All Products') {
      setProducts([...product_data]);
    } else {
      setProducts([...product_data].filter((p) => p.category.parent.toLowerCase() === tab.toLowerCase()));
    }
  }

  return (
    <>
    <section className={`weekly-product-area ${style_2 ? 'whight-product pt-100 pb-75' : style_3 ? 'whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix' : 'grey-bg pb-70'}`}>
      <div className={`${style_3 ? 'container-fluid' : 'container'}`}>
          <div className="row">
            <div className="col-lg-12 ">
            <div className="tpsection mb-35 text-center pt-50">
            <h4 className='ibx-font '  style={activeLocale ==='ar' ? {direction:"rtl" , fontSize: "30px",fontWeight:"700"} : {direction:"ltr",fontSize: "30px",fontWeight:"700"}}>{activeLocale ==='ar' ? "المكملات الغذائية" : "Supplements"}</h4>
                        {/* <p>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p> */}
                     </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <div className="tpnavtab__area pb-40">
                  <nav>
                      {/* <div className="nav nav-tabs" id="nav-tab">
                      {tabs.map((tab, index) => (
                        <button
                          key={index}
                          className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                          type="button"
                          onClick={() => handleFilter(tab)}
                        >
                          {tab}
                        </button>
                      ))}
                      </div> */}
                  </nav>

                    <div className="tpproduct__arrow p-relative">
                    <div className="d-flex flex-sm-row flex-column flex-wrap gap-3 justify-content-center align-items-center" style={activeLocale ==='ar' ? {direction:"rtl" } : {direction:"ltr"}}>
                      {products.map((product, index) => (
                       <div className='mt-2 mb-2' style={{maxWidth:"350px"}} key={index}>
                             <ProductSingle  product={product}  />
                       </div>
                        ))}
                        </div>
                        {/* <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active tpslider-bottom p-relative">
                     
                        </Swiper> */}
                        {/* <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv"><a href="#"><i className="icon-chevron-left"></i></a></div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt"><a href="#"><i className="icon-chevron-right"></i></a></div>
                        </div> */}
                    </div>

                </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
                <div className="tpproduct__all-item text-center">
                  <span>Discover thousands of other quality products. 
                      <Link href="/shop">Shop All Products <i className="icon-chevrons-right"></i></Link>
                  </span>
                </div>
            </div>
          </div> */}
      </div>
    </section>   
    </>
  );
};

export default AllProducts;