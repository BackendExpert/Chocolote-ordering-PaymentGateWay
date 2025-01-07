import React, { useState } from 'react'
import DashInput from '../../components/forms/DashInput'
import DashInputTextArea from '../../components/forms/DashInputTextArea';
import DashInputImage from '../../components/forms/DashInputImage';

const ProductUpdateForm = () => {
    const [ProductUpdateData, SetProductUpdateData] = useState({
        productName: '',
        productDesc: '',
        productPrice: '',
        productStock: '',
        productBrand: '',
        productWeight: '',
        productImage: '',
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
  

  return (
    <div>
        <div className="my-4">
            <h1 className="text-[#696cff] font-semibold text-lg">Update Product Data</h1>
        </div>
        <form method="post">
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
            
            <div className="">
                <h1 className="text-[#696cff] font-semibold">Product Weight</h1>
                <DashInputImage 
                    name={'productImage'}
                    required={false}
                    onChange={handleImageChange}
                />
            </div>

        </form>
    </div>
  )
}

export default ProductUpdateForm