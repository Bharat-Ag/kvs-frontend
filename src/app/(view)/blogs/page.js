"use client";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";
import React, { useEffect } from "react";
import { assets } from "../../../../public/assets/svgs/svg";
import CTA from "@/app/components/CTA";
import Link from "next/link";
import "../../../../public/assets/style/blog.css";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { useBlogStore } from "@/app/store/useBlogStore";
import { BlogxCardSkel } from "@/app/components/Loaders";

export default function Blog() {
  const { blogs, fetchBlogs, loading } = useBlogStore();

  useEffect(() => {
    fetchBlogs().catch(() => {
      toast.error("Failed to fetch blogs. Please try again.");
    });
  }, [fetchBlogs]);

  return (
    <>
      {/* <PageTitle title="Blogs" /> */}
      <Banner title="Blogs" image={assets.blogHero} crumbLvl={2} />

      <section className="pg-blog-section paddB">
        <div className="inner-area">
          <div className="container">
            <div className="pg-blog-listing">
              {loading ? (
                <BlogxCardSkel className="blogxCard-loader" totalFields={5} />
              ) : (
                blogs.map((item) => {
                  const date = dayjs(item.created_at);

                  return (
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="blog-card"
                      key={item.id}
                    >
                      <div className="blog-inner">
                        <div className="icns">
                          <div className="date-block">
                            <span className="day">{date.format("DD")}</span>
                            <span className="month">
                              {date.format("MMM").toLowerCase()}
                            </span>
                            <span className="year">{date.format("YYYY")}</span>
                          </div>
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div className="content">
                          <h4 className="blog-title">{item.title}</h4>
                          <p className="blog-desc">
                            {item.short_description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <CTA /> */}
    </>
  );
}