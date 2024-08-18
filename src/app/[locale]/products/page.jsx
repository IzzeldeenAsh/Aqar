import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import HeroBanner from "@/components/hero-banner/hero-banner";
import CategoryArea from "@/components/category/category-area";
import ProductArea from "@/components/product/home/product-area";
import ProductFeatureArea from "@/components/product/feature/product-feature-area";
import OfferCountdownBanner from "@/components/product/countdown-banner/offer-countdown-banner";
import ProductBannerArea from "@/components/banner/product-banner-area";
import AllProducts from "@/components/product/home/all-products";
import FeatureArea from "@/components/feature/feature-area";
import HeroSlider from "@/components/NewSliderForMe/HeroSlider";
import AboutAreaFour from "@/components/about/about-area-4";
import ContactUs from "@/components/contactUs/ContactUs"

export default function Products() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
      {/* <HeroBanner /> */}
      <div id="dehanso" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <ProductArea   />
        </div>
        <div id="suppliments" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <AllProducts />
        </div>
      </main>

 
      <FeatureArea style_2={true} />
      {/* footer end */}
    </Wrapper>
  );
}
