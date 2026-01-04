import { assets, BlueArrow } from "../../../../public/assets/svgs/svg";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/assets/style/about.css";
import { FaqExport, FaqGeneral, FaqImport } from "@/app/arrayData";
import PageTitle from "@/app/components/PageTitle";
import FaqCollapse from "@/app/components/FaqCollapse";
import CTA from "@/app/components/CTA";

export default function FAQs() {
  return (
    <>
      <PageTitle title={"FAQs"} />

      <section className="faq-hero paddB">
        <div className="banner-blk">
          <div className="banner">
            <span className="banner-overlay"></span>
            <Image src={assets.FAQHero} alt="Banner image" height={500} />
          </div>

          <div className="header-info">
            <h1 className="h-title">FAQS</h1>
            <p className="h-info">
              <Link href="/">Home</Link> <BlueArrow />
              <span>FAQS</span>
            </p>
          </div>
        </div>
      </section>

      <section className="faq faq-pg paddB">
        <div className="inner-area">
          <div className="container">
            <div className="faq-col">
              <span className="mini-title text-center d-block mb-0 mx-auto"> Import</span>
              <h3 className="sec-heading text-center text-black">
                Everything You Need to Know <br /> About Importing with Kavishree
              </h3>
              <div className="collaper">
                <FaqCollapse items={FaqImport} />
              </div>
            </div>
            <div className="faq-col paddT">
              <span className="mini-title text-center d-block mb-0 mx-auto">EXPORT</span>
              <h3 className="sec-heading text-center text-black">Your Guide to Hassle-Free Global Exports </h3>
              <div className="collaper">
                <FaqCollapse items={FaqExport} />
              </div>
            </div>
            <div className="faq-col paddT">
              <span className="mini-title text-center d-block mb-0 mx-auto">OTHER / GENERAL - FAQs</span>
              <h3 className="sec-heading text-center text-black">General Trade & Logistics Queries Answered</h3>
              <div className="collaper">
                <FaqCollapse items={FaqGeneral} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}