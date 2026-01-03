"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../../../public/assets/svgs/svg";
import ApiService from "@/app/service/api/api.services";
import CTA from "@/app/components/CTA";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";
import Link from "next/link";
import "../../../../public/assets/style/product.css";

export default function Contact() {
  const [productData, setProductData] = useState(null);
  const fetchProducts = async () => {
    try {
      const products = await ApiService.getProducts();
      setProductData(products?.data);
    } catch (error) {
      toast.error("Failed to fetch products. Please try again.");
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <>
      <PageTitle title={"Product"} />

      <Banner title="Our Products" image={assets.productHero} />
      <section className="pg-product-section paddB">
        <div className="inner-area">
          <div className="container">
            <div className="pg-product-listing">
              {productData?.map((item, idx) => (
                <div className="product-card" key={idx}>
                  <Link href={`/products/${item?.slug}`} className="imglink">
                    <div className="icns">
                      <img src={item?.image} alt="" />
                    </div>
                  </Link>
                  <h4 className="product-title">{item.name}</h4>
                  <Link
                    href={`/products/${item?.slug}`}
                    className="flex-box rounded-full red-outline-btn w-100"
                  >
                    Inquiry Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
