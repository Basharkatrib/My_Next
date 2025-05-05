'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay } from 'swiper/modules';

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
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
            name: "Ama Ampomah",
            job: "CEO & Founder Inc",
            rate: 4,
            img: "images/customer.png"
        },
    ]
    return (
        <div className="min-h-screen bg-gray-100 w-full flex flex-col items-center px-2 md:px-20  p-12 pb-64 relative">
            <div className="text-3xl font-bold">Our Special Dishes</div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt </div>
            <div className='w-full h-auto mt-5'>
                <Swiper
                    className='w-full !flex !justify-center !items-center h-[400px]'
                    modules={[Pagination, Autoplay]}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} className='w-full !flex justify-center !h-1/2`'><Customer info={item} /></SwiperSlide>
                        )
                        )}

                </Swiper>
            </div>
            <div className='w-full bg'>

            </div>

        </div>
    );
}