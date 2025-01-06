import React from 'react'
import { useParams } from 'react-router-dom'

const ManageOneProduct = () => {
    const {id} = useParams()
  return (
    <div>
        <h1 className="font-semibold text-[#696cff] text-xl">Manage Product : {id}</h1>
    </div>
  )
}

export default ManageOneProduct