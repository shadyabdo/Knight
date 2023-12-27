// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// owl-carousel testimonials
import testimonials_1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonials_2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonials_3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonials_4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimonials_5 from '../assets/img/testimonials/testimonials-5.jpg';
///////////////////////////
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// css link file
import '../owl-carousel/owl-carousel.css'

export default function Customers() {
  return (
    <section className='Customers'>
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[ Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        
        >
          <SwiperSlide>
            <div className="owl-Carousel-Customer">
              <div className="icon">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <p className='Customer-Comment'>

                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.

              </p>
              <img src={testimonials_1} alt="" srcset="" />

              <div className="text">
                <h3>Saul Goodman</h3>
                <span>
                  Ceo & Founder
                </span>
              </div>

            </div>

          </SwiperSlide>
          {/* ////////////////// */}
          <SwiperSlide>
            <div className="owl-Carousel-Customer">
              <div className="icon">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <p className='Customer-Comment'>

                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.

              </p>
              <img src={testimonials_2} alt="" srcset="" />

              <div className="text">
                <h3>Saul Goodman</h3>
                <span>
                  Ceo & Founder
                </span>
              </div>

            </div>

          </SwiperSlide>
          {/* ///////////// */}
          <SwiperSlide>
            <div className="owl-Carousel-Customer">
              <div className="icon">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <p className='Customer-Comment'>

                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.

              </p>
              <img src={testimonials_3} alt="" srcset="" />

              <div className="text">
                <h3>Saul Goodman</h3>
                <span>
                  Ceo & Founder
                </span>
              </div>

            </div>

          </SwiperSlide>
          {/* //////////// */}
          <SwiperSlide>
            <div className="owl-Carousel-Customer">
              <div className="icon">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <p className='Customer-Comment'>

                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.

              </p>
              <img src={testimonials_4} alt="" srcset="" />

              <div className="text">
                <h3>Saul Goodman</h3>
                <span>
                  Ceo & Founder
                </span>
              </div>

            </div>

          </SwiperSlide>
          {/* ///////////// */}
          <SwiperSlide>
            <div className="owl-Carousel-Customer">
              <div className="icon">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <p className='Customer-Comment'>

                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.

              </p>
              <img src={testimonials_5} alt="" srcset="" />

              <div className="text">
                <h3>Saul Goodman</h3>
                <span>
                  Ceo & Founder
                </span>
              </div>

            </div>

          </SwiperSlide>

        </Swiper>
      </div>
    </section>

  );
}
