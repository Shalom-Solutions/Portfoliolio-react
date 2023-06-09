import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ShinaAvatar.jpeg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar5.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Shina Ayomi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis cum officiis. Adipisci voluptatum non quae repellendus. Repellendus, rerum nisi?'
  },
  {
    avatar: AVTR2,
    name: 'Kingsley Ifeanyi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis cum officiis. Adipisci voluptatum non quae repellendus. Repellendus, rerum nisi?'
  },
  {
    avatar: AVTR3,
    name: 'Njoku Tony',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis cum officiis. Adipisci voluptatum non quae repellendus. Repellendus, rerum nisi?'
  },
  {
    avatar: AVTR4,
    name: 'Mr Ibukun',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis cum officiis. Adipisci voluptatum non quae repellendus. Repellendus, rerum nisi?'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
     // install Swiper modules
     touchEventsTarget="wrapper"
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
    >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>
  )
}

export default Testimonials