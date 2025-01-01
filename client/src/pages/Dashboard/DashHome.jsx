import React from 'react'
import DashImg from '../../assets/AdminDash.png'

const DashHome = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-xl uppercase font-semibold text-[#696cff]">Dashboard</h1>
      </div>
      <div className="md:flex my-2">
        <div className="w-full bg-white p-4 mr-2 shadow rounded">
          <div className="md:flex">
            <div className="w-full">sss</div>
            <div className="w-full">
            <img src={DashImg} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-4 ml-2">

        </div>
      </div>
    </div>
  )
}

export default DashHome