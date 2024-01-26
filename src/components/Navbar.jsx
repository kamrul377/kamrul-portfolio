import React, { useState } from 'react'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [phone, setPhone] = useState(false)

    return (
        <>
            <div className='bg-primary flex px-10 justify-between h-20 items-center'>
                <div className="logo">
                    <p className='text-secondary text-5xl font-bold'>KAMRUL.</p>
                </div>
                <div className="menu hidden sm:block">
                    <ul className='flex text-white gap-3 items-center justify-center text-[16px]'>
                        <li> <span className='text-secondary font-bold'>01.</span> HOME</li>
                        <li> <span className='text-secondary font-bold'>02.</span> ABOUT</li>
                        <li> <span className='text-secondary font-bold'>03.</span> RESUME</li>
                        <li> <span className='text-secondary font-bold'>04.</span> WORKS</li>
                        <li> <span className='text-secondary font-bold'>05.</span> BLOG</li>
                        <li> <span className='text-secondary font-bold'>06.</span> CONTACT</li>
                    </ul>
                </div>
                <div className="bar-icons sm:hidden" onClick={() => setPhone(!phone)}>
                    <HiOutlineBars3CenterLeft className='text-white font-bold cursor-pointer' size={35} />
                </div>
                <div className="hire hidden sm:block">
                    <button className='bg-secondary  rounded shadow text-sm btn font-bold'>HIRE ME</button>
                </div>

            </div>

            {
                phone && <div className='w-[100vw] h-[100vh] top-0 left-0 bg-[#000000c2] fixed z-50 transition-opacity duration-300 sm:hidden'>
                    <div className='w-[70%] bg-primary right-0 top-0 h-screen fixed overscroll-y-none scroll-my-0'>

                        <div className="top flex justify-between items-center py-5 border-b border-slate-500 px-3">
                            <div className="logo">
                                <p className='text-secondary text-3xl font-bold'>KAMRUL.</p>
                            </div>
                            <div className="bar-icons cursor-pointer" onClick={() => setPhone(false)}>
                                <RxCross2 size={35} color='white' />
                            </div>
                        </div>

                    </div>
                </div>
            }

        </>



    )
}

export default Navbar