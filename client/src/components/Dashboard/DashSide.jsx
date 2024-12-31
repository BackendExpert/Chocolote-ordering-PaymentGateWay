import React from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";

const DashSide = ({ headleopenside }) => {
  const SideMenu = [
    { id: 1, name: "Dashboard", link: '/Dashboard/Home', icon: <BsSpeedometer2 className='h-5 w-auto hover:fill-white' /> },
    {
      id: 2, name: "Orders Management", icon: <FaUserGroup className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "View All Orders", link: '/Dashboard/ManageVacancy' },
        { id: 2, name: "Update Order Status", link: '/Dashboard/ManageDivision' },
        { id: 3, name: "Refund Requests", link: '/Dashboard/ManageDivision' },
      ]
    },
    {
      id: 3, name: "Vacancies", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Browse Jobs", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Search and Filter", link: '/Dashboard/ManageStaff' },
      ]
    },
  ];

  const filteredMenu = SideMenu.map((menu) => {
    if (menu.id === 4) { 
      if (RoleUser === "Admin") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "All Applications" ||
            submenu.name === "Shortlist/Reject" ||
            submenu.name === "Request Documents" 
          ),
        };
      } else if (RoleUser === "CommitteeMember") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "Assigned" ||
            submenu.name === "Comment/Score"
          ),
        };
      } else if(RoleUser === "Applicant"){
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "My Applications" ||
            submenu.name === "Status" ||
            submenu.name === "Withdraw/Edit"
          ),
        };
      }
    }

    if (menu.id === 6) { 
      if (RoleUser === "CommitteeMember") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "Scheduled" ||
            submenu.name === "View Candidates"
          ),
        };
      } else if (RoleUser === "Applicant") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "My Scheduled" ||
            submenu.name === "Confirm/Reschedule"
          ),
        };
      }
    }

    if (menu.id === 8) { 
      if (RoleUser === "Admin") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "Manage Details" ||
            submenu.name === "Change Password"
          ),
        };
      } else if (RoleUser === "CommitteeMember") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "Manage Details" ||
            submenu.name === "Change Password"
          ),
        };
      } else if(RoleUser === "Applicant"){
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "Manage Details" ||
            submenu.name === "Upload Documents" ||
            submenu.name === "Change Password"
          ),
        };
      }
    }

    if (RoleUser === "Admin") {
      return !(menu.id === 3 || menu.id === 5 || menu.id === 6 || menu.id === 7 || menu.id === 9) ? menu : null;
    }

    if (RoleUser === "CommitteeMember") {
      return !(menu.id === 2 || menu.id === 3 || menu.id === 5 || menu.id === 7 || menu.id === 10 || menu.id === 11 || menu.id === 12 || menu.id === 13) ? menu : null;
    }

    if (RoleUser === "Applicant") {
      return !(menu.id === 2 || menu.id === 5 || menu.id === 9 || menu.id === 10 || menu.id === 11 || menu.id === 12 || menu.id === 13) ? menu : null;
    }

    
    return menu;
  }).filter(Boolean);

  return (
    <div className='dashside bg-white h-full rounded-xl scrollbar-hidden scrollbar-thin scrollbar-thumb-white scrollbar-track-white'>
      <div className="flex justify-between">
        <div className="flex p-4 title">
          <GiChocolateBar className='h-8 w-auto'/>
          <h1 className="text-xl pt-1 px-2 font-semibold">Chocolates</h1> 
        </div>
        <div className="p-4 title md:hidden" onClick={headleopenside}>
          <FaArrowLeft className='h-4 w-auto'/>
        </div>
      </div>
      <hr />    
      
    </div>
  )
}

export default DashSide