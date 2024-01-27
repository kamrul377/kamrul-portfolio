import React from 'react'
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Social = ({ className }) => {
    return (
        <div className={`icons flex gap-7 ${className}`}>
            <Link to={'https://web.facebook.com/profile.php?id=100034572162788'} className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black" target='_black'>
                <FaSquareFacebook size={25} className='hover:animate-pulse' />
            </Link>
            <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
                <FaTwitter size={25} className='hover:animate-pulse' target='_blank' />
            </Link>
            <Link to={'https://github.com/kamrul377'} className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black" target='_blank'>
                <FaSquareGithub size={25} className='hover:animate-pulse' />
            </Link>
            <Link to={'https://www.linkedin.com/in/kamrulislam377/'} className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black" target='_blank'>
                <IoLogoLinkedin size={25} className='hover:animate-pulse' />
            </Link>
            <Link to={'https://mdkamrulislam.vercel.app/'} className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black" target='_blank'>
                <TbWorldWww size={25} className='hover:animate-pulse' />
            </Link>

        </div>
    )
}

export default Social