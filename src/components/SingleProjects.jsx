import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowRedoOutline } from "react-icons/io5";

const SingleProjects = ({ id, title, desc, picture, github, live }) => {
    return (
        <div className='border border-slate-700 p-4 rounded shadow bg-[#162030]'>
            <Link to={live} className='relative s-project '>
                <div className="img overflow-hidden mb-4 rounded ">
                    <img className='hover:scale-105 h-56 w-full object-cover duration-300 cursor-pointer rounded hover:blur-sm' src={picture} alt="project thumbnel" />
                </div>

              

                {/* <div className="icon absolute top-0 left-6">
                    <IoArrowRedoOutline className='bg-secondary w-10 h-10 p-2 rounded-full text-[#222]' />
                </div> */}

            </Link>
            <div className='flex justify-between mt-8'>
                <div className="le">
                    <h2 className='text-slate-100 text-xl'>{title}</h2>
                    <p className='text-slate-300 text-sm'>{desc}</p>
                </div>
                <div className="r text-blue-400 flex flex-col">
                    <Link to={live} className='underline cursor-pointer hover:text-red-500' target='_blank'>Live</Link>
                    <Link to={github} className='underline cursor-pointer hover:text-red-500' target='_blank'>Github</Link>
                </div>
            </div>

        </div>
    )
}

export default SingleProjects