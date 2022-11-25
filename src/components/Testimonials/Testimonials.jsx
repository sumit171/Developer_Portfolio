import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import {Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: AVTR1,
    title: "abcd",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dicta numquam voluptates, eligendi blanditiis rem quas. Est id earum eveniet adipisci dicta. Hic officiis dolores sequi sunt ullam, exercitationem distinctio.",
  },
  {
    image: AVTR2,
    title: "jklmn",
    review:
      "ipsum dolor, sit amet consectetur adipisicing elit. Maxime enim, rem nesciunt reprehenderit voluptas quam placeat ex temporibus mollitia, accusamus consequatur nemo obcaecati consequuntur suscipit iure velit dolorem at tempore!",
  },
  {
    image: AVTR3,
    title: "xyz",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam. Omnis repudiandae laboriosam commodi voluptate, distinctio consectetur debitis molestiae fuga.",
  },
  {
    image: AVTR4,
    title: "qwerty",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam. Omnis repudiandae laboriosam commodi voluptate, distinctio consectetur debitis molestiae fuga.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true}}
      >
        {data.map((props) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={props.image} alt="avatar-one" />
              </div>
              <h5 className="client__name">{props.title}</h5>
              <small className="client__review">{props.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
