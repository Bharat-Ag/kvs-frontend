import Link from "next/link";

export default function CTA({ title }) {
  return (
    <>
      <section className="cta">
        <div className="inner-area">
          <div className="container">
            <div className="c-row d-flex justify-content-between">
              <h2 className="sec-heading text-white">{title}</h2>
              <Link
                href="#"
                className="rounded-full white-outline-btn flex-box"
              >
                Inquiry Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
