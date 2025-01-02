import React, { useState } from 'react'
import DashInput from '../../components/forms/DashInput'
import DashInputTextArea from '../../components/forms/DashInputTextArea';

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
              <p className="mb-2 text-gray-500">Product Name : </p>
              <DashInput 
                Type={'text'}
                name={'productName'}
                value={productData.productName}
                onChange={handleInputChange}
                required={true}
                placeholder={'Product Name'}
              />
            </div>

            <div className="my-2">
              <p className="mb-2 text-gray-500">Product Description</p>
              <DashInputTextArea 
                name={'description'}
                value={productData.description}
                onChange={handleInputChange}
                required={true}
                placeholder={'Product Description'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct