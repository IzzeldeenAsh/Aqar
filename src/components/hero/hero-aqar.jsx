"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";


const HeroAqar = () => {
  const pathname = usePathname();
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found
  const content = {
    en: {
      h3: "Aqar Drugs Store",
      li: [
        "Exclusive Agents Distributors of Health care products and Cosmeceuticals since 2021.",
        "We truly care about your health and we make beauty easy.",
        "Our mission is to bring unique healthcare products.",
        "You will find our products at most of the sales points; pharmacies and cosmetics shops.",
        "Located in Jordan."
      ]
    },
    ar: {
      h3: "مستودع أدويه العقار",
      li: [
        "وكلاء حصريون وموزعو منتجات الرعاية الصحية ومستحضرات التجميل منذ عام 2021.",
        "نحن نهتم حقًا بصحتك ونجعل الجمال سهلًا.",
        "مهمتنا هي تقديم منتجات رعاية صحية فريدة.",
        "ستجد منتجاتنا في معظم نقاط البيع؛ الصيدليات ومحلات التجميل.",
        "في الاردن."
      ]
    }
  };
  
 const localeContent = content[activeLocale];
  return (
    <>
      <section style={activeLocale ==='ar' ? {direction:"rtl"} : {direction:"ltr"}}>
        <div className="hero-aqar pt-50">
        <div className="d-flex flex-sm-row flex-column flex-wrap gap-3 justify-content-between align-items-center align-items-sm-start">
                  <div className="about-info">
                    <div className="title">
                      {activeLocale =='ar' ? "مستودع أدوية عقار " : " Aqar Drug Store"}
                    </div>
                    <div className="sub-title">
                        {activeLocale =='ar' ? "من نحن " : "About Us"}
                    </div>
                    <div className="pt-20 tpabout__inner-list">
                        <ul >
                           {localeContent.li.map((item, index) => (
                              <li key={index}><i  style={activeLocale ==='ar' ? {right:"0"} : {left:"0"}} className="icon-check"></i> <span className=' ibx-font'>{item}</span></li>
                           ))}
                        </ul>
                     </div>
                  </div>
                    <div className="aqar-logo">


                    <svg width="360" height="250" viewBox="0 0 360 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M265.112 242.529H192.652L136.294 139.08L75.9107 242.529H8.05127L135.144 11.4943L265.112 242.529Z" fill="#68CBF3"/>
<path d="M353.674 127.012C353.674 166.092 345.623 191.954 334.121 209.195C332.396 197.126 322.045 189.081 299.042 181.609L291.566 179.31C277.189 174.713 269.712 168.966 269.712 159.195C269.712 147.701 281.214 141.379 296.166 141.379C301.917 141.379 307.093 142.529 312.268 144.253L316.294 161.494H327.796L328.946 141.379C320.895 136.207 310.543 133.333 297.316 133.333C272.588 133.333 254.185 144.253 254.185 162.069C254.185 178.161 267.412 186.782 287.54 193.103L295.016 195.402C311.693 200.575 319.169 205.172 319.169 215.517C319.169 227.586 307.093 234.483 288.69 234.483C280.064 234.483 274.313 233.333 268.562 230.46L263.962 212.644H252.46V213.793L136.294 4.59775H240.958C240.958 4.59775 353.674 2.29891 353.674 127.012Z" fill="url(#paint0_linear_51_4)"/>
<path d="M136.294 139.081L75.9106 242.529H192.652L136.294 139.081Z" fill="url(#paint1_linear_51_4)"/>
<defs>
<linearGradient id="paint0_linear_51_4" x1="53.0166" y1="-22.2603" x2="308.462" y2="141.767" gradientUnits="userSpaceOnUse">
<stop stop-color="#CAE9FB" stop-opacity="0"/>
<stop offset="1" stop-color="#6ACBF3"/>
</linearGradient>
<linearGradient id="paint1_linear_51_4" x1="134.295" y1="279.618" x2="134.295" y2="161.83" gradientUnits="userSpaceOnUse">
<stop stop-color="#CAE9FB" stop-opacity="0"/>
<stop offset="1" stop-color="#6ACBF3"/>
</linearGradient>
</defs>
</svg>



                    </div>
              </div>
        </div>
        <div className="d-flex flex-wrap">
  <div className=" img-container position-relative img-container-1">

    <Link href={"/#dehanso"}><div className="overlay-button"  style={{backgroundColor:"#308fca6c"}}> {activeLocale =='ar' ? "مستحضرات التجميل" : "COSMETICS"}</div></Link>
  </div>
  <div className=" img-container img-container-2">
  
  <Link href={"/#suppliments"}><div className="overlay-button"  style={{backgroundColor:"#2377ac6c"}}> {activeLocale =='ar' ? " المكملات الغذائية" : "SUPPLEMENTS"}</div></Link> 
  </div>
  <div className=" img-container  img-container-3">
  <Link href={"/#contact"}>  <div className="overlay-button"  style={{backgroundColor:"#165eb757"}}> {activeLocale =='ar' ? " تواصل معنا" : "CONTACT US"}</div></Link>
  
  </div>
</div>

             
      </section>
    </>
  );
};

export default HeroAqar;
