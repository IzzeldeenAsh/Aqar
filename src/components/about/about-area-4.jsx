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
         h3: "مستودع أدويه العقار",
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
            <div className="row align-items-center  justify-content-center">
               <div className="col-xl-5 text-center"  style={{maxWidth:"300px",textAlign:"right"}}>
               <div className="rounded  ">
               <svg  style={{maxWidth:"300px",textAlign:"right" , padding : "0 20px"}} width="345" height="240" viewBox="0 0 345 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M254.066 232.828H184.625L130.615 133.517L72.7476 232.828H7.71567L129.513 11.0344L254.066 232.828Z" fill="#68CBF3"/>
<path d="M255.719 230.621C260.127 231.725 264.535 232.277 268.944 232.829C261.78 233.932 256.821 233.38 256.821 233.38L255.719 230.621Z" fill="#68CBF3"/>
<path d="M338.938 121.931C338.938 159.448 331.222 184.276 320.2 200.827C318.546 189.241 308.626 181.517 286.581 174.345L279.417 172.138C265.639 167.724 258.474 162.207 258.474 152.827C258.474 141.793 269.497 135.724 283.826 135.724C289.337 135.724 294.297 136.827 299.257 138.483L303.115 155.034H314.137L315.24 135.724C307.524 130.759 297.604 128 284.928 128C261.23 128 243.594 138.483 243.594 155.586C243.594 171.034 256.27 179.31 275.559 185.379L282.724 187.586C298.706 192.552 305.871 196.965 305.871 206.896C305.871 218.483 294.297 225.103 276.661 225.103C268.395 225.103 262.883 224 257.372 221.241L252.963 204.138H241.941V205.241L130.615 4.41368H230.919C230.919 4.41368 338.938 2.20678 338.938 121.931Z" fill="url(#paint0_linear_12_8)"/>
<path d="M130.615 133.517L72.7476 232.828H184.625L130.615 133.517Z" fill="url(#paint1_linear_12_8)"/>
<defs>
<linearGradient id="paint0_linear_12_8" x1="50.8076" y1="-21.37" x2="295.858" y2="135.709" gradientUnits="userSpaceOnUse">
<stop stopColor="#CAE9FB" stopOpacity="0"/>
<stop offset="1" stopColor="#6ACBF3"/>
</linearGradient>
<linearGradient id="paint1_linear_12_8" x1="128.699" y1="268.433" x2="128.699" y2="155.357" gradientUnits="userSpaceOnUse">
<stop stopColor="#CAE9FB" stopOpacity="0"/>
<stop offset="1" stopColor="#6ACBF3"/>
</linearGradient>
</defs>
</svg>

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
                     <h3 className="tpabout__inner-title-2 mb-25 ibx-font">{localeContent.h3}</h3>
                     <div className="tpabout__inner-list">
                        <ul >
                           {localeContent.li.map((item, index) => (
                              <li key={index}><i  style={activeLocale ==='ar' ? {right:"0"} : {left:"0"}} className="icon-check"></i> <span className=' ibx-font'>{item}</span></li>
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
