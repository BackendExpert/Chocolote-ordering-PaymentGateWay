import React from 'react'

const BgNon = ({ btnvalue, btntype, onClick }) => {
  return (
    <button 
        type={btntype} 
        onClick={onClick} 
        className='bg-none text-white rounded-full py-2 px-4 border-2 border-white duration-500 hover:bg-white hover:text-black'>

    {btnvalue}
    
    </button>
  )
}

export default BgNon