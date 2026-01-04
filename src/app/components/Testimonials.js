import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { testimonialsData } from "../arrayData";
import { assets } from "../../../public/assets/svgs/svg";

const Testimonials = ({className=''}) => {
  return (
    <section className={`testimonials paddB ${className}`}>
        <div className="inner-area">
            <div className="testimonial-card">
                <div className="testimonial-image">
                    <Image src={assets.testimonialImage1} alt="testimonial"/>
                </div>
                <div className="testimonial-content">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop
                        className="testimonial-swiper"
                    >
                        {testimonialsData.map((item, index) => (
                            <SwiperSlide key={index}>
                                    <div className="testimonial-content-inner">
                                        <div className="quote-icon">
                                        <Image src={assets.DoubleQuote} alt="double-quote"/>
                                        </div>

                                        <p className="testimonial-message">
                                        {item.message}
                                        </p>

                                        <div className="testimonial-user">
                                            <h4 className="name">{item.name}</h4>
                                        </div>
                                    </div>
                            
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
