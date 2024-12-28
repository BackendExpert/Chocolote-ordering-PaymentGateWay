import React from 'react'

const SubmitBtn = ({ btntype, btnvalue, onClick}) => {
  return (
    <button 
        type={btntype} 
        onClick={onClick}
        className='
            bg-[#BC9773]
            text-white
            font-semibold
            py-2
            px-8
            rounded-md
        '
        >
            
        {btnvalue}
    </button>
  )
}

export default SubmitBtn