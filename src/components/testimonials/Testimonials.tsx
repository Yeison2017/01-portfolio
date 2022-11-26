import "./testimonials.css";
import { dataTestimonials } from "../../data/testimonials.data";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {dataTestimonials.map((item) => (
                    <SwiperSlide className="testimonial" key={item.id}>
                        <div className="client__avatar">
                            <img src={item.avatar} alt={item.avatar} />
                        </div>
                        <h5 className="client__name">{item.name}</h5>
                        <small className="client__review">{item.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
