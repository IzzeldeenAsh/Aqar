import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// prop type
type IFeatureProps = {img:string;title:string;subtitle:string;spacing?:string};
// feature 
export function FeatureItem({img,title,subtitle,spacing='30'}:IFeatureProps) {
  return (
    <div className="col">
      <div className={`mainfeature__item text-center mb-${spacing}`}>
          <div className="mainfeature__icon">
            <Image src={`/assets/img/icon/feature-icon-${img}.svg`} alt="icon" width={25} height={25}/>
          </div>
          <div className="mainfeature__content">
            <h4 className="mainfeature__title">{title}</h4>
            <p dangerouslySetInnerHTML={{__html: subtitle}}/>
          </div>
      </div>
    </div>
  )
}

// prop type 
type IProps = {
  style_2?: boolean;
  bg_img?: boolean;
}

const FeatureArea = ({style_2=false,bg_img=true}:IProps) => {
  return (
    <section className={`feature-area mainfeature__bg ${style_2?'':'grey-bg'} ${bg_img?'':'theme-bg-2'} pt-50 pb-40`} style={{backgroundColor:"#00344c"}}
    >
      <div className="container">
          <div className="mainfeature__border pb-15">
            <div className="d-flex flex-md-row flex-column">
              <FeatureItem img="1" title="EMIAL" subtitle="gm@aqardrug.com" />
              <div></div>
              <FeatureItem img="2"  title="TEL/MOBILE" subtitle="+962 77 523 00 11 <br> +962 6 523 00 11" />
             
              {/* <FeatureItem img="3" title="Online Discount" subtitle="Add Multi-buy Discounts" /> */}
              {/* <FeatureItem img="4" title="Help Center" subtitle="Dedicated 24/7 Support" />
              <FeatureItem img="5" title="Curated items" subtitle="From Handpicked Sellers" /> */}
            </div>
           
          </div>
      </div>
    <div className="container mt-20">
    <div className='d-flex justify-content-between flex-column flex-sm-row align-items-center'>
    <h4 className="mainfeature__title">All rights reserved © 2024, Aqar Drugs Store.</h4>
    <a href={"https://www.instagram.com/aqar_drugs_store_?igsh=MXNxMThidmdjdWoyMg=="} target='__blank'>
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10 0C7.284 0 6.944 0.0113333 5.87733 0.06C4.81267 0.108667 4.08533 0.278 3.44933 0.525333C2.78267 0.776 2.178 1.16933 1.678 1.67867C1.16948 2.17809 0.775905 2.78233 0.524667 3.44933C0.278667 4.08533 0.108667 4.81333 0.06 5.878C0.012 6.944 0 7.28333 0 10C0 12.7167 0.0113333 13.056 0.06 14.1227C0.108667 15.1873 0.278 15.9147 0.525333 16.5507C0.776 17.2173 1.16933 17.822 1.67867 18.322C2.1781 18.8305 2.78234 19.2241 3.44933 19.4753C4.08533 19.722 4.81267 19.8913 5.87733 19.94C6.944 19.9887 7.284 20 10 20C12.716 20 13.056 19.9887 14.1227 19.94C15.1873 19.8913 15.9147 19.722 16.5507 19.4747C17.2173 19.224 17.822 18.8307 18.322 18.3213C18.8305 17.8219 19.2241 17.2177 19.4753 16.5507C19.722 15.9147 19.8913 15.1873 19.94 14.1227C19.9887 13.056 20 12.716 20 10C20 7.284 19.9887 6.944 19.94 5.87733C19.8913 4.81267 19.722 4.08533 19.4747 3.44933C19.2236 2.78204 18.83 2.17755 18.3213 1.678C17.8219 1.16948 17.2177 0.775905 16.5507 0.524667C15.9147 0.278667 15.1867 0.108667 14.122 0.06C13.056 0.012 12.7167 0 10 0ZM10 1.802C12.67 1.802 12.9867 1.812 14.0413 1.86C15.016 1.90467 15.5453 2.06667 15.898 2.20467C16.3647 2.38533 16.698 2.60267 17.048 2.952C17.398 3.302 17.6147 3.63533 17.7953 4.102C17.9327 4.45467 18.0953 4.984 18.14 5.95867C18.188 7.01333 18.198 7.33 18.198 10C18.198 12.67 18.188 12.9867 18.14 14.0413C18.0953 15.016 17.9333 15.5453 17.7953 15.898C17.6353 16.3324 17.3799 16.7253 17.048 17.048C16.7254 17.38 16.3324 17.6354 15.898 17.7953C15.5453 17.9327 15.016 18.0953 14.0413 18.14C12.9867 18.188 12.6707 18.198 10 18.198C7.32933 18.198 7.01333 18.188 5.95867 18.14C4.984 18.0953 4.45467 17.9333 4.102 17.7953C3.66764 17.6353 3.27467 17.3799 2.952 17.048C2.62012 16.7253 2.36475 16.3323 2.20467 15.898C2.06733 15.5453 1.90467 15.016 1.86 14.0413C1.812 12.9867 1.802 12.67 1.802 10C1.802 7.33 1.812 7.01333 1.86 5.95867C1.90467 4.984 2.06667 4.45467 2.20467 4.102C2.38533 3.63533 2.60267 3.302 2.952 2.952C3.27463 2.62003 3.66761 2.36465 4.102 2.20467C4.45467 2.06733 4.984 1.90467 5.95867 1.86C7.01333 1.812 7.33 1.802 10 1.802Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10 13.3367C9.56184 13.3367 9.12795 13.2504 8.72313 13.0827C8.31831 12.915 7.95047 12.6692 7.64064 12.3594C7.3308 12.0495 7.08502 11.6817 6.91734 11.2769C6.74965 10.8721 6.66335 10.4382 6.66335 10C6.66335 9.56182 6.74965 9.12794 6.91734 8.72311C7.08502 8.31829 7.3308 7.95046 7.64064 7.64062C7.95047 7.33078 8.31831 7.08501 8.72313 6.91732C9.12795 6.74964 9.56184 6.66333 10 6.66333C10.885 6.66333 11.7336 7.01487 12.3594 7.64062C12.9851 8.26637 13.3367 9.11506 13.3367 10C13.3367 10.8849 12.9851 11.7336 12.3594 12.3594C11.7336 12.9851 10.885 13.3367 10 13.3367ZM10 4.86C8.6368 4.86 7.32942 5.40153 6.36549 6.36547C5.40155 7.32941 4.86002 8.63679 4.86002 10C4.86002 11.3632 5.40155 12.6706 6.36549 13.6345C7.32942 14.5985 8.6368 15.14 10 15.14C11.3632 15.14 12.6706 14.5985 13.6345 13.6345C14.5985 12.6706 15.14 11.3632 15.14 10C15.14 8.63679 14.5985 7.32941 13.6345 6.36547C12.6706 5.40153 11.3632 4.86 10 4.86ZM16.6353 4.76667C16.6353 5.0889 16.5073 5.39794 16.2795 5.6258C16.0516 5.85366 15.7426 5.98167 15.4204 5.98167C15.0981 5.98167 14.7891 5.85366 14.5612 5.6258C14.3334 5.39794 14.2053 5.0889 14.2053 4.76667C14.2053 4.44443 14.3334 4.13539 14.5612 3.90753C14.7891 3.67968 15.0981 3.55167 15.4204 3.55167C15.7426 3.55167 16.0516 3.67968 16.2795 3.90753C16.5073 4.13539 16.6353 4.44443 16.6353 4.76667Z" fill="white"/>
                          </svg>
                </a>
              </div>
    </div>
    </section>
  );
};

export default FeatureArea;