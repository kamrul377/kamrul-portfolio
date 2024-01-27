import React from 'react'
import Heading from '../utils/Heading'
import BlogCard from './BlogCard'

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

            </div>

        </div>
    )
}

export default Blog