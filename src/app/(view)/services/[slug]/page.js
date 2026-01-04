'use client'
import { useEffect, useState, useRef} from "react";
import PageTitle from "@/app/components/PageTitle"
import {assets} from "../../../../../public/assets/svgs/svg";
import CTA from "@/app/components/CTA";
import Testimonials from "@/app/components/Testimonials";
import Banner from "@/app/components/Banner";
import "../../../../../public/assets/style/services.css";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { OurServicesData } from "@/app/arrayData";
export default function ServiceDetail() {
  const { slug } = useParams();

  const service = OurServicesData.find(
    (item) => item.url === slug
  );

  if (!service) return null;

  return (
    <>
      <PageTitle title={"Services"} />

      <Banner  title={service.title} image={service.heroImage}/>

      <section className="service-ingo">
        <div className="inner-area">
            <div className="container"></div>
        </div>
      </section>


      <Testimonials/>

      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
