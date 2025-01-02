import React, { useState } from 'react'
import DashInput from '../../components/forms/DashInput'
import DashInputTextArea from '../../components/forms/DashInputTextArea';
import DashInputImage from '../../components/forms/DashInputImage';
import Dashbtn from '../../components/Buttons/Dashbtn';
import axios from 'axios';

const CreateProduct = () => {
    const [productData, setProductData] = useState({
      productName: '',
      description: '',
      price: '',
      stockQuantity: '',
      brand: '',
      image: null,
      weight: '',
    })

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProductData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleImageChange = (e) => {
      const { name, files } = e.target;
      setProductData((prevData) => ({
        ...prevData,
        [name]: files[0]  // Assuming only one image is uploaded
      }));
    };

    const headleCreateProduct = async (e) => {
      e.preventDefault();
      try{
        const formData = new FormData();
        // Append product data
        Object.keys(productData).forEach(key => {
          formData.append(key, productData[key]);
        });

        console.log(formData)
        
        // console.log(productData)
        // const res = await axios.post(import.meta.env.VITE_APP_API + '/product/createproduct')
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <div>
      <h1 className="font-semibold text-[#696cff] text-xl">Create Product</h1>

      <div className="bg-white p-4  shadow-md rounded my-4">
        <div className="">
          <form method="post" onSubmit={headleCreateProduct}>
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

            <div className="">
              <p className="mb-2 text-gray-500">Product Price : </p>
              <DashInput 
                Type={'number'}
                name={'price'}
                value={productData.price}
                onChange={handleInputChange}
                required={true}
                placeholder={'Product Price'}
              />
            </div>

            <div className="md:grid grid-cols-3 gap-3">
              <div className="">
                <p className="my-2 text-gray-500">Product Stock Quantity : </p>
                <DashInput 
                  Type={'number'}
                  name={'stockQuantity'}
                  value={productData.stockQuantity}
                  onChange={handleInputChange}
                  required={true}
                  placeholder={'Product Stock Quantity'}
                />
              </div>
              <div className="">
                <p className="my-2 text-gray-500">Product Brand : </p>
                <DashInput 
                  Type={'text'}
                  name={'brand'}
                  value={productData.brand}
                  onChange={handleInputChange}
                  required={true}
                  placeholder={'Product Brand'}
                />
              </div>
              <div className="">
                <p className="my-2 text-gray-500">Product Weight : </p>
                <DashInput 
                  Type={'number'}
                  name={'weight'}
                  value={productData.weight}
                  onChange={handleInputChange}
                  required={true}
                  placeholder={'Product Weight'}
                />
              </div>
            </div>
            <div className="">
              <p className="my-2 text-gray-500">Product Image : </p>
              <DashInputImage 
                name={'image'}
                value={productData.image}
                onChange={handleImageChange}
                required={true}
              />
            </div>

            <div className="my-4">
              <Dashbtn btntype={'submit'} btnvalue={'Create Product'}/>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct