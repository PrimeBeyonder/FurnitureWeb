import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from "../../assets/testimonial/01.png";
import Img2 from "../../assets/testimonial/02.png";
import Img3 from "../../assets/testimonial/03.png";
import Img4 from "../../assets/testimonial/04.png";
import { Pagination } from 'swiper/modules';
const Testimonial = () => {
  return (
<section className='testimonial mt-[80px] lg:mt-[200px] relative z-20'>
        <div className='testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6'>
            <div className='w-full'>
                <div className='swiper testimonial__slider h-[400px]'>
                <Swiper
      className='swiper-wrapper my-0 mx-auto'
      loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
      320: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      987: {
          slidesPerView: 3,
      },
      
    }
    }
    modules={[Pagination]}>
      <SwiperSlide className='swiper-slide mt-8'>
        <div className='testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-5 mx-auto'>
          <div className=' items-center justify-center flex gap-2 mb-3'>
            <img src={Img1} className='mx-4' alt="" />
            <div>
              <h3 className='text-[21px] font-primary'>Nattasha Minth</h3>
              <div>Greenville, USA</div>
            </div>
          </div>
          <p className='text-[18px] p-5'>
            Lorem Ipsum is simply dummy text of the typesetting industry adfasd eetegvsd.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide mt-8'>
        <div className='testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-5 mx-auto'>
          <div className=' items-center justify-center flex gap-2 mb-3'>
            <img src={Img2} className='mx-4' alt="" />
            <div>
              <h3 className='text-[21px] font-primary'>Nattasha Minth</h3>
              <div>Greenville, USA</div>
            </div>
          </div>
          <p className='text-[18px] p-5'>
            Lorem Ipsum is simply dummy text of the typesetting industry adfasd eetegvsd.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide mt-8'>
        <div className='testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-5 mx-auto'>
          <div className=' items-center justify-center flex gap-2 mb-3'>
            <img src={Img3} className='mx-4' alt="" />
            <div>
              <h3 className='text-[21px] font-primary'>Nattasha Minth</h3>
              <div>Greenville, USA</div>
            </div>
          </div>
          <p className='text-[18px] p-5'>
            Lorem Ipsum is simply dummy text of the typesetting industry adfasd eetegvsd.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide mt-8'>
        <div className='testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-5 mx-auto'>
          <div className=' items-center justify-center flex gap-2 mb-3'>
            <img src={Img4} className='mx-4' alt="" />
            <div>
              <h3 className='text-[21px] font-primary'>Nattasha Minth</h3>
              <div>Greenville, USA</div>
            </div>
          </div>
          <p className='text-[18px] p-5'>
            Lorem Ipsum is simply dummy text of the typesetting industry adfasd eetegvsd.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
