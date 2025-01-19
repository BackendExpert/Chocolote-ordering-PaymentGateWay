import React from 'react'

const CustomBtn = ({ btnvalue, btntype, onClick, bgColor }) => {
  return (
    <button
        type={btntype}
        className={`text-white rounded py-2 px-4 ${bgColor}`}
        onClick={onClick}
    >
        {btnvalue}
    </button>
  )
}

export default CustomBtn