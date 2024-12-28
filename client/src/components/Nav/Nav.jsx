import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='text-white py-8 px-4 md:px-32'>
      <div className="flex justify-between">
        <div>
          <h1 className="choco-title text-3xl">Chocolate Ordering</h1>
        </div>
        <div className="flex items-center mt-2">
          {isMenuOpen ? (
            <IoClose onClick={handleMenuClick} className='cursor-pointer h-6 w-auto' />
          ) : (
            <TiThMenu onClick={handleMenuClick} className='cursor-pointer h-6 w-auto' />
          )}
        </div>
        <div
          className={`mt-8 absolute top-20 right-0 w-64 bg-[#7B3F00] shadow-lg rounded-lg p-4 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col">
            <h1 className="mx-4 my-2 cursor-pointer"><a href="/">Home</a></h1>
            <h1 className="mx-4 my-2 cursor-pointer">Product</h1>
            <h1 className="mx-4 my-2 cursor-pointer">About Us</h1>
            <h1 className="mx-4 my-2 cursor-pointer"><a href="signin">SignUp</a></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
