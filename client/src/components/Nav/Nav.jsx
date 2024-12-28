import React from 'react'

const Nav = () => {
  return (
    <div className='text-white bg-[#7B3F00] py-8 px-4 md:px-32'>
        <div className="md:flex justify-between">
            <div className="">
                <h1 className="choco-title text-xl">Chocolate Ordering</h1>
            </div>
            <div className="">
                <div className="flex">
                    <h1 className="mx-4">Home</h1>
                    <h1 className="mx-4">Product</h1>
                    <h1 className="mx-4">About Us</h1>
                    <h1 className="mx-4"><a href="signin">SignUp</a></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav