import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import ProductArea from "@/components/product/home/product-area";
import AllProducts from "@/components/product/home/all-products";
import FeatureArea from "@/components/feature/feature-area";
import AboutAreaFour from "@/components/about/about-area-4";
import ContactUs from "@/components/contactUs/ContactUs"
export const metadata: Metadata = {
  title: "Aqar - Drugs Store"
};
export default function HomePage() {
  return (
    <Wrapper>
      <Header />
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
    </Wrapper>
  );
}
