import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import Navbar from "@/containers/navbar/Navbar";
import classNames from "classnames";
import HeroDecors from "@/components/heroDecors/HeroDecors";
import Footer from "@/containers/footer/Footer";
import { Titillium_Web } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "200", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Cyber Shakha",
  description: "Your partner in cybersecurity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={classNames(
          "min-h-screen max-w-screen bg-brand_black text-white relative overflow-x-hidden  2xl:px-32  xl:px-24  lg:px-16 px-10"
        )}
      >
        <AuthProvider>
          <HeroDecors />
          <Navbar />

          {children}
          {/* Add footer here */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
