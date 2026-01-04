'use client';

import { Tabs } from "antd";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import PageTitle from "@/app/components/PageTitle";
import Banner from "@/app/components/Banner";
import CTA from "@/app/components/CTA";
import Testimonials from "@/app/components/Testimonials";
import { OurServicesData } from "@/app/arrayData";
import "../../../../../public/assets/style/services.css";
import Advantages from "@/app/components/Advantages";

const { TabPane } = Tabs;

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = useParams();

  const activeService =
    OurServicesData.find((item) => item.url === slug) || OurServicesData[0];

  const handleTabChange = (key) => {
    router.push(`/services/${key}`);
  };

  return (
    <>
      <PageTitle title="Services" />

      <Banner
        title={activeService.title}
        image={activeService.heroImage}
      />

      <section className="service-ingo">
        <div className="inner-area">
          <div className="container">
            <Tabs
              tabPlacement="left"
              activeKey={activeService.url}
              onChange={handleTabChange}
              className="service-vertical-tabs"
            >
              {OurServicesData.map((service) => (
                <TabPane
                  tab={<span className="tab-title">{service.title}</span>}
                  key={service.url}
                >
                  <div className="service-content">
                    <div className="service-text">
                      <h2 className="sec-heading">{service.detail.heading}</h2>

                      {service.detail.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div className="service-image">
                      <Image
                        src={service.detail.image}
                        alt={service.title}
                        width={480}
                        height={600}
                        className="img-rounded"
                      />
                    </div>
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <Advantages/>

      <Testimonials className="paddT" />
      <CTA title="Start Your Global Trade Journey" />
    </>
  );
}
