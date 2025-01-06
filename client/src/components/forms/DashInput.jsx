import React from 'react'

const DashInput = ({ Type, name, value, placeholder, onChange, required }) => {
  return (
    <input 
        type={Type} 
        name={name}
        value={value} 
        className="bg-gray-200/40 w-full h-12 border border-[#696cff] rounded pl-2" 
        placeholder={placeholder} 
        required={!!required}
        onChange={onChange}
    />
  )
}

export default DashInput