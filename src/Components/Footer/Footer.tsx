export default function Footer() {
    return (
        <div className="w-full py-4 px-2 md:px-20 flex flex-col ">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between border-b-1 border-b-gray-600 py-6">
            <div className="flex flex-col gap-3 basis-[45%]">
                <img className="w-[150px]"  src='images/logo.svg' />
                <div className="opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore .<a className=" border-b-2 border-b-black" href="#">Learn more</a></div>
                <div className="font-bold">OPENING HOURS</div>
                <div className="flex flex-col gap-5 md:gap-0 md:flex-row  justify-between">
                    <div className="flex flex-col opacity-70">
                        <div>Monday - Friday</div>
                        <div>8:00 am to 9:00 pm</div>
                    </div>
                    <div className="flex flex-col opacity-70">
                        <div>Friday</div>
                        <div>8:00 am to 9:00 pm</div>
                    </div>
                    <div className="flex flex-col opacity-70">
                        <div>Friday</div>
                        <div>8:00 am to 9:00 pm</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 basis-[15%]">
                <div className="font-bold">Navigation</div>
                <div className="opacity-70">Menu</div>
                <div className="opacity-70">Menu</div>
                <div className="opacity-70">Menu</div>
            </div>
            <div className="flex flex-col gap-3 basis-[15%]">
                <div className="font-bold">DISHES</div>
                <div className="opacity-70">Menu</div>
                <div className="opacity-70">Menu</div>
                <div className="opacity-70">Menu</div>
            </div>
            <div className="flex flex-col gap-3 basis-[15%]">
                <div className="font-bold">FOLLOW US</div>
                <div className="flex justify-between gap-3">
                    <img className="border-2 w-10 h-10 border-black p-1 rounded-full" src='images/facebook.svg' />
                    <img className="border-2 w-10 h-10 border-black p-1 rounded-full" src='images/instagram.svg' />
                    <img className="border-2 w-10 h-10 border-black p-1 rounded-full" src='images/twitter.svg' />
                </div>
            </div>
            </div>
            <div className="w-full flex flex-col gap-5 md:flex-row md:justify-between mt-6">
                 <div className="opacity-70">@ 2022 Restaurants. All Right Reserved. Designed by <span className="font-bold">Isaac</span></div>
                 <div className="flex gap-5 opacity-70">
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                 </div>
            </div>

        </div>
    );
}