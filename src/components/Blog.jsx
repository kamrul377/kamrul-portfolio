import React from 'react'
import Heading from '../utils/Heading'
import BlogCard from './BlogCard'
import Modal from '../utils/Modal'


const Blog = () => {
    return (
        <div className='bg-[#0f1a27] px-10 pb-10' id="blog">

            <Heading heading="My blogs" inner="blogs" />


            <div className="blogs grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />

                <iframe className='bg-transparent w-full h-full rounded border border-slate-700' src="https://lottie.host/embed/d51f8d2d-4824-4377-b487-fd8000c4fb23/dJSIl9dmsl.json"></iframe>

            </div>


        </div>
    )
}

export default Blog