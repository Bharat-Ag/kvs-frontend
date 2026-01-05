"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useBlogDetailStore } from "@/app/store/useBlogDetailStore";
import { useBlogStore } from "@/app/store/useBlogStore";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";
import { assets } from "../../../../../public/assets/svgs/svg";
import Image from "next/image";
import "../../../../../public/assets/style/blog.css";
import dayjs from "dayjs";
import CTA from "@/app/components/CTA";
import { BlogxCardDtSkel, BlogxCardSkel } from "@/app/components/Loaders";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { blogDetails, fetchBlogDetail, loading } = useBlogDetailStore();
  const { blogs, fetchBlogs, loading: blogLoader } = useBlogStore();

  const blog = blogDetails[slug]?.data;

  useEffect(() => {
    fetchBlogDetail(slug);
    fetchBlogs();
  }, [slug]);

  // Next / Prev logic using blog listing
  const index = blogs?.findIndex((b) => b.slug === slug);
  const prev = blogs[index - 1] || null;
  const next = blogs[index + 1] || null;

  const relatedBlogs = blogs?.filter((item) => item.slug !== slug)?.slice(0, 3);

  const date = blog?.created_at ? dayjs(blog.created_at) : null;

  return (
    <>
      <PageTitle title={blog ? `${blog.title} - Blog` : ""} />
      <Banner title="Blogs" image={assets.blogHero} crumbLvl={1} />
      <section className="bg-details paddB">
        <div className="inner-area">
          <div className="container">
            <div className="cc-row">
              {loading ? (
                <BlogxCardDtSkel className="blogxDt-loader" totalFields={5} />
              )
                : (
                  <>
                    {blog?.images?.[0] && (
                      <div className="img-box">
                        <Image
                          src={blog.images[0]}
                          alt={blog.title}
                          width={570}
                          height={370}
                          priority
                        />
                      </div>
                    )}
                    <span className="mini-title text-capitalize date-dt">{date?.format("DD MMM YYYY").toLowerCase()}</span>
                    <div className="content">
                      <h1 className="sec-heading">{blog?.title}</h1>
                      <p className="cmn-text">{blog?.content}</p>
                    </div>

                    <div className="pagination">
                      {prev && (
                        <Link className="pg-btn rounded-full red-outline-btn flex-box" href={`/blogs/${prev.slug}`}>
                          Previous Blog
                        </Link>
                      )}
                      {next && (
                        <Link className="pg-btn rounded-full red-btn flex-box" href={`/blogs/${next.slug}`}>
                          Next Blog
                        </Link>
                      )}
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </section>

      <section className="pg-blog-section paddB">
        <div className="inner-area">
          <div className="container">
            <div className="pg-blog-listing">
              {blogLoader ? (
                <BlogxCardSkel className="blogx-loader" totalFields={5} />
              ) : (
                relatedBlogs?.slice(0, 3)?.map((item) => {
                  const date = dayjs(item.created_at);
                  return (
                    <Link href={`/blogs/${item.slug}`} className="blog-card" key={item.id}>
                      <div className="blog-inner">
                        <div className="icns">
                          <div className="date-block">
                            <span className="day">{date.format("DD")}</span>
                            <span className="month">{date.format("MMM").toLowerCase()}</span>
                            <span className="year">{date.format("YYYY")}</span>
                          </div>
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div className="content">
                          <h4 className="blog-title">{item.title}</h4>
                          <p className="blog-desc">{item.short_description}</p>
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

      <CTA />
    </>
  );
}