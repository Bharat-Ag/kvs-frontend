import PageTitle from "@/app/components/PageTitle";
import "../../../../public/assets/style/about.css";
import Image from "next/image";
import { assets, BlueArrow } from "../../../../public/assets/svgs/svg";
import Link from "next/link";
import CTA from "@/app/components/CTA";

export default function About() {
  return (
    <>
      <PageTitle title={"About"} />

      <section className="about-hero paddB">
        <div className="banner-blk">
          <div className="banner">
            <span className="banner-overlay"></span>
            <Image src={assets.aboutHero} alt="Banner image" />
          </div>

          <div className="header-info">
            <h1 className="h-title">About Us</h1>
            <p className="h-info">
              <Link href="/">Home</Link>  <BlueArrow />
              <span>About Us</span>
            </p>
          </div>
        </div>
      </section>

      <section className="about-main paddB">
        <div className="inner-area">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-images">
                <div className="img img-top">
                  <Image src={assets.aboutMain1} alt="Air Cargo" />
                </div>
                <div className="img img-bottom">
                  <Image src={assets.aboutMain2} alt="Sea Cargo" />
                </div>
              </div>
              <div className="about-content">
                <span className="mini-title">About us</span>

                <h2 className="sec-heading">
                  Kavishree Exim is a trusted import-export company committed
                </h2>
                <p className="cmn-text">
                  to delivering reliable, efficient, and compliant global trade
                  solutions. With a strong focus on quality and customer
                  satisfaction, we help businesses connect with international
                  markets through seamless logistics and professional trade
                  support.
                </p>
                <p className="cmn-text">
                  Our operations are built on transparency, precision, and a
                  deep understanding of global trade requirements. From sourcing
                  and documentation to shipment execution, Kavishree Exim
                  ensures every process is handled with care and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise paddB">
        <div className="inner-area">
          <div className="container">
            <h2 className="sec-heading center">Our Expertise</h2>
            <div className="expertise-wrap">
              <div className="expertise-item">
                <div className="expertise-head">
                  <span className="exp-name">Ocean Logistics</span>
                  <span className="exp-percent">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-progress="100"></div>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-head">
                  <span className="exp-name">Export Solutions</span>
                  <span className="exp-percent">90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-progress="90"></div>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-head">
                  <span className="exp-name">Air Cargo</span>
                  <span className="exp-percent">80%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-progress="80"></div>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-head">
                  <span className="exp-name">Import Services</span>
                  <span className="exp-percent">70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-progress="70"></div>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-head">
                  <span className="exp-name">Road Freight</span>
                  <span className="exp-percent">60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-progress="60"></div>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-head">
                  <span className="exp-name">Trade Documentation</span>
                  <span className="exp-percent">50%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-progress="50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="certificate paddB">
        <div className="inner-area">
          <div className="container">
            <h2 className="sec-heading center">Our Certificates</h2>

            {/* <div className="certi-wrapper gallery">
              <Link
                href="https://placehold.co/1024x600"
                className="certi-block"
                title="Certificate 1"
              >
                <Image src="https://placehold.co/370x424" alt="Certificate 1" />
              </Link>

              <a
                href="https://placehold.co/1024x600"
                className="certi-block"
                title="Certificate 2"
              >
                <Image src="https://placehold.co/370x424" alt="Certificate 2" />
              </a>

              <a
                href="https://placehold.co/1024x600"
                className="certi-block"
                title="Certificate 3"
              >
                <Image src="https://placehold.co/370x424" alt="Certificate 3" />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
