import React from 'react'
import UserDash from '../../assets/UserDash.png'

const DashNav = () => {
  return (
    <div className='bg-white shadow mr-4 py-6 px-4 rounded-lg'>
      <div className="flex justify-between">
        <div className="">
          <h1 className='title font-semibold'>Dashboard</h1>
        </div>

        <div className="">
            <div className="flex">
              <h1 className="title font-semibold pr-2 pt-1">JehanKadny</h1>
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