import React from 'react'

const DashInputTextArea = ({ name, value, placeholder, onChange, required }) => {
  return (
    <textarea 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={!!required}
        className='bg-gray-200/40 w-full h-32 border border-[#696cff] rounded pl-2 pt-2'
    >

    </textarea>
  )
}

export default DashInputTextArea