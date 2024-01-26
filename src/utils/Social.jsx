import React from 'react'
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Social = ({className}) => {
    return (
        <div className={`icons flex gap-7 ${className}`}>
            <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black ">
                <FaSquareFacebook size={25} className='hover:animate-pulse' />
            </Link>
            <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
                <FaTwitter size={25} className='hover:animate-pulse' />
            </Link>
            <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
                <FaSquareGithub size={25} className='hover:animate-pulse' />
            </Link>
            <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
                <IoLogoLinkedin size={25} className='hover:animate-pulse' />
            </Link>
            <Link className="facebook p-3 bg-[#0f172a] rounded shadow border border-slate-800 text-white icn-dsn hover:text-black">
                <TbWorldWww size={25} className='hover:animate-pulse' />
            </Link>

        </div>
    )
}

export default Social