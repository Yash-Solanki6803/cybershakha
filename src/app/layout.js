import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import Navbar from "@/components/navbar/Navbar";
import classNames from "classnames";
import Vector from "@/components/vectorbroad/VectorBroad";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyber Shakha",
  description: "Your partner in cybersecurity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={classNames(
          "min-h-screen font-titillium bg-brand_black text-white relative overflow-x-hidden px-[120px]"
        )}
      >
        {/* -top-[10rem]  lg:-left-[35%] sm:-left-[67%] -right-[100%] */}
        <AuthProvider>
          <Vector
            size={9}
            className="transform -rotate-[20deg] -top-[120px] -left-[600px] lg:-left-[350px]"
          />
          <Navbar />
          {children}
          {/* Add footer here */}
        </AuthProvider>
      </body>
    </html>
  );
}
