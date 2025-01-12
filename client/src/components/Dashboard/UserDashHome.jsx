import React from 'react'
import CountUp from 'react-countup'
import { CiBoxList } from "react-icons/ci";
import { IoMegaphoneSharp } from "react-icons/io5";
import { LuListCheck } from "react-icons/lu";


const UserDashHome = () => {
    const userDataCard = [
      {
        id: 1,
        name: 'My Orders',
        value: <CountUp end={20} />,
        icon: <CiBoxList />
      },
      {
        id: 2,
        name: 'Available Offers',
        value: <CountUp end={20} />,
        icon: <IoMegaphoneSharp />
      },
      {
        id: 3,
        name: 'Success Orders',
        value: <CountUp end={20} />,
        icon: <LuListCheck />
      },
      {
        id: 4,
        name: 'My Expenses',
        value: <CountUp end={20} />,
        icon: ''
      },

    ]
  return (
    <div>
      
    </div>
  )
}

export default UserDashHome