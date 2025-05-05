'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import Customer from './Customer';


export default function Customers() {

    const data = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
            name: "Ama Ampomah",
            job: "CEO & Founder Inc",
            rate: 4,
            img: "images/customer.png"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
            name: "Ama Ampomah",
            job: "CEO & Founder Inc",
            rate: 2,
            img: "images/customer.png"
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
            name: "Ama Ampomah",
            job: "CEO & Founder Inc",
            rate: 5,
            img: "images/customer.png"
        },
        {
            id: 4,
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
            name: "Ama Ampomah",
            job: "CEO & Founder Inc",
            rate: 4,
            img: "images/customer.png"
        },
    ]
    return (
        <div className=" bg-gray-100 w-full flex flex-col items-center px-4 md:px-20  p-12  relative mb-44 pb-50">
            <div className="text-3xl font-bold">Our Special Dishes</div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt </div>
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

        </div>
    );
}