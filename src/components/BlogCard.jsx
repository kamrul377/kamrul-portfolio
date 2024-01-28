import React, { useState } from 'react'
import Modal from '../utils/Modal'
import ModalComponent from '../utils/Modal'

const BlogCard = () => {

    const [showDetails, setShowDetails] = useState(false)

    const handleClick = () => {
        setShowDetails(true)
    }


    return (
        <div className='bg-[#162030] border border-slate-700 px-3 py-6 w-full rounded shadow relative'>

            <div className="date absolute bg-secondary top-10 right-6 rounded shadow z-40">
                <div className="div px-3 py-1 text-black font-medium text-sm text-center rounded shadow">
                    Jan <br /> <span className='font-bold text-lg'>30</span> <br /> 2003
                </div>
            </div>

            <div className=' cursor-pointer overflow-hidden bg-yellow-200' onClick={handleClick}>
                <img className='object cover h-full rounded shadow hover:scale-105 duration-200' src="https://tf-react-bieber.vercel.app/images/blog/blog-image-2.jpg" alt="" loading='lazy' />
            </div>

            <p className='text-slate-300 text-xl mt-5'>What designer can do?</p>
            <p className='text-slate-400  text-sm '>Trend</p>

            <ModalComponent showDetails={showDetails} setShowDetails={setShowDetails} />

        </div>
    )
}

export default BlogCard