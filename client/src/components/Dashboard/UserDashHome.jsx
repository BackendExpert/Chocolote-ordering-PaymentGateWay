import React from 'react'
import CountUp from 'react-countup'
import { CiBoxList } from "react-icons/ci";
import { IoMegaphoneSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import MyOrdersChart from '../Charts/MyOrdersChart';


const UserDashHome = () => {
    const userDataCard = [
      {
        id: 1,
        name: 'My Orders',
        value: <CountUp end={20} />,
        icon: <CiBoxList className='h-7 w-auto fill-[#696cff]'/>
      },
      {
        id: 2,
        name: 'Available Offers',
        value: <CountUp end={20} />,
        icon: <IoMegaphoneSharp className='h-7 w-auto fill-[#696cff]'/>
      },
      {
        id: 3,
        name: 'Success Orders',
        value: <CountUp end={20} />,
        icon: <FaListCheck className='h-7 w-auto fill-[#696cff]'/>
      },
      {
        id: 4,
        name: 'My Expenses',
        value: <CountUp end={20} />,
        icon: <FaWallet className='h-7 w-auto fill-[#696cff]'/>
      },

    ]
  return (
    <div>
      <div className="md:grid grid-cols-2 gap-4 my-4">
        <div className="md:grid grid-cols-2 gap-4 ">
          {
            userDataCard.map((data, index) => {
              return (
                <div className="bg-white shadow-md rounded-md p-4 md:my-0 my-4" key={index}>
                  <div className="flex justify-between">
                    <h1 className="text-[#696cff] uppercase font-semibold">{data.name}</h1>
                    <div className="">
                      {data.icon}
                    </div>
                  </div>
                  <div className="mt-8">
                    <h1 className="text-4xl my-4 text-[#696cff] pl-4">{data.value}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="">
          <MyOrdersChart />
        </div>
      </div>
    </div>
  )
}

export default UserDashHome