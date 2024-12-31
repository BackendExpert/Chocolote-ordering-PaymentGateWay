import React, { useState } from 'react'
import UserDash from '../../assets/UserDash.png'
import { FaArrowRight } from "react-icons/fa";


const DashNav = ({ openside, headleopenside }) => {
  return (
    <div className='bg-white shadow md:mr-4 md:mx-0 mx-4 py-6 px-4 rounded-lg'>
      <div className="flex justify-between">
        <div className="flex">
          <div className="pr-4 pt-2 md:hidden">
            <FaArrowRight className='h-4 w-auto fill-[#696cff]' onClick={headleopenside}/>
          </div>
          <h1 className='title font-semibold text-xl'>Dashboard</h1>
        </div>

        <div className="">
            <div className="flex">
              <h1 className="title font-semibold pr-2 pt-1 md:block hidden">JehanKadny</h1>
              <div className="">
                <img src={UserDash} alt="" className='h-8 w-auto'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashNav