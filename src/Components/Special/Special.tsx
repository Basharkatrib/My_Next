'use client';

import {Link, Element } from 'react-scroll';
import Image from "next/image";
import Dish from "../Dish/Dish";



export default function Special() {

    interface dish {
        id: number
        title: string,
        desc: string,
        price: number,
        image: string
    };


    const data = [
        {
            id: 1,
            title: 'Grilled Chicken Shawarma',
            desc: 'Tender grilled chicken slices wrapped in warm bread, served with garlic sauce and fresh veggies.',
            price: 45,
            image: '/images/dish-1.png',
        },
        {
            id: 2,
            title: 'Creamy Mushroom Pasta',
            desc: 'Pasta tossed in a rich cream sauce with sautéed mushrooms and a hint of parmesan cheese.',
            price: 60,
            image: '/images/dish-2.png',
        },
        {
            id: 3,
            title: 'Spicy Beef Tacos',
            desc: 'Crispy tacos filled with seasoned beef, fresh lettuce, tomatoes, and a spicy chipotle sauce.',
            price: 50,
            image: '/images/dish-3.png',
        },
        {
            id: 4,
            title: 'Margherita Pizza',
            desc: 'Classic pizza topped with tomato sauce, fresh mozzarella, and fragrant basil leaves.',
            price: 55,
            image: '/images/dish-4.png',
        },
    ];
    
    return (
        <Element className={`w-full flex flex-col  justify-between px-4 md:px-20 bg-gray-100 pt-12 mt-7`} name='Dishes'>
            <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold">Our Special Dishes</div>
                <div className="text-center">Discover our delicious dishes, crafted with care<br />and bursting with fresh, authentic flavors.</div>
                <div className="w-full flex flex-wrap justify-between mt-28 gap-y-28">
                    {
                        data.map((item: dish) => (
                            <Dish key={item.id} info={item} />
                        ))
                    }

                </div>
                <div className="w-full flex flex-col lg:flex-row py-14 gap-15 items-center xl:h-screen">
                    <img data-aos="fade-right" data-aos-duration="3000" className=" w-full h-72 md:h-128 lg:basis-[50%] " src='images/dish-5.png' alt="dsgd" />
                    
                    <div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col basis-[45%] gap-5">
                        <div className="text-5xl font-bold">Welcome to Our <br /> Restaurant</div>
                        <div className="text-xl opacity-60">Indulge in our signature dish, expertly crafted with the finest ingredients and bursting with rich, unforgettable flavor.</div>
                        <div className="flex gap-3">
                         <div className="bg-black p-2 px-6 rounded-tl-2xl rounded-br-2xl cursor-pointer font-bold text-white"><Link to='Dishes' smooth={true} duration={500}>Menu</Link></div>
                                            <div className="bg-[#EA6D27] p-2 px-6 rounded-tl-2xl rounded-br-2xl cursor-pointer font-bold text-white"><Link to='Home' smooth={true} duration={500}>Book a table</Link></div>
                        </div>
                    </div>

                </div>

            </div>

        </Element>
    );
}