import React from 'react'

const DashInputImage = ({ name, value, onChange, required }) => {
  return (
    <input 
        type="image" 
        name={name}
        value={value}
        onChange={onChange}
        required={!!required}
        className='
            w-full
            h-12
            border
            border-[#696cff]
            rounded            
        '
    />
  )
}

export default DashInputImage