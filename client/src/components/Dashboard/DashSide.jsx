import React from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";

const DashSide = () => {
  return (
    <div className='dashside bg-white h-full rounded-xl scrollbar-hidden scrollbar-thin scrollbar-thumb-white scrollbar-track-white'>
      <div className="flex justify-between">
        <div className="flex p-4 title">
          <GiChocolateBar className='h-8 w-auto'/>
          <h1 className="text-xl pt-1 px-2 font-semibold">Chocolates</h1> 
        </div>
        <div className="p-4 title md:hidden">
          <FaArrowLeft className='h-4 w-auto'/>
        </div>
      </div>
      <hr />

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptate voluptatum adipisci? Error ea, quidem nisi natus autem voluptatibus eaque neque magni amet libero dolore praesentium, minus iure in nostrum!
      
    </div>
  )
}

export default DashSide