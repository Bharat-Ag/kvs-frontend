"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { assets } from "../../../../public/assets/svgs/svg";
import CTA from "@/app/components/CTA";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";
import Link from "next/link";
import "../../../../public/assets/style/product.css";
import { useProductStore } from "@/app/store/useProductStore";
import { ProdxCardSkel } from "@/app/components/Loaders";

export default function Products() {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts().catch(() => toast.error("Failed to fetch products"));
  }, [fetchProducts]);

  return (
    <>
      <PageTitle title="Product" />
      <Banner title="Our Products" image={assets.productHero} />

      <section className="pg-product-section paddB">
        <div className="inner-area">
          <div className="container">
            <div className="pg-product-listing">
              {loading ? (<ProdxCardSkel totalFields={7} className="product-grid-row product-skel" />)
                : (
                  products.map((item) => (
                    <div className="product-card" key={item.id}>
                      <Link href={`/products/${item.slug}`} className="imglink">
                        <div className="icns">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </Link>
                      <h4 className="product-title">{item.name}</h4>
                      <Link href={`/products/${item.slug}`} className="flex-box rounded-full red-outline-btn w-100">
                        Inquiry Now
                      </Link>
                    </div>
                  ))
                )
              }
            </div>
          </div>
        </div>
      </section>

      <CTA title="Start Your Global Trade Journey" />
    </>
  );
}