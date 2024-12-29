import React from 'react'
import { GiChocolateBar } from "react-icons/gi";


const DashSide = () => {
  return (
    <div className='dashside bg-white h-full rounded-xl scrollbar-hidden scrollbar-thin scrollbar-thumb-white scrollbar-track-white'>
      <div className="flex p-4 title">
        <GiChocolateBar className='h-8 w-auto'/>
        <h1 className="text-xl pt-1 px-2 font-semibold">Chocolates</h1>
      </div>
      <hr />
      
    </div>
  )
}

export default DashSide