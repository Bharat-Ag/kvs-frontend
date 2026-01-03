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

export default function About() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const shippingSectionRef = useRef(null);
  const [hasShippingAnimated, setHasShippingAnimated] = useState(false);

  const [progressValues, setProgressValues] = useState(
    expertiseData.map(() => 0)
  );

  const [experience, setExperience] = useState(0);
  const [shipments, setShipments] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setter, duration = 1200) => {
      let start = 0;
      const increment = Math.ceil(target / (duration / 16));

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(start);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShippingAnimated) {
          animateCounter(10, setExperience);
          animateCounter(500, setShipments);
          setHasShippingAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (shippingSectionRef.current) {
      observer.observe(shippingSectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasShippingAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          requestAnimationFrame(() => {
            setProgressValues(expertiseData.map(item => item.value));
          });
          setHasAnimated(true);
          observer.disconnect(); // one-time animation, done
        }
      },
      { threshold: 0.3 } // 30% visible is enough
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <PageTitle title={"About"} />

      <Banner title="About Us" image={assets.aboutHero}/>

      <section className="about-main paddB">
        <div className="inner-area">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-images">
                <div className="img img-top">
                  <Image src={assets.aboutMain1} alt="Air Cargo" />
                </div>
                <div className="img img-bottom">
                  <Image src={assets.aboutMain2} alt="Sea Cargo" />
                </div>
              </div>
              <div className="about-content">
                <span className="mini-title">About us</span>

                <h2 className="sec-heading">
                  Kavishree Exim is a trusted import-export company committed
                </h2>
                <p className="cmn-text">
                  to delivering reliable, efficient, and compliant global trade
                  solutions. With a strong focus on quality and customer
                  satisfaction, we help businesses connect with international
                  markets through seamless logistics and professional trade
                  support.
                </p>
                <p className="cmn-text">
                  Our operations are built on transparency, precision, and a
                  deep understanding of global trade requirements. From sourcing
                  and documentation to shipment execution, Kavishree Exim
                  ensures every process is handled with care and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise paddB">
      <div className="inner-area">
        <div className="container">
          <h2 className="sec-heading center">Our Expertise</h2>

          <div className="expertise-wrap"  ref={sectionRef}>
            {expertiseData.map((item, index) => (
              <div className="expertise-item" key={index}>
                <div className="expertise-head">
                  <span className="exp-name">{item.label}</span>
                  <span className="exp-percent">{progressValues[index]}%</span>
                </div>

                <Progress
                  percent={progressValues[index]}
                  showInfo={false}
                  strokeColor="#cc0001"
                  railColor="#e5e5e5"
                  strokeWidth={20}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
      </section>

      <section className="certificate paddB">
        <div className="inner-area">
          <div className="container">
            <h2 className="sec-heading center">Our Certificates</h2>
            <div className="certi-wrapper">
              <AntImage.PreviewGroup>
                <div className="certi-block">
                  <AntImage
                    src="https://placehold.co/370x424"
                    preview={{ src: "https://placehold.co/1024x600" }}
                    alt="Certificate 1"
                  />
                </div>

                <div className="certi-block">
                  <AntImage
                    src="https://placehold.co/370x424"
                    preview={{ src: "https://placehold.co/1024x600" }}
                    alt="Certificate 2"
                  />
                </div>

                <div className="certi-block">
                  <AntImage
                    src="https://placehold.co/370x424"
                    preview={{ src: "https://placehold.co/1024x600" }}
                    alt="Certificate 3"
                  />
                </div>
              </AntImage.PreviewGroup>
            </div>
          </div>
        </div>
      </section>

      <section className="about-shipping paddB" ref={shippingSectionRef}>
        <div className="inner-area">
          <div className="container">
            <div className="shipping-wrapper">

              {/* LEFT IMAGE */}
              <div className="shipping-image">
                <Image src={assets.aboutImportExport} alt="Sea Cargo" />

                {/* EXPERIENCE COUNTER */}
                <div className="exp-badge">
                  <p className="exp-num">{experience}<span>+</span></p>
                  <span className="exp-text">years of Experience</span>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="shipping-content">
                <span className="mini-title">Your Trusted Shipping Partner</span>
                <h2 className="sec-heading">
                  Reliable Import–Export Services, Worldwide
                </h2>
                <div className="wrapper">
                  <div className="shipping-mid">
                    <a href="#" className="red-btn">Get Started Now</a>

                    <div className="shipment-counter">
                      <p>{shipments}<span>+</span></p>
                      <span>successful shipments</span>
                    </div>
                  </div>
                  <span className="divider"></span>
                  <p className="cmn-text">
                    Kavishree Exim specializes in comprehensive ocean freight
                    solutions, including full container load (FCL), less than
                    container load (LCL), and specialized cargo movements. Backed by
                    a reliable global carrier network and strong industry expertise,
                    we ensure smooth coordination, dependable transit schedules, and
                    cost-efficient shipping solutions for businesses worldwide.
                  </p>
                </div>
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
