import React, { useState } from 'react'
import './dashcolor.css'
import { GiChocolateBar } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const DashSide = () => {
    const [menuopen, setmenuopen] = useState(false)

    const headleopenmenu = () => {
      setmenuopen(!menuopen)
    }

  return (
      <div className="bg-white w-full">
        <div className="mb-4">
          {
            menuopen ? 
              <TiThMenu className='h-6 w-auto' onClick={headleopenmenu}/>
            :
              <IoMdClose className='h-6 w-auto' onClick={headleopenmenu}/>
          }              
        </div>
        <div className='w-full dashside px-6 py-2 shadow-custom min-h-screen'>

            <div className="flex">
              <GiChocolateBar className='h-6 w-auto'/>
              <h1 className="pl-2 text-xl">Chocolate</h1>
            </div>
        </div>
      </div>
  )
}

export default DashSide