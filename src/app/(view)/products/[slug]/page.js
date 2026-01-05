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
import { useProductDetailStore } from "@/app/store/productDetailStore";
import { ProdDxtsSktl, ProdGalleySktl } from "@/app/components/Loaders";

export default function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { slug } = useParams();
  const { productDetails, fetchProductDetail, loading } = useProductDetailStore();
  const product = productDetails[slug]?.data;
  const [imageGallery, setImageGallery] = useState([]);
  const [openMdl, setOpenMdl] = useState(false);

  useEffect(() => {
    fetchProductDetail(slug).catch(() => toast.error("Failed to fetch product details"));
  }, [slug, fetchProductDetail]);

  useEffect(() => {
    if (product) setImageGallery(product.images || []);
  }, [product]);

  return (
    <>
      <PageTitle title={"Products Details"} />
      <Banner title={"Our Products"} image={assets.OurProductBanner} crumbLvl={1} />
      <InquiryModal isOpen={openMdl} setIsOpen={setOpenMdl} productId={product?.id} productImage={imageGallery?.[0]} productName={product?.name} />

      <section className="product-gallery paddB">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {loading ? (<ProdGalleySktl />)
                : (<>
                  <Swiper
                    loop={imageGallery.length > 1}
                    spaceBetween={10}
                    thumbs={{
                      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                  >
                    {imageGallery.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="img-box">
                          <Image src={img} alt={`product-${index}`} width={570} height={570} className="w-100 h-100" />
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
                    className={`mySwiperSmall ${imageGallery.length > 3 ? "" : "small-mode-swiper"}`}
                  >
                    {imageGallery.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="img-box">
                          <Image src={img} alt={`thumb-${index}`} width={120} height={120} className="w-100 h-100" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>)
              }
            </div>
            <div className="col-md-6">
              <div className="dt-shows-box">
                {loading ? (<ProdDxtsSktl />)
                  : (
                    <>
                      <span className="sec-heading text-black">{product?.name}</span>
                      <div className="table-row">
                        <div className="table-grid">
                          <div className="tb-col">
                            <span className="label">Material</span>
                            <p>{product?.material?.replaceAll(",", ", ")}</p>
                          </div>

                          <div className="tb-col">
                            <span className="label">Standard / Thickness</span>
                            <p>{product?.standard_thickness}</p>
                          </div>

                          <div className="tb-col">
                            <span className="label">Color</span>
                            <p>{product?.color}</p>
                          </div>

                          <div className="tb-col">
                            <span className="label">Size</span>
                            <p>{product?.size}</p>
                          </div>

                          <div className="tb-col">
                            <span className="label">Packaging</span>
                            <p>{product?.packaging} in Carton</p>
                          </div>

                          <div className="tb-col">
                            <span className="label">Application</span>
                            <p>{product?.application}</p>
                          </div>

                          <div className="tb-col">
                            <span className="label">MOQ</span>
                            <p>{product?.moq}</p>
                          </div>
                        </div>
                      </div>
                      <button className="flex-box rounded-full red-outline-btn" onClick={() => setOpenMdl(true)}>
                        Inquiry Now
                      </button>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}