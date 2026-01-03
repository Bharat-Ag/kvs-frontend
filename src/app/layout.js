"use client";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/style/global.css";

import { StyleProvider } from "@ant-design/cssinjs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <StyleProvider hashPriority="high">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StyleProvider>
      </body>
    </html>
  );
}
