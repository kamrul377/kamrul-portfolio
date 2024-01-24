import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const percentage = 66


const Circle = ({name,percentage}) => {
    return (
        <div className='bg-[#202638] ba text-center py-6 px-6 rounded border border-slate-600 inline-block '>
            <div className='h-40 w-40 bg-transparent mx-auto'>
                <CircularProgressbar value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: "#72e2ae",
                        textColor: '#fff',
                        trailColor: '#2f494f',
                        backgroundColor: '#3e98c7',
                    })} />
            </div>
            <h3 className='text-white text-md mt-4 capitalize font-bold'>{name}</h3>


        </div>
    )
}

export default Circle