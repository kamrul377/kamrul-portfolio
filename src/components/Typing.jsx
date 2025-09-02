

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Typing = () => {

    const first = `Hi, I am Full-stack Developer`

    return (
        <div className='bg-transparent px-4 overflow-clip py-10 sm:py-2'>
            <TypeAnimation className=' text-secondary font-bold text-6xl'
                preRenderFirstString={true}
                sequence={[
                    500,
                    'Hi, I am Kamrul Islam', // initially rendered starting point
                    1000,
                    'I am Network and System Engineer...',
                    1000,
                    'And Full Stack Web Developer...',
                    1000,

                ]}
                speed={50}

                style={{ fontSize: '3em' }}
                repeat={Infinity}
            />
        </div>
    )
}

export default Typing