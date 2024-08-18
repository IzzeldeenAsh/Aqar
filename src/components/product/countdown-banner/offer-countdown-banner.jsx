'use client';
import Image from "next/image";
import shape_1 from "@/assets/img/shape/tree-leaf-1.svg";
import shape_2 from "@/assets/img/shape/tree-leaf-2.svg";
import shape_3 from "@/assets/img/shape/tree-leaf-3.svg";
import smallScreenImage from "@/assets/img/banner/small-screen-banner.png.png";
import CountdownTimer from "@/components/common/countdown-timer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Shape({ cls, img }) {
  return (
    <Image
      className={`tpcoundown__shape-${cls}`}
      src={img}
      alt="shape"
      style={{ height: "auto" }}
    />
  );
}

export default function OfferCountdownBanner({bgClr}) {
  const pathname = usePathname(); // Get the current locale
  const activeLocale = pathname.split('/')[1] || "en"; // Default to "en" if no locale is found

  const content = {
    en: {
      title: "Top Quality Supplements for Your Health",
      description: "Explore our range of supplements including Colon soother, Omega 3, and PregyMom. Enhance your well-being with the best in prenatal care.",
    },
    ar: {
      title: "مكملات غذائية عالية الجودة لصحتك",
      description: "استكشف مجموعتنا من المكملات لتحسين جودة حياتك",
    }
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 816);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={`product-coundown-area pt-50 pb-20 tpcoundown__bg ${bgClr ? bgClr : 'grey-bg'} pb-25 mb-100 countdown-section`}
      style={{ backgroundImage: "url(/assets/img/banner/coundpwn-bg-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tpcoundown p-relative ml-175">
              {/* Conditionally render the image above content on small screens */}
              {isSmallScreen && (
                <div className="small-screen-image mb-25">
                  <Image 
                    src={smallScreenImage} 
                    alt="Small Screen Banner" 
                    layout="responsive" 
                    width={700} 
                    height={400} 
                  />
                </div>
              )}
              <div className="section__content mb-35">
                <h2 className="section__title mb-25 ibx-font" style={{ maxWidth: "550px" }}>
                  {content[activeLocale].title}
                </h2>
                <p className="ibx-font" style={{ maxWidth: "550px" }}>
                  {content[activeLocale].description}
                </p>
              </div>
              <div className="tpcoundown__count">
                <div className="tpcoundown__btn mt-50">
                  <Link className="whight-btn" href={activeLocale ==="ar" ? "/ar/products#suppliments" : "/en/products#suppliments"}>
                    {activeLocale === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                  </Link>
                </div>
              </div>
              <div className="tpcoundown__shape d-none d-lg-block">
                <Shape cls="one" img={shape_1} />
                <Shape cls="two" img={shape_2} />
                <Shape cls="three" img={shape_3} />
                {/* <Shape cls="four" img={shape_4} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
