'use client';
import Image from "next/image";

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
  <div></div>
  );
}
