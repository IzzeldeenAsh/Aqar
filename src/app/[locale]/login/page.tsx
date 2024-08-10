import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import Footer from "@/layouts/footer/footer";
import LoginArea from "@/components/login/login-area";

export const metadata: Metadata = {
  title: "Login - Orfarm",
};

export default function LoginPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Sign in" />
        {/* breadcrumb-area-end */}

        {/* login area start */}
        <LoginArea />
        {/* login area end */}

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
