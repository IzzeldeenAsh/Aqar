import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import SimpleSlider from "@/components/hero-banner/SimpleSlider";
import ProductArea from "@/components/product/home/product-area";
import ProductFeatureArea from "@/components/product/feature/product-feature-area";
import OfferCountdownBanner from "@/components/product/countdown-banner/offer-countdown-banner";
import ProductBannerArea from "@/components/banner/product-banner-area";
import AllProducts from "@/components/product/home/all-products";
import FeatureArea from "@/components/feature/feature-area";
import HeroSlider from "@/components/NewSliderForMe/HeroSlider";
import AboutAreaFour from "@/components/about/about-area-4";
import WorldWide from "@/components/world-wide-availalbe/worldwide";
import ContactUs from "@/components/contactUs/ContactUs"
import CategoryArea from "@/components/category/category-area"
export const metadata: Metadata = {
  title: "Aqar - Drugs Store"
};
export default function HomePage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
      
        
        <div id="dehanso" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <ProductArea   />
        </div>
      
      
        <div id="suppliments" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <AllProducts />
        </div>
       
      </main>

      <div id="about" >
        <AboutAreaFour />
      </div>
        

      <div id="contact">
      <ContactUs/>
        
      </div>
      <FeatureArea style_2={true} />
      {/* footer end */}
    </Wrapper>
  );
}
