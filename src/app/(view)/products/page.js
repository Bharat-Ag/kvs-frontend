"use client";
import { useEffect, useState } from "react";
import "../../../../public/assets/style/about.css";
import { toast } from "react-toastify";
import { assets } from "../../../../public/assets/svgs/svg";
import ApiService from "@/app/service/api/api.services";
import CTA from "@/app/components/CTA";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";
import { ProductList } from "@/app/arrayData";
import Link from "next/link";

export default function Contact() {
  const fetchProducts = async () => {
    try {
      const products = await ApiService.getProducts();
      console.log("Products received in page:", products.data);
      return products.data;
    } catch (error) {
      console.error("Error caught in page:", error);
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
              {ProductList?.map((item, idx) => (
                <div className="product-card">
                  <Link href={`/product/${item.inqUrl}`} className="">
                    <div className="icns"></div>
                  </Link>
                  <h4 className="product-title">{item.title}</h4>
                  <p className="product-desc">{item.description}</p>
                  <Link
                    href={`/product/${item.inqUrl}`}
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
