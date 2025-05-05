function Banner() {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-between px-4 md:px-20 bg-white   h-auto relative">
            <img className="absolute w-[150px] left-[57%] top-[17%] opacity-25" src='images/left.svg' />
            <img className="absolute w-[150px] right-0 top-[10%] opacity-25" src='images/right.svg' />
            <img className="absolute w-[150px] right-0 top-[55%] opacity-25" src='images/bottom.svg' />
            <div className="basis-[50%] flex flex-col  gap-4 mt-28">
                <img className="w-[120px]" src='images/Group.svg' />
                <div className="text-6xl font-bold">We provide the <br />
                    best food for you</div>
                <div className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className="flex gap-3">
                    <div className="bg-black p-2 px-6 rounded-tl-2xl rounded-br-2xl font-bold text-white">Menu</div>
                    <div className="bg-[#EA6D27] p-2 px-6 rounded-tl-2xl rounded-br-2xl font-bold text-white">Book a table</div>
                </div>
                <div className="flex gap-3">
                    <img className="border-2 w-14 border-black p-2 rounded-full" src='images/facebook.svg' />
                    <img className="border-2 w-14 border-black p-2 rounded-full" src='images/instagram.svg' />
                    <img className="border-2 w-14 border-black p-2 rounded-full" src='images/twitter.svg' />
                </div>
            </div>
            <div className="basis-1/2 mt-14 md:mt-28 max-h-full">
                <img className="w-full h-7/8" src='images/banner.png' />
            </div>
        </div>
    );
}
export default Banner;