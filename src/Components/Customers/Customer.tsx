interface DishProps {
    info: {
        id: number
        rate: number
        desc: string
        name: string
        img: string
        job: string
    }
}

export default function Customer({ info }: DishProps) {
    return (
        <div className="w-full md:w-3/4 h-full bg-white pb-6 pt-20 px-4 flex flex-col items-center justify-center rounded-tl-[55px] rounded-br-[55px] relative">
            <img className="-top-14 w-28 h-28 rounded-full absolute z-70" src={info.img} />
            <div key={info.id} className="flex w-full justify-center">
                {Array.from({ length: info.rate }, (_, i) => (
                    <img key={i} className="w-6" src='images/star.svg' />
                ))}
            </div>
            <div className="opacity-70 my-5 w-4/5 text-center">{info.desc}</div>
            <div className="font-bold">{info.name}</div>
            <div>{info.job}</div>
        </div>
    );
}