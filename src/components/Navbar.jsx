import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-primary flex px-10 justify-between h-20 items-center'>
            <div className="logo">
                <p className='text-secondary text-5xl font-bold'>KAMRUL.</p>
            </div>
            <div className="menu">
                <ul className='flex text-white gap-3 items-center justify-center text-[16px]'>
                    <li> <span className='text-secondary font-bold'>01.</span> HOME</li>
                    <li> <span className='text-secondary font-bold'>02.</span> ABOUT</li>
                    <li> <span className='text-secondary font-bold'>03.</span> RESUME</li>
                    <li> <span className='text-secondary font-bold'>04.</span> WORKS</li>
                    <li> <span className='text-secondary font-bold'>05.</span> BLOG</li>
                    <li> <span className='text-secondary font-bold'>06.</span> CONTACT</li>
                </ul>
            </div>
            <div className="hire">
                <button className='bg-secondary  rounded shadow text-sm btn font-bold'>HIRE ME</button>
            </div>

            {/* <button className='btn'>Hover me</button>  */}


        </div>
    )
}

export default Navbar