import React from 'react'
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { IoArrowDownOutline } from "react-icons/io5";


import Typing from './Typing';
import { Link } from 'react-router-dom';

// images
import kamrul from '../../public/images/kamrul.jpg'

const Intro = () => {
  return (
    <div className='bg-primary h-[calc(100%-80px)] flex justify-center items-center gap-3'>

      <div className="about max-w-[900px] mx-auto flex flex-col justify-center items-center gap-3">
        <img className='h-48 w-48 rounded-full ring-8 ring-secondary animate-none object-cover mb-10' src={kamrul} alt="" />


        <Typing />

        <h1 className='text-[#fffffd] text-center text-md'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h1>

        <div className="icons flex gap-7 mt-7">
          <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black ">
            <FaSquareFacebook size={25} className='hover:animate-pulse' />
          </Link>
          <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
            <FaTwitter size={25} className='hover:animate-pulse'/>
          </Link>
          <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
            <FaSquareGithub size={25} className='hover:animate-pulse'/>
          </Link>
          <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
            <IoLogoLinkedin size={25} className='hover:animate-pulse'/>
          </Link>
          <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
            <TbWorldWww size={25} className='hover:animate-pulse'/>
          </Link>

        </div>

        <Link className='flex bg-transparent items-center gap-3 rounded-full px-4 py-[1px] border text-slate-400 hover:text-secondary hover:border-slate-500 transition-colors border-slate-800 mt-10 text-sm'>
          Scroll Down <IoArrowDownOutline className='animate-bounce' size={22} />
        </Link>

      </div>

    </div>
  )
}

export default Intro