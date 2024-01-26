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





            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa facere libero eligendi animi, fugiat, perferendis ut molestiae ipsa, voluptatibus accusamus nam rem eum pariatur ratione! Temporibus tempora numquam voluptatem repudiandae, dicta sequi, aliquam exercitationem pariatur quia ut, minima obcaecati accusantium quod repellendus. Rerum nesciunt excepturi iste accusantium, iure quaerat. Ex tempore voluptates culpa, impedit quam obcaecati nulla veritatis eum doloremque, ab ipsum quae, molestias dolorum? Atque expedita maiores amet vel minus deleniti, porro adipisci ipsum. Consequuntur dolor, delectus ab perspiciatis mollitia libero, illo molestiae ipsum expedita voluptatum nam odit error similique, magnam neque. Tempora a quo accusantium doloremque quis molestiae fugit suscipit eveniet nihil incidunt est, fuga nam laborum ad nemo eaque omnis eos, culpa unde molestias! Eos ex aperiam rem eius et quis iure aliquid non neque veritatis tenetur autem nam quam, distinctio, nihil expedita. Reiciendis assumenda veritatis delectus quae sequi nam inventore molestiae? Aut, distinctio dicta fuga alias necessitatibus inventore quod, cumque corrupti, assumenda sit nihil laudantium vero! Porro aperiam voluptas natus. Cupiditate earum cum sunt non nihil nulla ipsa, labore repellendus corporis illo aliquid? Voluptatum voluptatem exercitationem, dicta esse, quam commodi iure nesciunt et rem, libero accusamus expedita iste atque ad labore ullam. Adipisci, voluptatibus?</h1>
        </div>
    )
}

export default Skills