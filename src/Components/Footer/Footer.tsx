'use client';

import { Element } from 'react-scroll';

export default function Footer() {
    return (
        <Element className="w-full py-4 px-4 md:px-20 flex flex-col bg-white" name='About'>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between border-b-[1px] border-b-gray-600 py-6">
                <div className="flex  flex-col gap-3 basis-[45%]">
                    <img className="w-[150px]" src='images/logo.svg' alt="Restaurant Logo" />
                    <div className="opacity-70">
                        Our restaurant offers the finest Mediterranean cuisine, crafted with fresh ingredients and a passion for flavor. <br />
                        Experience a unique dining atmosphere with exceptional service. <br />
                        <a className="border-b-2 border-b-black" href="#">Learn more</a>
                    </div>
                    <div className="font-bold">OPENING HOURS</div>
                    <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
                        <div className="flex flex-col opacity-70">
                            <div>Monday - Friday</div>
                            <div>8:00 am to 9:00 pm</div>
                        </div>
                        <div className="flex flex-col opacity-70">
                            <div>Saturday</div>
                            <div>10:00 am to 8:00 pm</div>
                        </div>
                        <div className="flex flex-col opacity-70">
                            <div>Sunday</div>
                            <div>Closed</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 basis-[15%]">
                    <div className="font-bold cursor-pointer">Navigation</div>
                    <div className="opacity-70 cursor-pointer">Home</div>
                    <div className="opacity-70 cursor-pointer">About Us</div>
                    <div className="opacity-70 cursor-pointer">Contact</div>
                </div>
                <div className="flex flex-col gap-3 basis-[15%]">
                    <div className="font-bold cursor-pointer">DISHES</div>
                    <div className="opacity-70 cursor-pointer">Grilled Chicken</div>
                    <div className="opacity-70 cursor-pointer">Seafood Platter</div>
                    <div className="opacity-70 cursor-pointer">Vegetarian Mix</div>
                </div>
                <div className="flex flex-col gap-3 basis-[15%]">
                    <div className="font-bold">FOLLOW US</div>
                    <div className="flex justify-between gap-3">
                        <img className="border-2 w-10 h-10 border-black p-1 cursor-pointer rounded-full" src='images/facebook.svg' alt="Facebook" />
                        <img className="border-2 w-10 h-10 border-black p-1 cursor-pointer rounded-full" src='images/instagram.svg' alt="Instagram" />
                        <img className="border-2 w-10 h-10 border-black p-1 cursor-pointer rounded-full" src='images/twitter.svg' alt="Twitter" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5 md:flex-row md:justify-between mt-6">
                <div className="opacity-70">@ 2025 Restaurants. All Rights Reserved. Designed by <span className="font-bold">Bashar</span></div>
                <div className="flex gap-5 opacity-70">
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </Element>
    );
}
