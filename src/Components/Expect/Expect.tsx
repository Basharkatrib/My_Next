'use client';

import { Link, Element } from 'react-scroll';

export default function ChefSection() {

    const data = [
        {
            id: 1,
            title_left: "Over 15 years crafting culinary masterpieces",
            title_right: "Specialized in Mediterranean and gourmet cuisine"
        },
        {
            id: 2,
            title_left: "Dedicated to using fresh, organic ingredients",
            title_right: "Trained in top international culinary schools"
        },
        {
            id: 3,
            title_left: "Known for artistic food presentation",
            title_right: "Focused on delivering unforgettable flavors"
        },
    ];

    return (
        <Element
            className="md:min-h-screen bg-white w-full flex flex-col-reverse lg:flex-row gap-9 lg:justify-between px-4 md:px-20 p-12 items-center"
            name="Chef"
        >
            <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col gap-5">
                <div className="text-5xl font-bold">Our Expert Chef</div>
                <div className="text-xl opacity-60">
                    Discover the passion and expertise behind every dish. <br />
                    Our chef brings global techniques and local flavors <br />
                    together for a truly remarkable dining experience.
                </div>
                {
                    data.map((item) => (
                        <div key={item.id} className="w-full flex flex-col md:flex-row gap-3 md:justify-between mb-5">
                            <div className="flex basis-[40%] gap-2 items-center">
                                <img className='w-6' src="images/check.svg" alt="check icon" />
                                <div className="opacity-60">{item.title_left}</div>
                            </div>
                            <div className="flex basis-[40%] gap-2 items-center">
                                <img className='w-6' src="images/check.svg" alt="check icon" />
                                <div className="opacity-60">{item.title_right}</div>
                            </div>
                        </div>
                    ))
                }
                <div className="flex gap-3">
                    <div className="bg-black p-2 px-6 rounded-tl-2xl rounded-br-2xl cursor-pointer font-bold text-white">
                        <Link to="Dishes" smooth={true} duration={500}>Menu</Link>
                    </div>
                    <div className="bg-[#EA6D27] p-2 px-6 rounded-tl-2xl rounded-br-2xl cursor-pointer font-bold text-white">
                        <Link to="Home" smooth={true} duration={500}>Book a table</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000">
                <img className="h-128" src="images/chef.png" alt="Chef" />
            </div>
        </Element>
    );
}
