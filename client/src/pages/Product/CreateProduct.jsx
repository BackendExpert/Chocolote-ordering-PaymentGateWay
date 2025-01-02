import React, { useState } from 'react'
import DashInput from '../../components/forms/DashInput'

const CreateProduct = () => {
    const [productData, setProductData] = useState({
      productName: '',
      description: '',
      price: '',
      stockQuantity: '',
      brand: '',
      image: '',
      weight: '',
    })

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProductData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  return (
    <div>
      <h1 className="font-semibold text-[#696cff] text-xl">Create Product</h1>

      <div className="bg-white p-4  shadow-md rounded">
        <div className="">
          <form method="post">
            <div className="">
              <p className="mb-2 text-lg text-gray-500">Product Name : </p>
              <DashInput 
                Type={'text'}
                name={'productName'}
                value={productData.productName}
                onChange={handleInputChange}
                required={true}
                placeholder={'Product Name'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct