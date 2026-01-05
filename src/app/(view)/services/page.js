'use client'
import { useEffect, useState, useRef} from "react";
import PageTitle from "@/app/components/PageTitle"
import {assets} from "../../../../public/assets/svgs/svg";
import CTA from "@/app/components/CTA";
import Testimonials from "@/app/components/Testimonials";
import Banner from "@/app/components/Banner";
import "../../../../public/assets/style/services.css";
import Image from "next/image";
import Link from "next/link";
import { OurServicesData } from "@/app/arrayData";
export default function Services() {
  return (
    <>
      <PageTitle title={"Services"} />

      <Banner title="Our Services" image={assets.servicesHero}/>

      <section className="our-services services-blk paddB">
        <div className="inner-area">
          <div className="container">
            <div className="service-listing">
               {OurServicesData?.map((service, idx) => (
                    <Link href={`/services/${service?.url}`} key={idx} className="service-list">
                      <div className="service-card">
                        <div className="icns">
                          <Image src={service?.icons} alt={service?.title} />
                        </div>
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-desc">{service.description}</p>
                      </div>
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>

      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
