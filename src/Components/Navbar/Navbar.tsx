'use client'

import { useEffect, useState } from "react";

function Navbar() {

    const Data = [
        {
            id: 1,
            title: 'Menu',
            src: ''
        },
        {
            id: 2,
            title: 'Events',
            src: ''
        },
        {
            id: 3,
            title: 'Gallery',
            src: ''
        },
        {
            id: 4,
            title: 'About',
            src: ''
        },
        {
            id: 5,
            title: 'Contact',
            src: ''
        },

    ]

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(open)
    }, [open])

    return (
        <div className="w-full fixed py-4 px-2 md:px-20 flex items-end justify-between z-100 bg-white">
            <img src='images/logo.svg' />
            <ul className=" gap-4 hidden xl:flex">
                {
                    Data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    )
                    )}
            </ul>
            <div className="bg-[#EA6D27] p-2 rounded-tl-2xl rounded-br-2xl font-bold text-white hidden xl:block">Book a table</div>
            <div className="flex flex-col gap-2 items-end xl:hidden w-[30px] cursor-pointer" onClick={() => setOpen(!open)}>
                <div className="w-full h-0.5 bg-[#EA6D27]"></div>
                <div className={`${open ? 'w-1/2' : 'w-full'} transition-all duration-500 h-0.5 bg-[#EA6D27]`}></div>
                <div className="w-full h-0.5 bg-[#EA6D27]"></div>
            </div>
            <div className={`absolute left-0 top-21 bg-[#EA6D27] w-full overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className="w-full p-4 text-center flex flex-col gap-4">
                    {
                        Data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}
export default Navbar;