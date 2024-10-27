import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import ProductArea from "@/components/product/home/product-area";
import AllProducts from "@/components/product/home/all-products";
import FeatureArea from "@/components/feature/feature-area";
import AboutAreaFour from "@/components/about/about-area-4";
import ContactUs from "@/components/contactUs/ContactUs"
import HeroAqar from "@/components/hero/hero-aqar"
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
      <HeroAqar/>
        
        <div id="dehanso" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <ProductArea   />
        </div>
      
      
        <div id="suppliments" style={{overflow:"hidden" , maxWidth:"100%"}}>
        <AllProducts />
        </div>
       
      </main>



      <div id="contact">
      <ContactUs/>
        
      </div>
      <FeatureArea style_2={true} />
      {/* footer end */}
    </Wrapper>
  );
}
