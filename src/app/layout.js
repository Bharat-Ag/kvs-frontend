"use client";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/style/global.css";

import { StyleProvider } from "@ant-design/cssinjs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the styles

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
          <ToastContainer 
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </StyleProvider>
      </body>
    </html>
  );
}
