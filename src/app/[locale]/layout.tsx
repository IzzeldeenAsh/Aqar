import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Orfarm - Multipurpose eCommerce Next js Template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${poppins_p.variable} ${poppins_ff.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
