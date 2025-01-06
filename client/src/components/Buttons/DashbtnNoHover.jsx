import React from 'react'

const DashbtnNoHover = ({ btntype, btnvalue, onclick}) => {
  return (
    <button
        type={btntype}
        onclick={onclick}
        className='bg-[#696cff] text-white py-2 px-4 rounded'
        >
        {btnvalue}
    </button>
  )
}

export default DashbtnNoHover