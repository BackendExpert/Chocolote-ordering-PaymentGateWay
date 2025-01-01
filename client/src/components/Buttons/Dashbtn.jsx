import React from 'react'

const Dashbtn = ({ btntype, btnvalue, onclick}) => {
  return (
    <button
        type={btntype}
        onclick={onclick}
        className='bg-[#696cff] text-white py-2 px-4 rounded duration-500 hover:ml-2'
        >
        {btnvalue}
    </button>
  )
}

export default Dashbtn