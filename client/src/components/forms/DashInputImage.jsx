import React from 'react'

const DashInputImage = ({ name, value, onChange, required }) => {
  return (
    <input 
        type="file" 
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
            file:bg-[#696cff] 
            file:border-none
            file:text-white
            file:h-full
            file:px-4 
            file:cursor-pointer           
        '
    />
  )
}

export default DashInputImage