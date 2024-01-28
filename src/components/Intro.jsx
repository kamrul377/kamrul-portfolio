import React from 'react'
import { IoArrowDownOutline } from "react-icons/io5";


import Typing from './Typing';
import { Link } from 'react-router-dom';

// images
import kamrul from '../../public/images/kamrul.jpg'
import Social from '../utils/Social';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
  return (
    <div className='bg-primary h-[calc(100%)] flex justify-center items-center gap-3 pt-16 xl:pt-0 relative' id="home">

      <div className="about max-w-[900px] mx-auto flex flex-col justify-center items-center gap-3">
        <img className='h-48 w-48 rounded-full ring-8 ring-secondary animate-none object-cover mb-10 mt-10 sm:mt-0' src={kamrul} alt="" />

        <iframe className='opacity-50 absolute sm:top-32 top-16 sm:h-48 sm:w-48 -right-20 sm:right-10' src="https://lottie.host/embed/c4cc4460-876e-432f-b424-2b4396d3075b/mtaxKKAoiY.json"></iframe>

        <Typing />

        <h1 className='text-[#fffffd] text-center text-md px-4'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h1>

        <Social className="mt-7" />

        <HashLink to="#about" className='flex bg-transparent items-center gap-3 rounded-full px-4 py-[1px] border text-slate-400 hover:text-secondary hover:border-slate-500 transition-colors border-slate-800 mt-10 text-sm'>
          Scroll Down <IoArrowDownOutline className='animate-bounce' size={22} />
        </HashLink>

      </div>

    </div>
  )
}

export default Intro