import React from 'react'
import { useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'
import AdminDashHome from '../../components/Dashboard/AdminDashHome'
import UserDashHome from '../../components/Dashboard/UserDashHome'

const DashHome = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
  return (
    <div>
      <div className="">
        <h1 className="text-xl uppercase font-semibold text-[#696cff]">Dashboard</h1>
      </div>
      {
        (() => {
          if(RoleUser === "admin"){
            return (
              <AdminDashHome />
            )
          }
          else if(RoleUser === "user"){
            return (
              <UserDashHome />
            )
          }
        })()
      }

    </div>
  )
}

export default DashHome