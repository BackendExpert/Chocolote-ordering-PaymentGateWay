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
      id: 3, name: "Products Management", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Add New Product", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Edit Products", link: '/Dashboard/ManageStaff' },
        { id: 3, name: "Manage Categories", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 4, name: "Inventory", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Stock Levels", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Restock Alerts", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 5, name: "Users Management", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "View All Users", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Manage Admins", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 5, name: "Reports", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Sales Reports", link: '/Dashboard/AddStaff' },
        { id: 2, name: "User Activity", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 6, name: "Promotions", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Discount Coupons", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Seasonal Offers", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 7, name: "Settings", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "General Settings", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Payment Gateway Setup", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 8, name: "Profile", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Admin Profile", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Manage Addresses", link: '/Dashboard/ManageStaff' },
      ]
    },
    { id: 9, name: "Logout", icon: <BsSpeedometer2 className='h-5 w-auto hover:fill-white' /> },
    {
      id: 10, name: "My Orders", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Track Orders", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Order History", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 11, name: "Favorites", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Wishlist", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Saved Items", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 12, name: "Cart", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "View Cart", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Checkout", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 13, name: "Offers", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Active Coupons", link: '/Dashboard/AddStaff' },
        { id: 2, name: "Ongoing Deals", link: '/Dashboard/ManageStaff' },
      ]
    },
    {
      id: 14, name: "Support", icon: <FaUserCheck className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Contact Us", link: '/Dashboard/AddStaff' },
        { id: 2, name: "FAQs", link: '/Dashboard/ManageStaff' },
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

    if (RoleUser === "admin") {
      return !(menu.id === 3 || menu.id === 5 || menu.id === 6 || menu.id === 7 || menu.id === 9) ? menu : null;
    }

    if (RoleUser === "user") {
      return !(menu.id === 2 || menu.id === 3 || menu.id === 5 || menu.id === 7 || menu.id === 10 || menu.id === 11 || menu.id === 12 || menu.id === 13) ? menu : null;
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