import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DashNav from './DashNav';
import DashSide from './DashSide';
import DashFooter from './DashFooter';

const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if (EmailUser !== null || RoleUser !== null) {
        return (
            <div className="w-full min-h-screen bg-[#f7f7f7]">
              <div className="md:flex">
                <div className="shadow-custom w-[19%] fixed overflow-y-auto scrollbar-hidden scrollbar-thin scrollbar-thumb-white hover:scrollbar-thumb-gray-400 scrollbar-track-white">
                    <DashSide />
                </div>
                <div className="md:w-full md:ml-[20%] pt-4">
                  <DashNav /> 
                  <div className="px-2 md:mr-4   md:mx-0 ml-4 mr-4 py-8">
                    <Outlet />
                  </div>
                  <DashFooter />
                </div>
              </div>
            </div>
          );
      } else {
        useEffect(() => {
          localStorage.clear();
          navigate('/LoginPortal');
        }, []);
      }
}

export default Dashboard;