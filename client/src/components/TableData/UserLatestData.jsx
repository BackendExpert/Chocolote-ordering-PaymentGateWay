import React from 'react'

const UserLatestData = () => {
    const testData = [
        {
            id: 1,
            name: 'Order 1',
            stauts: 'Active',            
        },
        {
            id: 2,
            name: 'Order 1',
            stauts: 'Active',            
        }
    ]
  return (
    <div>
        <table className='w-full'>
            <thead className='h-12 bg-[#696cff] text-white'>
                <tr>
                    <th>Order ID</th>
                    <th>Order Name</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}

export default UserLatestData