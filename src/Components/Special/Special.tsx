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
            title: 'Lumpia with Suace',
            desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor',
            price: 100,
            image: '/images/dish-1.png',
        },
        {
            id: 2,
            title: 'Lumpia with Suace',
            desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor',
            price: 100,
            image: '/images/dish-2.png',
        },
        {
            id: 3,
            title: 'Lumpia with Suace',
            desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor',
            price: 100,
            image: '/images/dish-3.png',
        },
        {
            id: 4,
            title: 'Lumpia with Suace',
            desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor',
            price: 100,
            image: '/images/dish-4.png',
        },
    ];
    return (
        <div className={`w-full flex flex-col  justify-between px-4 md:px-20 bg-gray-100 pt-12 mt-7`}>
            <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold">Our Special Dishes</div>
                <div className="text-center">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt </div>
                <div className="w-full flex flex-wrap justify-between mt-28 gap-y-28">
                    {
                        data.map((item: dish) => (
                            <Dish key={item.id} info={item} />
                        ))
                    }

                </div>
                <div className="w-full flex flex-col lg:flex-row py-14 gap-15 items-center xl:h-screen">
                    <img className=" w-full h-72 md:h-128 lg:basis-[50%] " src='images/dish-5.png' alt="dsgd" />
                    
                    <div className="flex flex-col basis-[45%] gap-5">
                        <div className="text-5xl font-bold">Wecome to Our <br /> Restaurant</div>
                        <div className="text-xl opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="flex gap-3">
                            <div className="bg-black p-2 px-6 rounded-tl-2xl rounded-br-2xl font-bold text-white">Menu</div>
                            <div className="bg-[#EA6D27] p-2 px-6 rounded-tl-2xl rounded-br-2xl font-bold text-white">Book a table</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}