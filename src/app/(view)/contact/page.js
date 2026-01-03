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

export default function Contact() {
  return (
    <>
      <PageTitle title={"Contact"} />

      <Banner title="Contact Us" image={assets.aboutHero}/>

      <Testimonials/>

      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
