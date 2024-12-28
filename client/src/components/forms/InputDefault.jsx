import React from 'react'

const InputDefault = ({ Type, name, value, placeholder, onChange, required }) => {

    return (
        <input
          className='text-[#654321] pl-2 placeholder:text-[#BC9773] w-full h-12 rounded border border-[#654321] bg-[#BC9773]/10'
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