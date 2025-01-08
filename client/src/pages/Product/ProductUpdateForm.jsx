import React, { useState } from 'react'
import DashInput from '../../components/forms/DashInput'
import DashInputTextArea from '../../components/forms/DashInputTextArea';
import DashInputImage from '../../components/forms/DashInputImage';
import Dashbtn from '../../components/Buttons/Dashbtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductUpdateForm = ({ id }) => {
    const token = localStorage.getItem("Login")
    const navigate = useNavigate()
    const [ProductUpdateData, SetProductUpdateData] = useState({
        productName: '',
        productDesc: '',
        productPrice: '',
        productStock: '',
        productBrand: '',
        productWeight: '',
        image: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetProductUpdateData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        SetProductUpdateData((prevData) => ({
          ...prevData,
          [name]: files[0]  // Assuming only one image is uploaded
        }));
    };
  
    const headleUpdateProduct = async (e) => {
        e.preventDefault();

        try{
            const formData = new FormData();
        
            // Append product data to FormData, excluding the null or undefined values
            Object.keys(ProductUpdateData).forEach((key) => {
              if (ProductUpdateData[key]) {  // Append only if there's data
                formData.append(key, ProductUpdateData[key]);
              }
            });

            console.log(formData)


            const res = await axios.post(import.meta.env.VITE_APP_API + `/product/updateproduct/${id}`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Product Updated Successfull")
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
        <div className="my-4">
            <h1 className="text-[#696cff] font-semibold text-lg">Update Product Data</h1>
        </div>
        <form onSubmit={headleUpdateProduct} method="post">
            <div className="my-2">
                <h1 className="text-[#696cff] font-semibold">Product Name</h1>
                <DashInput 
                    Type={'text'}
                    name={'productName'}
                    value={ProductUpdateData.productName}
                    required={false}
                    onChange={handleInputChange}
                    placeholder={"Product Name"}
                />
            </div>
            <div className="my-2">
                <h1 className="text-[#696cff] font-semibold">Product Name</h1>
                <DashInputTextArea 
                    name={'productDesc'}
                    value={ProductUpdateData.productDesc}
                    required={false}
                    onChange={handleInputChange}
                    placeholder={"Product Description"}
                />
            </div>
            
            <div className="md:grid grid-cols-4 gap-3">
                <div className="my-2">
                    <h1 className="text-[#696cff] font-semibold">Product Name</h1>
                    <DashInput 
                        Type={'number'}
                        name={'productStock'}
                        value={ProductUpdateData.productStock}
                        required={false}
                        onChange={handleInputChange}
                        placeholder={"Product Stock"}
                    />
                </div>
                <div className="my-2">
                    <h1 className="text-[#696cff] font-semibold">Product Name</h1>
                    <DashInput 
                        Type={'number'}
                        name={'productPrice'}
                        value={ProductUpdateData.productPrice}
                        required={false}
                        onChange={handleInputChange}
                        placeholder={"Product Price"}
                    />
                </div>
                <div className="my-2">
                    <h1 className="text-[#696cff] font-semibold">Product Brand</h1>
                    <DashInput 
                        Type={'text'}
                        name={'productBrand'}
                        value={ProductUpdateData.productBrand}
                        required={false}
                        onChange={handleInputChange}
                        placeholder={"Product Brand"}
                    />
                </div>
                <div className="my-2">
                    <h1 className="text-[#696cff] font-semibold">Product Weight</h1>
                    <DashInput 
                        Type={'text'}
                        name={'productWeight'}
                        value={ProductUpdateData.productWeight}
                        required={false}
                        onChange={handleInputChange}
                        placeholder={"Product Weight"}
                    />
                </div>
            </div>
            
            <div className="my-2">
                <h1 className="text-[#696cff] font-semibold">Product Image</h1>
                <DashInputImage 
                    name={'image'}
                    required={false}
                    onChange={handleImageChange}
                />
            </div>

            <div className="my-4">
                <Dashbtn btntype={'submit'} btnvalue={'Update Product Data'} />
            </div>

        </form>
    </div>
  )
}

export default ProductUpdateForm