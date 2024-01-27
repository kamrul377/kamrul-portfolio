import React, { useEffect, useState } from 'react'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

    const [phone, setPhone] = useState(false)
    // const [isFixed, setIsFixed] = useState(false);

    // const handleScroll = () => {
    //     if (window.pageYOffset > 300) {
    //       setIsFixed(true);
    //     } else {
    //       setIsFixed(false);
    //     }
    //   };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     // Clean up the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <div className={`bg-primary flex px-4 sm:px-10 justify-between h-20 items-center z-50 fixed top-0 left-0 w-full `}>
                <div className="logo select-none">
                    <p className='text-secondary text-5xl font-bold'>KAMRUL.</p>
                </div>
                <div className="menu hidden md:block">
                    <nav className='flex text-white gap-3 items-center justify-center text-[16px]'>

                        <HashLink to="#home"> <span className='text-secondary font-bold'>01.</span> HOME</HashLink>

                        <HashLink to="#about"> <span className='text-secondary font-bold'>02.</span> ABOUT</HashLink>

                        <HashLink to="#resume"> <span className='text-secondary font-bold'>03.</span> RESUME</HashLink>

                        <HashLink to="#works"> <span className='text-secondary font-bold'>04.</span> WORKS</HashLink>

                        <HashLink to="#blog"> <span className='text-secondary font-bold'>05.</span> BLOG</HashLink>

                        <HashLink to="#contact"> <span className='text-secondary font-bold'>06.</span> CONTACT</HashLink>

                    </nav>
                </div>
                <div className="bar-icons md:hidden" onClick={() => setPhone(!phone)}>
                    <HiOutlineBars3CenterLeft className='text-white font-bold cursor-pointer' size={35} />
                </div>
                <div className="hire hidden md:block">
                    <button className='bg-secondary  rounded shadow text-sm btn font-bold'>HIRE ME</button>
                </div>

            </div>

            {
                phone && <div className='w-[100vw] h-[100vh] top-0 left-0 bg-[#0000008c] fixed z-50  duration-300 md:hidden overflow-x-hidden transition-all '>
                    <div className='w-[70%] bg-primary right-0 top-0 h-screen fixed overscroll-y-none scroll-my-0'>

                        <div className="top flex justify-between items-center py-5 border-b border-slate-500 px-3">
                            <div className="logo">
                                <p className='text-secondary text-3xl font-bold'>KAMRUL.</p>
                            </div>
                            <div className="bar-icons cursor-pointer" onClick={() => setPhone(false)}>
                                <RxCross2 size={35} color='white' />
                            </div>
                        </div>
                        <nav className='text-white gap-3  text-[26px] flex flex-col mt-10   px-3 py-2'>

                            <HashLink to="#home" className='px-8 py-1  rounded bg-transparent hover:bg-[#23964934] transition-colors '> <span className='text-secondary font-bold'>01.</span> HOME</HashLink>

                            <HashLink to="#about" className='px-8 py-1  rounded bg-transparent hover:bg-[#23964934] transition-colors'> <span className='text-secondary font-bold'>02.</span> ABOUT</HashLink>

                            <HashLink to="#resume" className='px-8 py-1  rounded bg-transparent hover:bg-[#23964934] transition-colors'> <span className='text-secondary font-bold'>03.</span> RESUME</HashLink>

                            <HashLink to="#works" className='px-8 py-1  rounded bg-transparent hover:bg-[#23964934] transition-colors'> <span className='text-secondary font-bold'>04.</span> WORKS</HashLink>

                            <HashLink to="#blog" className='px-8 py-1  rounded bg-transparent hover:bg-[#23964934] transition-colors'> <span className='text-secondary font-bold'>05.</span> BLOG</HashLink>

                            <HashLink to="#contact" className='px-8 py-1  rounded bg-transparent hover:bg-[#23964934] transition-colors'> <span className='text-secondary font-bold'>06.</span> CONTACT</HashLink>

                        </nav>

                        <div className="hire mt-4 w-full px-4">
                            <button className='bg-secondary  rounded shadow text-sm btn font-bold w-full hover:ring-4 ring-green-400'>HIRE ME</button>
                        </div>


                    </div>
                </div>
            }

        </>



    )
}

export default Navbar