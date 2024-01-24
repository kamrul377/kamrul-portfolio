

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Typing = () => {

    const first = `Hi, I am Full-stack Developer`

    return (
        <div className='bg-transparent h-24'>
            <TypeAnimation className=' text-secondary font-bold text-6xl'
                preRenderFirstString={true}
                sequence={[
                    500,
                    'Hi, I am Kamrul Islam', // initially rendered starting point
                    1000,
                    'I am Web Designer',
                    1000,
                    'I am Full-stack Developer',
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