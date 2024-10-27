import type { Metadata } from "next";
import { El_Messiri, Poppins, Readex_Pro, Tajawal } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Providers } from "@/redux/provider";
import "./global.scss";

const body = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});

const poppins_p = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});

const poppins_ff = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-poppins",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--tp-ff-ibm-arabic",
});
const tajawal = Tajawal({ // Define Tajawal
  weight: ["400", "500", "800", "700"],
  subsets: ["arabic"],
  variable: "--tp-ff-tajawal",
});

export const metadata: Metadata = {
  title: "Aqar - Drugs Store",
  description: "مكملات غدائية ومواد تجميلية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = "ar"; // Dynamically set this as needed

  
  return (
    <html lang={lang}>
      <body
        className={`${lang === "ar" ? ibmPlexSansArabic.variable : ""} ${body.variable} ${tajawal.variable} ${tajawal.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
