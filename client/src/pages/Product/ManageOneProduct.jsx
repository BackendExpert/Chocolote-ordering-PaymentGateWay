import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashbtnNoHover from '../../components/Buttons/DashbtnNoHover'
import Dashbtn from '../../components/Buttons/Dashbtn'
import DashBtnClose from '../../components/Buttons/DashBtnClose'
import ProductUpdateForm from './ProductUpdateForm'
import axios from 'axios'

const ManageOneProduct = () => {
    const {id} = useParams()
    const token = localStorage.getItem("Login")
    const [ProdcutViewForm, SetProductViewForm] = useState(false)

    const headleUpdateForm = (e) => {
        SetProductViewForm(!ProdcutViewForm)
    }

    const [OneProduct, SetOneProduct] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + `/product/oneproduct/${id}`,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(res => SetOneProduct(res.data.Result))
        .catch(err => console.log(err))
    }, [])
    

  return (
    <div>
        <h1 className="font-semibold text-[#696cff] text-xl">Manage Product : {id}</h1>

        <div className="bg-white p-4 rounded shadow-md my-4">
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img src={import.meta.env.VITE_APP_API + '/' + OneProduct.imageUrl} alt="" className='md:h-72 h-40 rounded-md w-auto'/>
                </div>
                <div className="w-full pt-4">
                    <div className="ml-4">
                        <div className="">
                            <h1 className="text-[#696cff] font-semibold pb-2">Product ID</h1>
                            <p className="text-gray-500 pb-4">{OneProduct.productID}</p>
                        </div>

                        <div className="">
                            <h1 className="text-[#696cff] font-semibold pb-2">Product Name</h1>
                            <p className="text-gray-500 ">{OneProduct.productName}</p>
                        </div>

                        <div className="py-4">
                            <h1 className="text-[#696cff] font-semibold pb-2">Product Description</h1>
                            <p className="text-gray-500 ">
                             {OneProduct.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:grid grid-cols-4 gap-4 py-4">
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Price</h1>
                    <p className="text-gray-500">$ {OneProduct.price}</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Stock</h1>
                    <p className="text-gray-500">{OneProduct.stockQuantity}</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Status</h1>
                    <p className="text-gray-500">In-Stock</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Weight</h1>
                    <p className="text-gray-500">{OneProduct.weight}g</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Brand</h1>
                    <p className="text-gray-500">{OneProduct.brand}</p>
                </div>                
            </div>

            <div className="">
                {
                    ProdcutViewForm === false ?
                        <Dashbtn btntype={'button'} btnvalue={'Update Product Data'} onclick={headleUpdateForm}/>
                    :
                        <DashBtnClose btntype={'button'} btnvalue={"Close"} onclick={headleUpdateForm} />

                }
            </div>

        </div>
            <div className="">
                {
                    ProdcutViewForm === false ?
                        <div className="">
                           
                        </div>
                    :
                        <div className="bg-white p-4 rounded shadow-md my-4">
                            <ProductUpdateForm id={id}/>
                        </div>
                }
            </div>
    </div>
  )
}

export default ManageOneProduct