"use client";

import { assets } from "../../../../../public/assets/svgs/svg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../../../public/assets/style/product.css";
import PageTitle from "../../../components/PageTitle";
import Banner from "../../../components/Banner";
import ApiService from "@/app/service/api/api.services";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import CTA from "@/app/components/CTA";
import InquiryModal from "@/app/components/InquiryModal";

export default function ProductDetails() {
  const { slug } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productDt, setProductDt] = useState(null);
  const [imageGallery, setImageGallery] = useState([]);
  const [openMdl, setOpenMdl] = useState(false);

  const fetchProductDetails = async () => {
    try {
      const product = await ApiService.getProductDetail(slug);
      const data = product?.data;

      setProductDt(data);
      setImageGallery(data?.images || []);
    } catch (error) {
      toast.error("Failed to fetch product details. Please try again.");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <>
      <PageTitle title={"Products Details"} />
      <Banner title={"Our Products"} image={assets.OurProductBanner} />
      <InquiryModal
        isOpen={openMdl}
        setIsOpen={setOpenMdl}
        productId={productDt?.id}
        productImage={imageGallery?.[0]}
      />

      <section className="product-gallery paddB">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Swiper
                loop={imageGallery.length > 1}
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
                {imageGallery.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="img-box">
                      <Image
                        src={img}
                        alt={`product-${index}`}
                        width={570}
                        height={570}
                        className="w-100 h-100"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={imageGallery.length > 1}
                spaceBetween={10}
                slidesPerView={3}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Thumbs]}
                className={`mySwiperSmall ${
                  imageGallery.length > 3 ? "" : "small-mode-swiper"
                }`}
              >
                {imageGallery.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="img-box">
                      <Image
                        src={img}
                        alt={`thumb-${index}`}
                        width={120}
                        height={120}
                        className="w-100 h-100"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-md-6">
              <span className="sec-heading text-black">{productDt?.name}</span>
              <div className="table-row">
                <div className="table-grid">
                  <div className="tb-col">
                    <span className="label">Material</span>
                    <p>{productDt?.material?.replaceAll(",", ", ")}</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Standard / Thickness</span>
                    <p>{productDt?.standard_thickness}</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Color</span>
                    <p>{productDt?.color}</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Size</span>
                    <p>{productDt?.size}</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Packaging</span>
                    <p>{productDt?.packaging} in Carton</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">Application</span>
                    <p>{productDt?.application}</p>
                  </div>

                  <div className="tb-col">
                    <span className="label">MOQ</span>
                    <p>{productDt?.moq}</p>
                  </div>
                </div>
              </div>
              <button
                className="flex-box rounded-full red-outline-btn"
                onClick={() => setOpenMdl(true)}
              >
                Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
