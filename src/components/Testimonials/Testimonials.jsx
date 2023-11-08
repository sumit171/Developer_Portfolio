import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/nigam.png";
import AVTR2 from "../../assets/Screens.png";
import AVTR3 from "../../assets/ScreenHRX.png";
import AVTR4 from "../../assets/Scr-till.png";
import {Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: AVTR1,
    title: "Nigam Jyoti Mohapratap",
    review:
      "Working with Sumit has been an absolute delight. His seamless integration of cutting-edge React components has elevated our web app projects to new heights.",
  },
  {
    image: AVTR2,
    title: "Piyush Gupta",
    review:
    "I've had the pleasure of collaborating with Sumit on multiple projects. his understanding of user interaction and aesthetics is remarkable. Our web exhibits are now a digital masterpiece, thanks to his web development skills.",
  },
  {
    image: AVTR3,
    title: "Harsh Raj Jaiswal",
    review:
      "React's focus on single-page applications has revolutionized our online platform. The smooth transitions and dynamic content loading have resulted in longer user sessions and increased customer satisfaction.",
  },
  {
    image: AVTR4,
    title: "Kaustubh Prakash",
    review:
      "Sumit is a web app developer extraordinaire. His work has streamlined our Website, making it more user-friendly and efficient. feedback has been overwhelmingly positive.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      {/* <h5>Review from clients</h5> */}
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
