import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DashbtnNoHover from '../../components/Buttons/DashbtnNoHover'
import Dashbtn from '../../components/Buttons/Dashbtn'
import DashBtnClose from '../../components/Buttons/DashBtnClose'
import ProductUpdateForm from './ProductUpdateForm'

const ManageOneProduct = () => {
    const {id} = useParams()
    const [ProdcutViewForm, SetProductViewForm] = useState(false)

    const headleUpdateForm = (e) => {
        SetProductViewForm(!ProdcutViewForm)
    }
    

  return (
    <div>
        <h1 className="font-semibold text-[#696cff] text-xl">Manage Product : {id}</h1>

        <div className="bg-white p-4 rounded shadow-md my-4">
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img src="https://wallpapercave.com/wp/wp14829725.webp" alt="" className='md:h-72 h-40 rounded-md w-auto'/>
                </div>
                <div className="w-full pt-4">
                    <div className="ml-4">
                        <div className="">
                            <h1 className="text-[#696cff] font-semibold pb-2">Product ID</h1>
                            <p className="text-gray-500 pb-4">P001</p>
                        </div>

                        <div className="">
                            <h1 className="text-[#696cff] font-semibold pb-2">Product Name</h1>
                            <p className="text-gray-500 ">Procut Name</p>
                        </div>

                        <div className="py-4">
                            <h1 className="text-[#696cff] font-semibold pb-2">Product Description</h1>
                            <p className="text-gray-500 ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iure dolor aspernatur in repellendus quis perferendis rerum sed consequuntur odio. Deserunt repudiandae voluptate molestiae nemo eaque hic nihil suscipit. Quod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:grid grid-cols-4 gap-4 py-4">
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Price</h1>
                    <p className="text-gray-500">$ 1000.00</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Stock</h1>
                    <p className="text-gray-500">10</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Status</h1>
                    <p className="text-gray-500">In-Stock</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Weight</h1>
                    <p className="text-gray-500">150g</p>
                </div>
                <div className="">
                    <h1 className="text-[#696cff] font-semibold pb-2">Product Brand</h1>
                    <p className="text-gray-500">Chocolate</p>
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
                            <ProductUpdateForm />
                        </div>
                }
            </div>
    </div>
  )
}

export default ManageOneProduct