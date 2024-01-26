import React from 'react'
import Heading from '../utils/Heading'
import Circle from '../utils/Circle'
import Skillbar from '../utils/Skillbar'


const Skills = () => {
    return (
        <div className='bg-[#0f1a27] px-10' id="skills">

            <Heading heading="My Skills" inner="skills" />


            <div className="skills-bar md:flex md:flex-wrap justify-between">
                <Circle name="Front-end Development" percentage="95" />
                <Circle name="Back-end Development" percentage="85" />
                <Circle name="Networking" percentage="95" />
                <Circle name="Mobile App Development" percentage="75" />
            </div>

            <div className="skillbar mt-10 py-10 grid sm:grid-cols-2 gap-8">

                <Skillbar number={95} name="javascript" />
                <Skillbar number={80} name="typescript" />
                <Skillbar number={95} name="React js" />
                <Skillbar number={85} name="next js" />

                <Skillbar number={80} name="Node js" />
                <Skillbar number={98} name="html & css" />
                <Skillbar number={95} name="tailwind css" />
                <Skillbar number={70} name="React native" />
                <Skillbar number={85} name="Express js" />
                <Skillbar number={85} name="python" />
                <Skillbar number={90} name="c & c++" />


            </div>

        </div>
    )
}

export default Skills