import React from 'react'

const CustomBtn = ({ btnvalue, btntype, onClick, bgColor }) => {
  return (
    <button
        type={btntype}
        className={`text-white rounded py-1 px-4 ${bgColor} mx-2`}
        onClick={onClick}
    >
        {btnvalue}
    </button>
  )
}

export default CustomBtn