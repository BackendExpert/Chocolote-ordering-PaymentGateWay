import React from 'react'
import { useParams } from 'react-router-dom'

const VIewUser = () => {
    const {id} = useParams()
    
  return (
    <div>VIewUser</div>
  )
}

export default VIewUser