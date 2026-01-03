import React from "react";

export default function Advantages() {
  const advantagesList = [
    {
      title: "Global Standards, Indian Reliability",
      description:
        "Kavishree ensures every shipment meets strict international quality benchmarks with trusted Indian expertise.",
    },
    {
      title: "Quality You Can Trust",
      description:
        "From sourcing to final dispatch, Kavishree follows rigorous inspections and packaging protocols for export-ready perfection.",
    },
    {
      title: "On-Time Delivery, Every Time",
      description:
        "Our coordinated logistics network ensures your products reach global destinations smoothly and on schedule.",
    },
    {
      title: "Sea, Air & Road Complete Logistics",
      description:
        "End-to-end freight solutions covering ocean routes, fast air cargo and secure road transport under one roof.",
    },
    {
      title: "Transparent & Professional Service",
      description:
        "Clear communication, honest pricing and consistent support define every deal we make.",
    },
    {
      title: "Global Reach With Local Support",
      description:
        "Whether you're a startup buyer or a global distributor, we provide personalized assistance tailored to your trade needs.",
    },
  ];

  return (
    <>
      <section className="faq paddT">
        <div className="inner-area">
          <div className="container">
            <div className="title-row text-center">
              <span className="mini-title">Why Choose us</span>
              <h2 className="sec-heading">The Kavishree Advantage</h2>
            </div>

            <div className="adv-listing">
              {advantagesList.map((item, index) => (
                <div className="adv-item d-flex" key={index}>
                  <span className="adv-icon"></span>
                  <div>
                    <h5 className="adv-title">{item.title}</h5>
                    <p className="adv-para">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
