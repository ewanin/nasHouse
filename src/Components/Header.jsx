import React, { useState, useEffect, useRef } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div className=' z-[99] w-full md:pt-[50px] pt-[35px] absolute top-0 bottom-auto left-0 right-auto'>
            <div className='md:px-[40px] px-[20px] font-montreg'>
                <div className='max-w-[80.625rem] w-full mx-auto'>
                    <div className='md:flex hidden justify-between items-center bg-scroll'>
                        <a href="" className="max-w-full inline-block no-underline bg-transparent">
                            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65dc83aef5782f343cf59ef2_footer-logo.svg" alt="Not Available"
                                className='2xl:w-[300px] w-[190px] object-cover max-w-full align-middle inline-block'
                            />
                        </a>
                        <div className="">
                            <div className="flex items-center gap-[2rem] 2xl:text-[24px]">
                                <a href="" className=" capitalize text-[#ffff] no-underline bg-transparent">Stay</a>
                                <a href="" className=" capitalize text-[#ffff] no-underline bg-transparent">Membership</a>
                                <a href="" className=" capitalize text-[#ffff] no-underline bg-transparent">Corporate</a>
                                <a href="" className=" capitalize text-[#ffff] no-underline bg-transparent">Events</a>
                            </div>
                        </div>
                    </div>

                    <nav ref={navRef} className="p-0 md:hidden block">
                        <div className="flex items-center justify-between">
                            <a href="" className=" bg-scroll float-left text-[#3333] no-underline relative bg-transparent">
                                <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65dc83aef5782f343cf59ef2_footer-logo.svg" alt="Not Available"
                                    className='bg-scroll w-[11.875rem] object-cover max-w-full align-middle inline-block'
                                />
                            </a>
                            <div className="flex md:hidden">
                                <button
                                    aria-label
                                    onClick={toggleMenu}
                                    className="text-white focus:outline-none focus:text-white"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 bg-4e6d1ad9 backdrop-blur-[5px]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        {isOpen && (
                            <div className="md:hidden bg-4e6d1ad9 backdrop-blur-[5px] text-center">
                                <div className="flex flex-col mt-2">
                                    <a href="" className="bg-scoll capitalize text-[#ffff] no-underline bg-transparent py-[10px]">Stay</a>
                                    <a href="" className="bg-scoll capitalize text-[#ffff] no-underline bg-transparent py-[10px]">Corporate</a>
                                    <a href="" className="bg-scoll capitalize text-[#ffff] no-underline bg-transparent py-[10px]">Membership</a>
                                    <a href="" className="bg-scoll capitalize text-[#ffff] no-underline bg-transparent py-[10px]">Events</a>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
