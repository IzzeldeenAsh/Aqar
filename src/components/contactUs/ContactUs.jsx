'use client'
import React from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";


export function FeatureItem({img,title,subtitle,spacing='30'}) {
    return (
      <div className="col">
        <div className={`mainfeature__item text-center mb-${spacing}`}>
            <div className="mainfeature__icon">
              <Image src={`/assets/img/icon/feature-icon-${img}.svg`} alt="icon" width={40} height={40}/>
            </div>
            <div className="mainfeature__content">
              <h4 className="mainfeature__title text-primary ">{title}</h4>
              <p className='text-muted fw-bold' dangerouslySetInnerHTML={{__html: subtitle}}/>
            </div>
        </div>
      </div>
    )
  }
  
const ContactUs = () => {
  const pathname = usePathname(); 
  const activeLocale = pathname.split("/")[1] || "en"; 

  const contactDetails = {
    en: {
      title: "Contact Us",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      address: {
        title: "Address",
        subtitle: "Text Place Holder"
      },
      mobile: {
        title: "Mobile",
        subtitle: "+962 000 0000 000"
      },
      email: {
        title: "Email",
        subtitle: "Placeholder@gmail.com"
      }
    },
    ar: {
      title: "اتصل بنا",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
      address: {
        title: "العنوان",
        subtitle: "نص مكان العنوان"
      },
      mobile: {
        title: "الموبايل",
        subtitle: "+962 000 0000 000"
      },
      email: {
        title: "البريد الإلكتروني",
        subtitle: "Placeholder@gmail.com"
      }
    }
  };

  const currentContent = contactDetails[activeLocale];

  return (
    <section className="contact-us-section text-center pt-70 pb-70" style={{backgroundColor:"#F2F2F6"}}>
      <h1 className='ibx-font' style={{fontSize:"50px" ,fontWeight:"900"}}>{currentContent.title}</h1>
      {/* <p>{currentContent.description}</p> */}
   <div className="container ">
    <div className="row justify-content-center pt-50 pb-50">
        <div className="col-sm-4 col-12"> <FeatureItem img="1" title="EMIAL" subtitle="gm@aqardrug.com" />
     </div>
        <div className="col-sm-4 col-12">   <FeatureItem img="2"  title="TEL/MOBILE" subtitle="+962 77 523 00 11 <br> +962 6 523 00 11" /></div>
    </div>
   {/* <div className="d-flex flex-md-row flex-column justify-content-center mt-4">

  
             
      </div> */}
   </div>
    </section>
  );
};

export default ContactUs;
