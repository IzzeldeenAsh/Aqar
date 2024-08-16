import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import ShopArea from "@/components/shop/shop-area";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
  title: "Shop 3 - Aqar",
};

export default function ShopPageThree() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Shop" bgClr="grey-bg" />
        {/* breadcrumb-area-end */}

        {/* shop area start */}
        <ShopArea category_style={true} />
        {/* shop area end */}

        {/* feature area start */}
        <FeatureArea style_2={true} />
        {/* feature area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
