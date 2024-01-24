import React from 'react'
import Heading from '../utils/Heading'

import thinking from '../../public/images/thinking.jpg'
import { RxDotFilled } from "react-icons/rx";

const About = () => {
    return (
        <div className='bg-[#0f1a27] px-10 pb-10' name="About">
            <Heading heading="about me" inner="about" />



            <div className="about flex">
                <div className="images basis-1/2 p-4">
                    <img src={thinking} alt="" className='border-8 rounded shadow border-secondary' />
                </div>
                <div className="info basis-1/2 p-4">
                    <h1 className='text-white text-2xl'>Hi, I am <span className='text-secondary font-bold'>Md Kamrul Islam</span></h1>


                    <div className="info text-white text-md mt-10">
                        <div className='flex items-center '>
                            <RxDotFilled color='#72e2ae' size={40} />
                            <h1>First Name :  Kamrul </h1>
                        </div>
                        <div className='flex items-center '>
                            <RxDotFilled color='#72e2ae' size={40} />
                            <h1>Last Name : Islam </h1>
                        </div>
                        <div className='flex items-center '>
                            <RxDotFilled color='#72e2ae' size={40} />
                            <h1>Age : 21 years </h1>
                        </div>
                        <div className='flex items-center '>
                            <RxDotFilled color='#72e2ae' size={40} />
                            <h1>Languages : Bangla, English </h1>
                        </div>
                        <div className='flex items-center '>
                            <RxDotFilled color='#72e2ae' size={40} />
                            <h1>Address : 38no Middle Halishar,Chittagong,Bangladesh </h1>
                        </div>
                        <div className='flex items-center '>
                            <RxDotFilled color='#72e2ae' size={40} />
                            <h1>Marital status: Unmarried</h1>
                        </div>
                    </div>

                    <button className='bg-secondary  rounded shadow text-sm btn  mt-4'>Download cv</button>
                </div>
            </div>

        </div>
    )
}

export default About