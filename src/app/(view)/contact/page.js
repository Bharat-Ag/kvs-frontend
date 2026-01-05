'use client'
import { useEffect, useState, useRef} from "react";
import PageTitle from "@/app/components/PageTitle"
import {assets} from "../../../../public/assets/svgs/svg";
import CTA from "@/app/components/CTA";
import Testimonials from "@/app/components/Testimonials";
import Banner from "@/app/components/Banner";
import ContactForm from "@/app/components/ContactForm";
import "../../../../public/assets/style/contact.css";
import Image from "next/image";
export default function Contact() {
  return (
    <>
      <PageTitle title={"Contact"} />

      <Banner title="Contact Us" image={assets.aboutHero}/>

      <section className="contact-block paddB">
        <div className="inner-area">
          <div className="container">
            <div className="row contact-wrapper">
              <div className="col-lg-6 contact-left mb-5 mb-lg-0">
                  <span className="mini-title">Contact Us Now</span>
                  <h2 className="sec-heading">
                    We’re here to answer your questions.
                  </h2>
                  <p className="cmn-text">
                    Have a question, suggestion, or just want to say hi? We’re here and happy to hear from you!
                  </p>
                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <Image src={assets.ContactIcon} alt="contact"/>
                      </div>

                      <div className="contact-content two-col">
                        <div>
                          <p className="title">For India</p>
                          <p className="value">+91 83478 40797</p>
                        </div>

                        <div>
                          <p className="title">For International</p>
                          <p className="value">+91 83478 40797</p>
                        </div>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <Image src={assets.MailIcon} alt="email"/>
                      </div>

                      <div className="contact-content">
                        <p className="title">Send us Email</p>
                        <p className="value">contact@kavishreegroup.com</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <Image src={assets.MapperIcon} alt="mapper"/>
                      </div>

                      <div className="contact-content">
                        <p className="title">Office Address</p>
                        <p className="value">
                          F-124, Param Park Flats, Manjalpur, Vadodara, Gujarat, India
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 contact-right">
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
