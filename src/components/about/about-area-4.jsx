'use client'
import React from 'react';
import Image from 'next/image';
import about_inner from '@/assets/img/banner/about-inner-bg.png';
import shape_1 from '@/assets/img/shape/tree-leaf-6.png';
import shape_2 from '@/assets/img/shape/tree-leaf-7.png';
import { usePathname } from 'next/navigation';

const AboutAreaFour = () => {
   const pathname = usePathname();
   const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found

   // Content based on locale
   const content = {
      en: {
         h3: "Aqar Drugs Store",
         li: [
            "Distributors of Health care products and Cosmeceuticals since 2021.",
            "We truly care about your health and we make beauty easy.",
            "Our mission is to bring unique healthcare products.",
            "You will find our products at most of the sales points; pharmacies and cosmetics shops."
         ]
      },
      ar: {
         h3: "مستودع ادويه العقار",
         li: [
            "موزعو منتجات الرعاية الصحية ومستحضرات التجميل منذ عام 2021.",
            "نحن نهتم حقًا بصحتك ونجعل الجمال سهلًا.",
            "مهمتنا هي تقديم منتجات رعاية صحية فريدة.",
            "ستجد منتجاتنا في معظم نقاط البيع؛ الصيدليات ومحلات التجميل."
         ]
      }
   };

   const localeContent = content[activeLocale];

   return (
      <section className="about-area pt-100 pb-60" style={activeLocale ==='ar' ? {direction:"rtl"} : {direction:"ltr"}}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6">
               <div className="rounded">
  <Image
    src={about_inner}
    alt="about-img"
    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
  />
</div>
                  <div className="tpabout__inner-thumb-2 p-relative mb-30">
              
                     {/* <div className="tpabout__inner-thumb-shape d-none d-md-block">
                        <div className="tpabout__inner-thumb-shape-one">
                           <Image src={shape_1} alt="shape" />
                        </div>
                        <div className="tpabout__inner-thumb-shape-two">
                           <Image src={shape_2} alt="shape" />
                        </div>
                     </div> */}
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="tpabout__inner-2 mb-30">
                     <h3 className="tpabout__inner-title-2 mb-25">{localeContent.h3}</h3>
                     <div className="tpabout__inner-list">
                        <ul>
                           {localeContent.li.map((item, index) => (
                              <li key={index}><i  style={activeLocale ==='ar' ? {right:"0"} : {left:"0"}} className="icon-check"></i> {item}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutAreaFour;
