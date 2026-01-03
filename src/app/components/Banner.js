"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const CommonBreadcrumb = dynamic(
  () => import("../components/CommonBreadcrumb"),
  { ssr: false }
);

const Banner = ({ title, image }) => {
  return (
    <section className="about-hero paddB">
      <div className="banner-blk">
        <div className="banner">
          <span className="banner-overlay"></span>
          <Image src={image} alt={title} priority />
        </div>

        <div className="header-info">
          <h1 className="h-title">{title}</h1>
          <CommonBreadcrumb />
        </div>
      </div>
    </section>
  );
};

export default Banner;
