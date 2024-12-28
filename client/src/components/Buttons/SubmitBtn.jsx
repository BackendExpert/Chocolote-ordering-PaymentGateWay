import React from 'react'

const SubmitBtn = ({ btntype, btnvalue, onClick}) => {
  return (
    <button 
        type={btntype} 
        onClick={onClick}
        className=''
        >
            
        {btnvalue}
    </button>
  )
}

export default SubmitBtn