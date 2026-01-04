"use client";
import CTA from "./components/CTA";
import Image from "next/image";
import { assets, PlayIcon, RightDQouted, SearchIcon, SliderArrowN, SliderArrowP } from "../../public/assets/svgs/svg";
import PageTitle from "./components/PageTitle";
import Advantages from "./components/Advantages";
import "../../public/assets/style/home.css";
import { Tabs } from "antd";
import FaqCollapse from "./components/FaqCollapse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaqExport, FaqGeneral, FaqImport, FeaturedProd, OurServicesData, ProductList, Testimonials, testimonialsData } from "./arrayData";
import VdoPlacholder from "../../public/assets/images/home/video-img.jpg";
import { PauseOutlined } from "@ant-design/icons";
import { useProductStore } from "./store/useProductStore";

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");
  const [playVdo, setPlayVdo] = useState(false);
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts().catch(() => toast.error("Failed to fetch products"));
  }, [fetchProducts, loading]);

  const sliderData = [
    {
      image: assets.sliderImg1,
      title: (
        <>
          Sailing Indian <br /> Excellence <br /> Across Global Waters
        </>
      ),
      description: "Delivering quality products worldwide trusted, timely, and trade-ready.",
    },
    {
      image: assets.sliderImg2,
      title: (
        <>
          Delivering Speed & Precision <br /> Across Global Skies
        </>
      ),
      description: "Fast and secure air cargo services designed for time-critical global deliveries.",
    },
    {
      image: assets.sliderImg3,
      title: (
        <>
          Driving Trade <br /> with Trust <br /> Across Every Mile
        </>
      ),
      description: "Dependable road logistics ensuring smooth inland and cross-border transportation.",
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

  const filteredProducts = useMemo(() => {
    return products?.filter((item) => item.name.toLowerCase().includes(searchProduct.toLowerCase()));
  }, [searchProduct, products]);

  return (
    <>
      <PageTitle title={"Import Export Services, Global Logistics & Trade Solutions"} />

      <section className="hero-sec">
        <div className="inner-area position-relative">
          <div className="custom-slider-btns">
            <div ref={prevRef} className="custom-swiper-prev">
              <button>
                {" "}
                <SliderArrowP />
              </button>
            </div>
            <div ref={nextRef} className="custom-swiper-next">
              <button>
                {" "}
                <SliderArrowN />
              </button>
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
                  <Image src={slide.image} alt={""} className="slider-image" width={1460} height={700} />
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

      <section className="product-sec">
        <div className="inner-area">
          <div className="container">
            <div className="ft-prod-listing">
              <Swiper
                loop={true}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {FeaturedProd?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="feat-product-card">
                      <div className="icns">
                        <Image src={item?.cover} alt={item?.title} />
                      </div>
                      <h4 className="featP-title">{item.title}</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec paddT">
        <div className="inner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-area">
                  <span className="mini-title text-white">About us</span>
                  <h2 className="sec-heading text-white">Who are Kavishree Group</h2>
                  <p className="text-white">We are a leading manufacturer & exporter since 2019</p>

                  <Link href={"/"} className="floating-btn flex-box white-outline-btn rounded-full">
                    <Image src={assets.OutlineArrow} alt="icon" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-area">
                  <div className="testim-sliderbox">
                    <Swiper
                      modules={[Autoplay]}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      slidesPerView={1}
                    >
                      {testimonialsData?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="testm-card position-relative">
                            <div className="bgImg">
                              {/* <Image src={item?.coverArt} alt={item?.name} /> */}
                              <Image src={assets.TestimImg} alt={item?.name} />
                            </div>
                            <div className="content-card">
                              <p className="testm-desc">{item?.message}</p>
                              <div className="infor position-relative">
                                <div className="avts">
                                  <Image src={item?.avatar} alt={item?.name} />
                                </div>
                                <div className="inf">
                                  <h4>{item?.name}</h4>
                                  <h5>{item?.company}</h5>
                                </div>
                                <div className="incx position-absolute " style={{right:0}}>
                                  <RightDQouted />
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services paddT">
        <div className="inner-area">
          <div className="container">
            <div className="heading-col text-center">
              <span className="mini-title">Our Services</span>
              <h2 className="sec-heading text-black">
                Moving the World with Trusted, <br /> End-to-End Global Logistics
              </h2>
            </div>
            <div className="service-listing">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {OurServicesData?.map((service, idx) => (
                  <SwiperSlide key={idx}>
                    <Link href={`/services/${service?.url}`}>
                      <div className="service-card">
                        <div className="icns">
                          <Image src={service?.icons} alt={service?.title} />
                        </div>
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-desc">{service.description}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="video-player paddT">
        <div className="inner-section">
          <div className="container">
            <div className="vdo-box position-relative">
              <Image src={VdoPlacholder} alt="section" className="w-100" />
              <button onClick={() => setPlayVdo(!playVdo)}>{!playVdo ? <PlayIcon /> : <PauseOutlined />}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="our-product paddT">
        <div className="inner-section">
          <div className="container">
            <div className="heading-col text-center">
              <span className="mini-title">Global Products</span>
              <h2 className="sec-heading">
                Kavishree delivers export-ready <br />
                quality worldwide
              </h2>
            </div>
            <div className="product-listing">
              <div className="search-box">
                <input type="text" placeholder="Search Product / Search Categories" className="w-100" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />

                <div className="icon d-flex">
                  <SearchIcon />
                </div>
              </div>
              <div className="product-listing-inner">
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 14,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {filteredProducts?.length > 0 ? (
                    filteredProducts?.map((item, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="product-card">
                          <div className="icns">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <h4 className="product-title">{item.name}</h4>
                          <p className="product-desc">{item.description}</p>
                          <Link href={`/product/${item.slug}`} className="flex-box rounded-full red-outline-btn w-100">
                            Inquiry Now
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <p className="text-center w-100">No products found</p>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Advantages />

      <section className="faq paddT">
        <div className="inner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="left-area">
                  <span className="mini-title">FAQS</span>
                  <h2 className="sec-heading">Everything You Should Know About Kavishree Group & Exim</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-area faqTab-area">
                  <Tabs
                    defaultActiveKey="import"
                    className="faq-tab"
                    items={[
                      {
                        key: "import",
                        label: "Import",
                        children: <FaqCollapse items={FaqImport} />,
                      },
                      {
                        key: "export",
                        label: "Export",
                        children: <FaqCollapse items={FaqExport} />,
                      },
                      {
                        key: "other",
                        label: "Other",
                        children: <FaqCollapse items={FaqGeneral} />,
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
              <Image src={assets.homeCtaBanner} className="w-100 h-auto" alt="section image" />
            </div>
          </div>
        </div>
      </section>

      <CTA title={"Ready to Ship Your Cargo Worldwide?"} />
    </>
  );
}
