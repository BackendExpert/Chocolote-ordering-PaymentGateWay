import React, { useState } from 'react'
import DashInput from '../../components/forms/DashInput'
import DashInputTextArea from '../../components/forms/DashInputTextArea';
import DashInputImage from '../../components/forms/DashInputImage';
import Dashbtn from '../../components/Buttons/Dashbtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const token = localStorage.getItem("Login")
    const navigate = useNavigate()
    const [productData, setProductData] = useState({
      productName: '',
      productID: '',
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
        
        // Append product data to FormData, excluding the null or undefined values
        Object.keys(productData).forEach((key) => {
          if (productData[key]) {  // Append only if there's data
            formData.append(key, productData[key]);
          }
        });
        console.log(formData)
        
        // console.log(productData)
        // const res = await axios.post(import.meta.env.VITE_APP_API + '/product/createproduct')
        const res = await axios.post(import.meta.env.VITE_APP_API + '/product/createproduct', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          if(res.data.Status === "Success"){
            alert("Prodcut Created Successfully")
            navigate('/Dashboard/ManageProdcut')
          }
          else{
            alert(res.data.Error)
          }
        })
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
            <div className="md grid grid-cols-2 gap-2">
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

              <div className="">
              <p className="mb-2 text-gray-500">Product ID : </p>
                <DashInput 
                  Type={'text'}
                  name={'productID'}
                  value={productData.productID}
                  onChange={handleInputChange}
                  required={true}
                  placeholder={'Product ID'}
                />
              </div>
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