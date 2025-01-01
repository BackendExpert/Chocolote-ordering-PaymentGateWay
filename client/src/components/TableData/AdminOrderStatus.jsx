import React from 'react'

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
        </div>
    </div>
  )
}

export default AdminOrderStatus