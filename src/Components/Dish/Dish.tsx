interface DishProps {
    info: {
        id: number
        title: string
        desc: string
        price: number
        image: string
    }
}

export default function Dish({ info }: DishProps) {
    return (
        <div className="relative basis-full sm:basis-[45%] xl:mb-0 xl:basis-[23%] border-[1px] hover:shadow-2xl hover:bg-white transition-all duration-300  border-white rounded-tl-4xl rounded-br-4xl flex flex-col gap-4 items-center justify-end h-64 pb-9">
            <div className="font-bold">{info.title}</div>
            <div className="opacity-45 text-center">{info.desc}</div>
            <div className="absolute -top-20 w-36">
                <img className="w-full " src={info.image} />
                <div className="bg-[#101A24] text-white py-3 px-2 rounded-full text-[11px] absolute top-13 -right-6 z-50 shadow-2xl">${info.price}</div>
            </div>
        </div>
    );
}
