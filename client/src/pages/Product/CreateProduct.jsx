import React from 'react'
import DashInput from '../../components/forms/DashInput'

const CreateProduct = () => {
  return (
    <div>
      <h1 className="font-semibold text-[#696cff] text-xl">Create Product</h1>

      <div className="bg-white p-4  shadow-md rounded">
        <p className="">Product Name: </p>
        <input type="text" name="" id="" className="bg-gray-200 w-full h-12 border border-[#696cff] rounded pl-2" placeholder='Product Name' required/>
        <DashInput />
      </div>
    </div>
  )
}

export default CreateProduct