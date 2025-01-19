import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserManagement from '../../components/TableData/UserManagement'

const User = () => {

  return (
    <div>
        <h1 className="font-semibold text-[#696cff] text-xl">Manage Users</h1>
        <UserManagement />
    </div>
  )
}

export default User