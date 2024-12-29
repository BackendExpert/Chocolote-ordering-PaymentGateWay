import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DashNav from './DashNav';
import DashSide from './DashSide';
import DashFooter from './DashFooter';
import './dashcolor.css'


const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
    const [openside, setopenside] = useState(false);

    const headleopenside = () => {
      setopenside(!openside);
      console.log(openside)
    };
    

    useEffect(() => {
      // Function to handle screen resize
      const handleResize = () => {
        if (window.innerWidth >= 768) { // Set for desktop screens
          setopenside(true); // Ensure openside is true for desktop
        }
        else{
          setopenside(false);
        }
      };

      // Call handleResize on mount and on window resize
      handleResize(); // Call on initial load
      window.addEventListener('resize', handleResize); // Add event listener

      // Clean up event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);



    if (EmailUser !== null || RoleUser !== null) {
        return (
            <div className="w-full min-h-screen dash-bg">
              <div className="md:flex">
                <div className={` md:block shadow-custom md:w-[19%] w-[75%] fixed overflow-y-auto bottom-4 max-h-[96%] mt-4 ml-4 rounded-lg duration-500 ${openside ? 'translate-x-0' : '-translate-x-full'}`}>
                    <DashSide />
                </div>
                <div className="md:w-full md:ml-[21%] pt-4">
                  <DashNav openside={openside} headleopenside={headleopenside} />
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
          navigate('/signin');
        }, []);
      }
}

export default Dashboard;