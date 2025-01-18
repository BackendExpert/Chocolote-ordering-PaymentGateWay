import React from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const {token} = useParams()
  return (
    <div>{token}</div>
  )
}

export default ResetPassword