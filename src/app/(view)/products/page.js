import PageTitle from "../../components/PageTitle";
import Banner from "../../components/Banner";
import Link from "next/link";
import { ProductList } from "../../arrayData";
import { assets } from "../../../../public/assets/svgs/svg";
import CTA from "../../components/CTA";
import "../../../../public/assets/style/product.css"

export default function Products() {
  return (
    <>
      <PageTitle title={"Products"} />
      <Banner title={"Our Products"} image={assets.OurProductBanner} />
      <section className="pg-product-section paddB">
        <div className="inner-area">
          <div className="container">
            <div className="pg-product-listing">
              {ProductList?.map((item, idx) => (
                <div className="product-card">
                  <Link href={`/product/${item.inqUrl}`} className="">
                    <div className="icns"></div>
                  </Link>
                  <h4 className="product-title">{item.title}</h4>
                  <p className="product-desc">{item.description}</p>
                  <Link
                    href={`/product/${item.inqUrl}`}
                    className="flex-box rounded-full red-outline-btn w-100"
                  >
                    Inquiry Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
