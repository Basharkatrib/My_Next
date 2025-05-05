'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Element } from 'react-scroll';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import Customer from './Customer';

  


export default function Customers() {

    const data = [
        {
            id: 1,
            desc: "The food was absolutely delicious, and the service was excellent. I loved the atmosphere in the restaurant, and the staff were very friendly. I will definitely return!",
            name: "Ali Ahmed",
            job: "Software Engineer",
            rate: 5,
            img: "images/customer1.avif"
        },
        {
            id: 2,
            desc: "The food was good, but the wait time was a bit long. I liked the dishes, but the service speed could be improved.",
            name: "Fatima Youssef",
            job: "Graphic Designer",
            rate: 3,
            img: "images/customer.png"
        },
        {
            id: 3,
            desc: "Best dining experience I've ever had! The food was delicious, the service was outstanding, and the ambiance was great. I highly recommend this restaurant.",
            name: "Youssef Mohammed",
            job: "Marketing Specialist",
            rate: 5,
            img: "images/customer3.avif"
        },
        {
            id: 4,
            desc: "The food was good, but there was some noise from nearby tables. I think the comfort of the space could be improved.",
            name: "Mona Salem",
            job: "Teacher",
            rate: 4,
            img: "images/customer4.jpeg"
        }
    ];
    
    return (
        <Element className=" bg-gray-100 w-full flex flex-col items-center px-4 md:px-20  p-12  relative mb-44 pb-50" name="Customers">
            <div className="text-3xl font-bold">Our Special Customers</div>
            <div className="text-center">Our customers love us! Here's what they have to say about their dining experiences.<br /> From delicious food to exceptional service, we strive to make every visit memorable.</div>
            <div className='w-full h-auto mt-5 hidden lg:block'>
                <Swiper
                    className='w-full !flex !justify-center !items-center h-[550px] md:h-[500] xl:h-[450px]'
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} className='w-full !flex justify-center !h-1/2`'><Customer info={item} /></SwiperSlide>
                        )
                        )}

                </Swiper>
            </div>
            <div className='w-full h-auto mt-5 lg:hidden'>
                <Swiper
                    className='w-full !flex !justify-center !items-center h-[550px] md:h-[500] xl:h-[400px]'
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} className='w-full !flex justify-center !h-1/2`'><Customer info={item} /></SwiperSlide>
                        )
                        )}

                </Swiper>
            </div>
            <div className='bg-[url(/images/back.png)] h-64 absolute -bottom-30 rounded-3xl w-[88%] flex flex-col items-center justify-center gap-6'>
                <div className='text-2xl md:text-4xl text-white font-bold text-center'>Get Or Promo Code by<br />Subscribing To our  Newsletter</div>
                <div className='px-2 md:px-4 py-2  bg-white flex flex-nowrap rounded-xl w-5/6 md:w-1/2'>
                    <input className='border-none outline-none w-full p-2 mr-2' type='text' placeholder='Enter your email'/>
                    <button className='bg-[#EA6D27] text-white py-2 px-4 rounded-[8px]'>Subscribe</button>
                </div>
                

            </div>

        </Element>
    );
}