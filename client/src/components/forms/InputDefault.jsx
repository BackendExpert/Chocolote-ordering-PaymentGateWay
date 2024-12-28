import React from 'react'

const InputDefault = ({ Type, name, value, placeholder, onChange, required }) => {

    return (
        <input
          className='h-auto border border-[#BC9773] bg-gray-100 w-full rounded rounded-r-lg pl-4'
          type={Type}
          name={name}
          value={value}
          placeholder={placeholder}
          required={!!required} // check required is empty or not if empty = false not empty or true = true
          onChange={onChange} 
        />
    );


}

export default InputDefault