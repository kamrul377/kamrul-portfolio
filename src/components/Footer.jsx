import React from 'react'
import Social from '../utils/Social'

const Footer = () => {
    return (
        <div className='bg-[#0f1a27] px-4 sm:px-10 py-4 border-t-2 border-slate-700 sm:flex justify-between items-center footer'>
            <Social />

            <h2 className='text-slate-500 text-center mt-6 sm:mt-0'>© 2024, All right Kamrul islam</h2>
        </div>
    )
}

export default Footer