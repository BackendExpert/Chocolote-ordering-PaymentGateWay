import React, { useEffect, useState } from 'react'
import DashbtnNoHover from '../../components/Buttons/DashbtnNoHover'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ManageProduct = () => {
    // const tableData = [
    //   {
    //     id: 1,
    //     name: 'Product 1',
    //     Stock: 10,
    //     status: "In-Stock",
    //   },
    //   {
    //     id: 2,
    //     name: 'Product 2',
    //     Stock: 0,
    //     status: "Out of Stock",
    //   },
    //   {
    //     id: 3,
    //     name: 'Product 3',
    //     Stock: 10,
    //     status: "In-Stock",
    //   },
    // ]

    const [AllProducts, SetAllProducts] = useState([])
    const token = localStorage.getItem("Login")
    
    useEffect(() => {
      axios.get(import.meta.env.VITE_APP_API + '/product/allproduct',
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        }
      )
      .then(res => SetAllProducts(res.data.Result))
      .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <h1 className="font-semibold text-[#696cff] text-xl">Manage Product</h1>

      <div className="bg-white p-4 rounded shadow-md my-4">
        <table className="w-full">
          <thead className='h-12 bg-[#696cff] text-white'>
            <tr>
              <th style={{ maxWidth: '2rem' }}>Product ID</th>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              AllProducts.map((data, index) => {
                return(
                  <tr className='text-gray-500 h-12 border-b border-[#696cff]/20' key={index}>
                    <td className='text-center font-semibold'>{data.productID}</td>
                    <td className='text-center'>{data.productName}</td>
                    <td className='text-center font-semibold'>{data.stockQuantity}</td>
                    <td className='text-center'>
                      {
                        data.status === "In Stock" ?
                          <div className="text-green-500 rounded font-semibold">In-Stock</div>
                        :
                          <div className="text-red-500 rounded font-semibold">Out-of-Stock</div>
                      }
                    </td>
                    <td className='text-center my-2'>
                      <Link to={`/Dashboard/ManageOneProdcut/${data.productID}`} >
                        <DashbtnNoHover btntype={'button'} btnvalue={'View'}/>
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageProduct