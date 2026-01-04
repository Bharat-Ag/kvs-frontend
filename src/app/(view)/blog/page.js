"use client";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";
import React, { useEffect, useState } from "react";
import { assets } from "../../../../public/assets/svgs/svg";
import ApiService from "@/app/service/api/api.services";
import CTA from "@/app/components/CTA";
import Link from "next/link";
import "../../../../public/assets/style/blog.css";

export default function Blog() {
  const [blogData, setBlogData] = useState(null);

  const fetchBlog = async () => {
    try {
      const blogs = await ApiService.getBlogs();
      setBlogData(blogs?.data);
    } catch (error) {
      toast.error("Failed to fetch products. Please try again.");
      return null;
    }
  };

  useEffect(() => {
    fetchBlog();

    console.log("blogData", blogData);
  }, []);

  return (
    <>
      <PageTitle title={"Blog"} />
      <Banner title="Blog" image={assets.blogHero} />

      <section className="pg-blog-section paddB">
        <div className="inner-area">
          <div className="container">
            <div className="pg-blog-listing">
              {blogData?.map((item, idx) => (
                <Link
                  href={`/blogs/${item?.slug}`}
                  className="blog-card"
                  key={idx}
                >
                  <div className="blog-inner">
                    <div className="icns">
                    <div className="date-block"></div>
                      <img src={item?.image} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="blog-title">{item.title}</h4>
                      <p className="blog-desc">{item.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
