import React from 'react'

const DashBtnClose = ({ btntype, btnvalue, onclick}) => {
  return (
    <button
        type={btntype}
        onClick={onclick}
        className='bg-red-500 text-white py-2 px-4 rounded duration-500 hover:ml-2'
        >
        {btnvalue}
    </button>
  )
}

export default DashBtnClose