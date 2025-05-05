export default function () {

    const data = [
        {
            id: 1,
            title_left: "Lorem ipsum dolor sit amet, consectetur",
            title_right: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 2,
            title_left: "Lorem ipsum dolor sit amet, consectetur",
            title_right: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 3,
            title_left: "Lorem ipsum dolor sit amet, consectetur",
            title_right: "Lorem ipsum dolor sit amet, consectetur"
        },
    ]
    return (
        <div className="md:min-h-screen bg-white w-full flex flex-col-reverse lg:flex-row gap-9 lg:justify-between px-4 md:px-20 p-12 items-center">
            <div className="flex flex-col gap-5">
                <div className="text-5xl font-bold">Our Expects Chef</div>
                <div className="text-xl opacity-60">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</div>
                {
                    data.map((item) => (
                        <div key={item.id} className="w-full flex flex-col md:flex-row gap-3 md:justify-between mb-5">
                            <div className="flex basis-[40%] gap-2">
                                <img src='images/check.svg' />
                                <div className="opacity-60">{item.title_left}</div>
                            </div>
                            <div className="flex basis-[40%] gap-2">
                                <img src='images/check.svg' />
                                <div className="opacity-60">{item.title_right}</div>
                            </div>
                        </div>
                    ))}
                <div className="flex gap-3">
                    <div className="bg-black p-2 px-6 rounded-tl-2xl rounded-br-2xl font-bold text-white shadow-2xl cursor-pointer">Menu</div>
                    <div className="bg-[#EA6D27] p-2 px-6 rounded-tl-2xl rounded-br-2xl font-bold text-white shadow-2xl cursor-pointer">Book a table</div>
                </div>
            </div>
            <div>
                <img className="h-128" src='images/chef.png' />
            </div>
        </div>
    );
}