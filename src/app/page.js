"use client";
import CTA from "./components/CTA";
import Image from "next/image";
import {
  assets,
  SliderArrowN,
  SliderArrowP,
} from "../../public/assets/svgs/svg";
import PageTitle from "./components/PageTitle";
import Advantages from "./components/Advantages";
import "../../public/assets/style/home.css";
import { Tabs, Collapse } from "antd";
import FaqCollapse from "./components/FaqCollapse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const importFaqs = [
    {
      question: "What import services does Kavishree Exim provide?",
      answer:
        "Kavishree Exim offers end-to-end import services including product sourcing, logistics coordination, customs clearance, and final delivery.",
    },
    {
      question: "How long does the import process usually take?",
      answer:
        "Import timelines depend on the origin country and mode of transport, generally ranging from 7 to 30 days.",
    },
    {
      question: "Does Kavishree Exim handle customs clearance for imports?",
      answer:
        "Yes, Kavishree Exim manages all required customs documentation and clearance procedures for smooth imports.",
    },
    {
      question: "Can Kavishree Exim source products on request?",
      answer:
        "Yes, we support custom product sourcing based on client requirements and current market availability.",
    },
    {
      question: "Is pricing shared before confirming an import order?",
      answer:
        "Yes, complete pricing details are shared after evaluating product specifications and order quantities.",
    },
  ];

  const exportFaqs = [
    {
      question: "What types of products does Kavishree Exim export?",
      answer:
        "Kavishree Exim exports a wide range of Indian products that meet international quality and compliance standards.",
    },
    {
      question: "Which logistics modes are available for exports?",
      answer:
        "We provide export logistics through sea freight, air cargo, and road transport based on destination and urgency.",
    },
    {
      question: "Does Kavishree Exim manage export documentation?",
      answer:
        "Yes, we handle invoices, packing lists, HS codes, and all mandatory export documentation.",
    },
    {
      question: "Is custom packaging available for export orders?",
      answer:
        "Yes, customized packaging options are available depending on product type, compliance needs, and order volume.",
    },
    {
      question: "How can international buyers place an export inquiry?",
      answer:
        "International buyers can submit inquiries through our website contact form or connect directly with our export support team.",
    },
  ];

  const generalFaqs = [
    {
      question: "Does Kavishree Exim provide door-to-door delivery?",
      answer:
        "Yes, door-to-door delivery is available for selected destinations and shipment types.",
    },
    {
      question: "Can shipments be tracked after dispatch?",
      answer:
        "Yes, shipment tracking details are shared once the cargo is dispatched.",
    },
    {
      question: "Are sample shipments available before bulk orders?",
      answer:
        "Yes, sample shipments can be arranged based on product availability and feasibility.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept standard international trade payment methods such as bank transfers and letters of credit.",
    },
    {
      question: "Does Kavishree Exim support long-term business partnerships?",
      answer:
        "Yes, we actively support long-term partnerships with distributors, resellers, and repeat buyers worldwide.",
    },
  ];

  const sliderData = [
    {
      image: assets.sliderImg1,
      title: (
        <>
          Sailing Indian <br /> Excellence <br /> Across Global Waters
        </>
      ),
      description:
        "Delivering quality products worldwide trusted, timely, and trade-ready.",
    },
    {
      image: assets.sliderImg2,
      title: (
        <>
          Delivering Speed & Precision <br /> Across Global Skies
        </>
      ),
      description:
        "Fast and secure air cargo services designed for time-critical global deliveries.",
    },
    {
      image: assets.sliderImg3,
      title: (
        <>
          Driving Trade <br /> with Trust <br /> Across Every Mile
        </>
      ),
      description:
        "Dependable road logistics ensuring smooth inland and cross-border transportation.",
    },
  ];

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <>
      <PageTitle
        title={"Import Export Services, Global Logistics & Trade Solutions"}
      />

      <section className="hero-sec">
        <div className="inner-area position-relative">
          <div className="custom-slider-btns">
            <div ref={prevRef} className="custom-swiper-prev">
              <button><SliderArrowP /></button>
            </div>
            <div ref={nextRef} className="custom-swiper-next">
              <button><SliderArrowN /></button>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={setSwiperInstance}
            className="mySwiper"
          >
            {sliderData.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="inr-slid">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="slider-image"
                    width={1460}
                    height={700}
                  />
                  <div className="content position-relative">
                    <h2 className="sec-heading">{slide.title}</h2>
                    <p className="hero-para">{slide.description}</p>
                    <Link href="#" className="red-btn rounded-full flex-box">
                      Contact us
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Advantages />

      <section className="faq paddT">
        <div className="inner-section">
          <div className="container">
            <div className="row">
              {/* Left */}
              <div className="col-md-6 d-flex">
                <div className="left-area">
                  <span className="mini-title">FAQS</span>
                  <h2 className="sec-heading">
                    Everything You Should Know About Kavishree Group & Exim
                  </h2>
                </div>
              </div>

              {/* Right */}
              <div className="col-md-6">
                <div className="right-area faqTab-area">
                  <Tabs
                    defaultActiveKey="import"
                    className="faq-tab"
                    items={[
                      {
                        key: "import",
                        label: "Import",
                        children: <FaqCollapse items={importFaqs} />,
                      },
                      {
                        key: "export",
                        label: "Export",
                        children: <FaqCollapse items={exportFaqs} />,
                      },
                      {
                        key: "other",
                        label: "Other",
                        children: <FaqCollapse items={generalFaqs} />,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner paddT">
        <div className="inner-area">
          <div className="container">
            <div>
              <Image src={assets.homeCtaBanner} alt="section image" />
            </div>
          </div>
        </div>
      </section>

      <CTA title={"Ready to Ship Your Cargo Worldwide?"} />
    </>
  );
}
