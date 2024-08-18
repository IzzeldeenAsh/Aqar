"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import thumb from '@/assets/img/product/feature-thumb-1.png';
import shape_1 from '@/assets/img/product/feature-shape-1.png';
import shape_2 from '@/assets/img/product/feature-shape-2.png';
import shape_3 from '@/assets/img/product/feature-shape-3.png';
import { usePathname } from 'next/navigation';

// img style 
const imgStyle = {
  height: "auto"
}

// prop type 
type IProps = {
  style_2?: boolean;
}
// product-feature-area product-feature pt-80 pb-20
const ProductFeatureArea = ({style_2=false}: IProps) => {
  const pathname = usePathname(); // Get the current locale
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found
  return (
    <>
    <section className={`product-feature-area product-feature pt-80 ${style_2?'pb-20':'grey-bg pb-40'}`}>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="tpfeature__thumb p-relative pb-40">
                  <Image src={thumb} alt="thumb" style={imgStyle}/>
                  <div className="tpfeature__shape d-none d-md-block">
                      {/* <Image className="tpfeature__shape-one" src={shape_1} alt="shape" style={imgStyle}/>
                      <Image className="tpfeature__shape-two" src={shape_2} alt="shape" style={imgStyle}/> */}
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="tpproduct-feature p-relative pt-45 pb-40">
                  <div className="tpsection tpfeature__content mb-35">
             
                      <h4 className="tpsection__title tpfeature__title mb-25">DeHanso <br/> <span style={{fontSize:"30px"}}>The Distenation of  Korean charm</span> </h4>
                      {/* <p>The liber tempor cum soluta nobis eleifend option congue <br/> doming quod mazim placerat facer possim assum.</p> */}
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tpfeature__box">
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title">DeHanso B-Tox Cream:</h4>
                              <span className="tpfeature__product-info">{activeLocale==='ar' ? "شد وترطيب البشرة ، ضد التجاعيد" : "Anti-aging and treat and prevent wrinkles"}</span>
                            </div>
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title"> DeHanso Collagen gel:</h4>
                              <span className="tpfeature__product-">{activeLocale==='ar' ? "التقليل من التجاعيد و الحصول على وجه ممتلئ" : "Glowing skin noted since the first two weeks"}</span>
                            </div>
                        
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tpfeature__box">
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title">DeHanso Hyaluronic acid gel:</h4>
                              <span className="tpfeature__product-info">{activeLocale === 'ar' ?  "تهدئة وترطيب البشرة" : "Skin soothing and moisturizing"}</span>
                            </div>
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title">DeHanso Glycolic acid gel:</h4>
                              <span className="tpfeature__product-info">{activeLocale==='ar' ? "تقشير البشرة وإعادة تجديدها" : "Improve skin regeneration"}</span>
                            </div>
                           
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tpfeature__box">
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title">DeHanso 1 minute white cream:</h4>
                              <span className="tpfeature__product-info">{activeLocale === 'ar' ?          "تفتيح و توحيد لون البشرة على المدى الطويل" : "Long term treatment for skin pigmentation"}</span>
                            </div>
                        </div>
                      </div>
                      
                  </div>
                  <div className="col-12">
              <div className="tpfeature__btn">
                              <Link className="tp-btn-4" href={activeLocale ==="ar" ? "/ar/products#dehanso" : "/en/products#dehanso"}>
                             {activeLocale ==='ar' ? "المزيد": " View More"}
                              </Link>
                            </div>
              </div>
                  <div className="tpfeature__shape d-none d-md-block">
                      <Image className="tpfeature__shape-three" src={shape_3} alt="shape" style={imgStyle}/>
                  </div>
                </div>
         
            </div>
        
          </div>
      </div>
    </section>
    </>
  );
};

export default ProductFeatureArea;