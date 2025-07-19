import React from "react";
import Slider from "react-slick";
import "./TestimonialsSection.css";

const testimonials = [
  {
    img: "/images/parent1.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/images/parent2.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/images/parent3.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  // और भी testimonials जोड़ें...
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3700,
  responsive: [
    { breakpoint: 1100, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1 } },
  ]
};

export default function TestimonialsSection() {
  return (
    <section className="testimonial-section">
      <div className="testi-head">
        <span className="testi-label">Our Testimonials</span>
        <h2 className="testi-main-title">Parents Say About Us</h2>
      </div>

      <Slider {...sliderSettings} className="testi-cards-slider">
        {testimonials.map((t, i) => (
          <div key={i}>
            <div className="testi-card">
              <div className="testi-card-row">
                <div className="testi-avatar">
                  <img src={t.img} alt={t.name} />
                </div>
                <div>
                  <div className="testi-client">
                    {t.name}
                    <span className="testi-quote">
                      <i className="fas fa-quote-right"></i>
                    </span>
                  </div>
                  <div className="testi-prof">{t.profession}</div>
                  <div className="testi-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <i key={j} className="fas fa-star" />
                    ))}
                  </div>
                </div>
              </div>
              <hr className="testi-divider" />
              <div className="testi-content">{t.text}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
