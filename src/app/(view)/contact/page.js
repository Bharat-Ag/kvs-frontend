'use client'
import { Progress } from "antd";
import { useEffect, useState, useRef} from "react";
import PageTitle from "@/app/components/PageTitle";
import "../../../../public/assets/style/about.css";
import Image from "next/image";
import { Image as AntImage } from "antd";
import { assets} from "../../../../public/assets/svgs/svg";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import {expertiseData} from '../../arrayData'
import Testimonials from "@/app/components/Testimonials";
import Banner from "@/app/components/Banner";
import ContactForm from "@/app/components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageTitle title={"Contact"} />

      <Banner title="Contact Us" image={assets.aboutHero}/>

      <section className="contact-block">
        <div className="inner-area">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-left"></div>
              <div className="contact-right">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>

      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
