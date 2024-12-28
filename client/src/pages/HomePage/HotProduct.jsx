import React from 'react'
import BgNon from '../../components/Buttons/BgNon'

const HotProduct = () => {
    const hotitems = [
        {
            id: 1, 
            name: 'Chocolate 1', 
            price: '$250.00', 
            img: 'https://wallpapercave.com/wp/wp14829725.webp', 
            decs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam, in quam sequi voluptas doloribus, maiores quisquam voluptatibus corporis quis nulla magni ullam esse facilis alias illum itaque necessitatibus accusamus!'
        },
        {
            id: 2, 
            name: 'Chocolate 2', 
            price: '$250.00', 
            img: 'https://wallpapercave.com/wp/wp14393660.png', 
            decs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam, in quam sequi voluptas doloribus, maiores quisquam voluptatibus corporis quis nulla magni ullam esse facilis alias illum itaque necessitatibus accusamus!'
        },
        {
            id: 3, 
            name: 'Chocolate 3', 
            price: '$250.00', 
            img: 'https://wallpapercave.com/wp/wp4144882.jpg', 
            decs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam, in quam sequi voluptas doloribus, maiores quisquam voluptatibus corporis quis nulla magni ullam esse facilis alias illum itaque necessitatibus accusamus!'
        },
    ]
  return (
    <div className="px-4 md:px-32 my-8">
        <div className="">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-500 choco-title">Hot Products</h1>

                <p className="mt-4 mb-2 ">our hot products</p>
            </div>

            <div className="md:grid grid-cols-3 gap-3 mt-12">
                {
                    hotitems.map((item, index) => {
                        return (
                            <div className="bg-[#BC9773] rounded-md md:my-0 my-4" key={index}>
                                <div className="">
                                    <img src={item.img} alt="" className='rounded-t-md' />
                                </div>
                                <div className="p-4">
                                    <h1 className="text-white font-semibold text-xl py-4">{item.name}</h1>

                                    <p className=" text-white">
                                        {item.decs}
                                    </p>

                                    <p className="py-4 font-semibold text-[#2E1308]">{item.price}</p>

                                    <BgNon btntype={'button'} btnvalue={'View More'}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default HotProduct