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
        {/* hero start */}
        <HeroBanner />
        {/* hero end */}
        {/* category start */}
        {/* <section className="category-area grey-bg pb-40">
          <div className="container">
            <CategoryArea cls="category-active"/>
          </div>
        </section> */}
        {/* category end */}
        {/* weekly product start */}
        {/* <div id="products" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <ProductArea />
        <AllProducts />
        </div> */}
        <ProductFeatureArea />
      
        
        {/* weekly product end */}
        {/* product feature start */}
     
        {/* product feature end */}
        {/* product banner start */}
        {/* <ProductBannerArea /> */}
        {/* product banner end */}
        {/* all products start */}
   
        {/* all products end */}
        {/* deal offer start */}
        <OfferCountdownBanner bgClr=""/>
        {/* deal offer end */}
        {/* blogs start */}
        {/* <BlogItems /> */}
        {/* blogs end */}
        {/* feature area start */}
        {/* <FeatureArea /> */}
        {/* feature area end */}
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
