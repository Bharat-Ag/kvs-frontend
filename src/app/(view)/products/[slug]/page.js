"use client";

import { assets } from "../../../../../public/assets/svgs/svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../../../public/assets/style/product.css";
import PageTitle from "../../../components/PageTitle";
import Banner from "../../../components/Banner";
import Link from "next/link";
export default function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
  ];

  return (
    <>
      <PageTitle title={"Products Details"} />
      <Banner title={"Our Products"} image={assets.OurProductBanner} />

      <section className="product-gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Swiper
                loop={true}
                loopedSlides={images.length}
                spaceBetween={10}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`product-${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                loopedSlides={images.length}
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`thumb-${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-md-6">
              <span className="sec-heading text-black">Product 1</span>
              <div className="table-row">
                <div className="table-grid">
                  <div className="tb-col">
                    <span className="label">Material</span>
                    <p>PP, SMS, SMMS</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Standard / Thickness</span>
                    <p>15-40 GSM</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Color</span>
                    <p>White / Customize</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Size</span>
                    <p>120 x 230, 150 x 220, Customize</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Packaging</span>
                    <p>100 PCS in Carton</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Application</span>
                    <p>Medical / Spa / Beauty</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">MOQ</span>
                    <p>100 Carton</p>
                  </div>
                </div>
              </div>
              <button className="flex-box rounded-full red-outline-btn w-100">
                Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
