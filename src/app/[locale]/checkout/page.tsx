import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import Footer from "@/layouts/footer/footer";
import CouponArea from "@/components/checkout/coupon-area";
import CheckoutArea from "@/components/checkout/checkout-area";

export const metadata: Metadata = {
  title: "Checkout - Aqar",
};

export default function CheckoutPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Checkout" />
        {/* breadcrumb-area-end */}

        {/* coupon area start */}
        <CouponArea />
        {/* coupon area end */}

        {/* checkout area start */}
        <CheckoutArea/>
        {/* checkout area end */}

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
