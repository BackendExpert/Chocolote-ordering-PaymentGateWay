import React, { useState } from 'react'
import AdminImg from '../../assets/DashAdmin.png'
import CountUp from 'react-countup'
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import Calendar from 'react-calendar';

import './dashcolor.css'

const AdminDashHome = () => {
    const [date, setDate] = useState(new Date());
    const adminData = [
        {
            id: 1,
            name: 'Totel Customer',
            value: <CountUp end={20}/>,
            img: <FaUsers className='h-16 w-full fill-[#696cff]'/>,            
        },
        {
            id: 2,
            name: 'Totel Products',
            value: <CountUp end={20}/>,
            img: <AiFillProduct className='h-16 w-full fill-[#696cff]'/>,             
        },
        {
            id: 3,
            name: 'Total Orders',
            value: <CountUp end={20}/>,
            img: <CiBoxList className='h-16 w-full fill-[#696cff]'/>,            
        },
        {
            id: 4,
            name: 'Total Income',
            value: <CountUp end={20}/>,
            img: <BsCashCoin className='h-16 w-full fill-white'/>,              
        },
    ]
  return (
    <div className='my-4'>
        <div className="md:flex">
            <div className="md:w-2/5 h-full md:my-0 my-2">
                <div className="bg-white shadow rounded p-4 mr-2">
                    <h1 className="text-gray-500">Welcome <span className='font-semibold text-[#696cff]'>Admin,</span></h1>
                    <div className="p-4">
                        <center><img src={AdminImg} alt="" className='h-24 w-auto'/></center>
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <div className="md:grid grid-cols-4 gap-2">
                    {
                        adminData.map((item, index) => {
                            return (
                                <div className={`${item.id === 4 ? 'bg-[#696cff]' : 'bg-white' }  shadow p-4 rounded md:my-0 my-4`} key={index}>
                                    <h1 className={`${item.id === 4 ? 'text-white' : 'text-[#696cff]' } text-center font-semibold`}>{item.name}</h1>
                                    <div className="py-4">
                                        <center>{item.img}</center>
                                    </div>
                                    <div className="">
                                        <h1 className={`${item.id === 4 ? 'text-white' : 'text-[#696cff]' } text-center text-2xl font-semibold`}>{item.value}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className="mt-4">
            <Calendar
                className="rounded-lg border border-gray-300"
                onChange={setDate}
                value={date}
            />
            <p className="text-center mt-2 text-sm text-gray-500">
                Selected Date: {date.toDateString()}
            </p>
        </div>
    </div>
  )
}

export default AdminDashHome