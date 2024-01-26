import React from 'react'
import Heading from '../utils/Heading'
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";


const Contact = () => {
    return (
        <div className='bg-[#0f1a27]  px-4 md:px-10 pb-10' id="contact">

            <Heading heading="contact us" inner="contact" />


            <div className="contact lg:flex gap-10">
                <div className="left md:basis-1/2 w-full text-white ">
                    <h1 className='text-white text-2xl font-bold md:text-center lg:text-left'>Contact Information</h1>
                    <p className='text-base my-2 text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.</p>

                    <div className="phone border border-slate-700 text-white px-5 py-6 bg-[#162030] rounded-xl flex gap-4 items-center my-4 shadow md:w-[60%] lg:w-auto md:mx-auto">
                        <div className="icon">
                            <FiPhone size={25} className='bg-[#1e754a31] text-secondary h-20 w-20 rounded-full p-4' />
                        </div>
                        <div className="text">
                            <h2 className='text-xl mb-2'>Contact on phone</h2>
                            <p className='text-sm text-slate-300'>+880 1970-052671</p>
                            <p className='text-sm text-slate-300'>+880 1970-052671</p>
                        </div>
                    </div>

                    <div className="phone border border-slate-700 text-white px-5 py-6 bg-[#162030] rounded-xl flex gap-4 items-center my-4 shadow md:w-[60%] lg:w-auto md:mx-auto">
                        <div className="icon">
                            <AiOutlineMail size={25} className='bg-[#1e754a31] text-secondary h-20 w-20 rounded-full p-4' />
                        </div>
                        <div className="text">
                            <h2 className='text-xl mb-2'>Contact on mail</h2>
                            <p className='text-sm text-slate-300'>kamrul.cse9@gmail.com</p>
                            <p className='text-sm text-slate-300'>mdkamrulislam9810@gmail.com</p>
                        </div>
                    </div>

                    <div className="phone border border-slate-700 text-white px-5 py-6 bg-[#162030] rounded-xl flex gap-4 items-center my-4 shadow md:w-[60%] lg:w-auto md:mx-auto">
                        <div className="icon">
                            <TiLocationOutline size={25} className='bg-[#1e754a31] text-secondary h-20 w-20 rounded-full p-4' />
                        </div>
                        <div className="text">
                            <h2 className='text-xl mb-2'>Contact address</h2>
                            <p className='text-sm text-slate-300'>38no Middle Halishar,
                                Chittagong,Bangladesh</p>

                        </div>
                    </div>



                </div>


                <div className="right md:basis-1/2 w-full">


                    <h2 className="text-secondary font-bold text-xl mt-10 text-center opacity-95 hidden md:block lg:hidden">Send message.</h2>
                    <form action='/index.php' className="phone border border-slate-700 text-white px-5 py-6 bg-[#162030] rounded-xl flex gap-4 flex-col items-center my-4 shadow">

                        <div className="input flex flex-col w-full gap-2">
                            <label htmlFor="name" className='text-lg font-bold text-slate-200'>Name</label>
                            <input className='bg-transparent border-slate-700 border px-5 py-3 rounded-lg text-lg text-slate-200 outline-none focus:border-secondary transition-colors' type="text" name="" placeholder='Enter your name...' id="" required/>
                        </div>
                        <div className="input flex flex-col w-full gap-2">
                            <label htmlFor="name" className='text-lg font-bold text-slate-200'>Email</label>
                            <input className='bg-transparent border-slate-700 border px-5 py-3 rounded-lg text-lg text-slate-200 outline-none focus:border-secondary transition-colors' type="email" name="" placeholder='Enter your email...' id="" required/>
                        </div>
                        <div className="input flex flex-col w-full gap-2">
                            <label htmlFor="name" className='text-lg font-bold text-slate-200'>Subject</label>
                            <input className='bg-transparent border-slate-700 border px-5 py-3 rounded-lg text-lg text-slate-200 outline-none focus:border-secondary transition-colors' type="text" name="" placeholder='Enter subject...' id="" required />
                        </div>
                        <div className="input flex flex-col w-full gap-2">
                            <label htmlFor="name" className='text-lg font-bold text-slate-200'>Message</label>
                            <textarea row="5" className='bg-transparent border-slate-700 border px-5 py-3 rounded-lg text-lg text-slate-200 outline-none focus:border-secondary transition-colors' type="text" name="" placeholder='Enter your message...' id="" required/>
                        </div>

                        <div className="hire mt-4 w-full">
                            <button type='submit' className='bg-secondary  rounded shadow text-sm btn font-bold text-black w-28 focus:ring-4 ring-blue-400 '>Send mail</button>
                        </div>


                    </form>


                </div>
            </div>



        </div>
    )
}

export default Contact