import React from 'react'

const Heading = ({heading,inner}) => {
    return (
        <div className='flex justify-center overflow-hidden'>
            <div className="relative  inline-block">
                <div className="inner-heading uppercase text-[100px] sm:text-[130px] text-center font-bold text-[#4345642f] select-none">
                    {inner}
                </div>
                <div className="main-heading absolute uppercase text-2xl top-[40%] left-[35%] text-white heading-anim font-bold">
                    {heading}
                </div>
                
            </div>


        </div>
    )
}

export default Heading