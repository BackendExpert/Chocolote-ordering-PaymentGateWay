import React from 'react'
import Dashbtn from '../Buttons/Dashbtn'

const AdminOrderStatus = () => {
    const tablesameledata = [
        {
          id: 1,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Online Card',
          status: 'Approve'      
        },
        {
          id: 2,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Cash on Delivery',
          status: 'Pending'       
        },
        {
          id: 3,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Online Card',
          status: 'Approve'        
        },
        {
          id: 4,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Online Card',
          status: 'Approve'         
        },
        {
          id: 5,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Cash on Delivery',
          status: 'Pending'       
        },
        {
          id: 6,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Cash on Delivery',
          status: 'Approve'        
        },
        {
          id: 7,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Online Card',
          status: 'Rejected'        
        },
        {
          id: 8,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Online Card',
          status: 'Pending'         
        },
        {
          id: 9,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Cash on Delivery',
          status: 'Rejected'        
        },
        {
          id: 10,
          orderid: '123ABC',
          name: 'Kamal',
          mobile: '+094 711785581',
          paymentmethod: 'Online Card',
          status: 'Approve'       
        }
        
       ]
  return (
    <div className='my-4'>
        <div className="bg-white rounded shadow p-4">
            <h1 className="text-xl font-semibold text-[#696cff]">Order Status</h1>

            <div className="w-full my-4">
                <table className='w-full'>
                    <thead className='h-12 bg-[#696cff] text-white'>
                        <tr>
                            <th>ID</th>
                            <th>Order ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Payment Method</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tablesameledata.map((item, index) => {
                                return (
                                    <tr className='h-12 bg-white border-b border-[#696cff]/20' key={index}>
                                        <td className='pl-4 font-semibold'>{item.id}</td>
                                        <td className='pl-4 font-semibold'>{item.orderid}</td>
                                        <td className='pl-4'>{item.name}</td>
                                        <td className='pl-4'>{item.mobile}</td>
                                        <td className='pl-4'>
                                            {
                                                (() => {
                                                    if(item.paymentmethod === "Online Card"){
                                                        return (
                                                            <div className="text-[#696cff] font-semibold">{item.paymentmethod}</div>
                                                        )
                                                    }
                                                    else if(item.paymentmethod === "Cash on Delivery"){
                                                        return (
                                                            <div className="text-[#696cff]">{item.paymentmethod}</div>
                                                        )
                                                    }
                                                })()
                                            }
                                        </td>
                                        <td className='pl-4'>
                                            {
                                                (() => {
                                                    if(item.status === "Approve"){
                                                        return (
                                                            <div className="bg-green-500 text-center text-white py-1 rounded-full font-semibold">{item.status}</div>
                                                        )
                                                    }
                                                    else if(item.status === "Pending"){
                                                        return(
                                                            <div className="bg-yellow-500 text-center text-white py-1 rounded-full font-semibold">{item.status}</div>
                                                        )
                                                    }
                                                    else if(item.status === "Rejected"){
                                                        return(
                                                            <div className="bg-red-500 text-center text-white py-1 rounded-full font-semibold">{item.status}</div>
                                                        )
                                                    }
                                                })()
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="mt-2">
                    <Dashbtn btntype={'button'} btnvalue={'View more Orders'} />
                </div>                
            </div>
        </div>


    </div>
  )
}

export default AdminOrderStatus