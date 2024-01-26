import React from 'react'

const Skillbar = ({ name, number }) => {

  return (
    <div className="bar flex flex-col gap-2">
      <div className='text-white text-xl font-medium capitalize'>{name} <span className='text-secondary'> - {number} %</span> </div>
      <div className="bar h-6 w-full bg-[#2f494f] rounded-lg relative">
        {
          number && <div style={{
            width : `${number}%`
          }} className={`h-6 absolute bg-secondary top-0 left-0 rounded-lg`}>
          </div>
        }
      </div>
    </div>
  )
}

export default Skillbar