import { GiChocolateBar } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsChevronUp, BsChevronDown, BsSpeedometer2, BsMegaphoneFill } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { logout } from "../Auth/PriveteRoute";
import { FaUserAlt, FaPowerOff  } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineFavorite, MdOutlineManageSearch, MdInventory2 } from "react-icons/md";
import { FaCartShopping, FaTags, FaUserGroup, FaGear } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";


const DashSide = ({ headleopenside }) => {
  const navigate = useNavigate();
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (id) => {
    setSubmenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const headlelogout = () => {
    logout()
    navigate('/signin')
    window.location.reload();
  };

  const SideMenu = [
    { id: 1, name: "Dashboard", link: '/Dashboard/Home', icon: <BsSpeedometer2 className='h-5 w-auto hover:fill-white' /> },
    {
      id: 2, name: "Orders Management", icon: <MdOutlineManageSearch className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "View All Orders", link: '' },
        { id: 2, name: "Update Order Status", link: '' },
        { id: 3, name: "Refund Requests", link: '' },
      ]
    },
    {
      id: 3, name: "Products Management", icon: <AiFillProduct className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Add New Product", link: '/Dashboard/CreateProduct' },
        { id: 2, name: "Manage Categories", link: '/Dashboard/ManageProdcut' },
      ]
    },
    {
      id: 4, name: "Inventory", icon: <MdInventory2 className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Stock Levels", link: '' },
        { id: 2, name: "Restock Alerts", link: '' },
      ]
    },
    {
      id: 5, name: "Users Management", icon: <FaUserGroup className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "View All Users", link: '/Dashboard/Users' },
        { id: 2, name: "Manage Admins", link: '' },
      ]
    },
    {
      id: 6, name: "Reports", icon: <TbReportSearch className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Sales Reports", link: '' },
        { id: 2, name: "User Activity", link: '' },
      ]
    },
    {
      id: 7, name: "Promotions", icon: <BsMegaphoneFill className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Discount Coupons", link: '' },
        { id: 2, name: "Seasonal Offers", link: '' },
      ]
    },
    {
      id: 8, name: "Settings", icon: <FaGear className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "General Settings", link: '' },
        { id: 2, name: "Payment Gateway Setup", link: '' },
      ]
    },
    {
      id: 11, name: "My Orders", icon: <CiBoxList className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Track Orders", link: '' },
        { id: 2, name: "Order History", link: '' },
      ]
    },
    {
      id: 12, name: "Favorites", icon: <MdOutlineFavorite className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Wishlist", link: '' },
        { id: 2, name: "Saved Items", link: '' },
      ]
    },
    {
      id: 13, name: "Cart", icon: <FaCartShopping className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "View Cart", link: '' },
        { id: 2, name: "Checkout", link: '' },
      ]
    },
    {
      id: 14, name: "Offers", icon: <FaTags className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Active Coupons", link: '' },
        { id: 2, name: "Ongoing Deals", link: '' },
      ]
    },
    {
      id: 15, name: "Support", icon: <BiSupport className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Contact Us", link: '' },
        { id: 2, name: "FAQs", link: '' },
      ]
    },
    {
      id: 9, name: "Profile", icon: <FaUserAlt className='h-5 w-auto fill-[#7e7c88]' />, submenu: [
        { id: 1, name: "Admin Profile", link: '' },
        { id: 2, name: "My Profile", link: '' },
        { id: 3, name: "Manage Addresses", link: '' },
      ]
    },    
  ];

  const filteredMenu = SideMenu.map((menu) => {
    if (menu.id === 9) { 
      if (RoleUser === "admin") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "Admin Profile"
          ),
        };
      } else if (RoleUser === "user") {
        return {
          ...menu,
          submenu: menu.submenu.filter(submenu =>
            submenu.name === "My Profile" ||
            submenu.name === "Manage Addresses"
          ),
        };
      } 
    }    

    if (RoleUser === "admin") {
      return !(menu.id === 11 || menu.id === 12 || menu.id === 13 || menu.id === 14 || menu.id === 15) ? menu : null;
    }

    if (RoleUser === "user") {
      return !(menu.id === 2 || menu.id === 3 || menu.id === 4 || menu.id === 5 || menu.id === 6 || menu.id === 7 || menu.id === 8) ? menu : null;
    }
    
    return menu;
  }).filter(Boolean);

  return (
    <div className='dashside bg-white min-h-full rounded-xl scrollbar-hidden scrollbar-thin scrollbar-thumb-white scrollbar-track-white'>
      <div className="flex justify-between">
        <div className="flex p-4 title">
          <GiChocolateBar className='h-8 w-auto'/>
          <h1 className="text-xl pt-1 px-2 font-semibold">Chocolates</h1> 
        </div>
        <div className="p-4 title md:hidden" onClick={headleopenside}>
          <FaArrowLeft className='h-4 w-auto'/>
        </div>
      </div>
      <div className="my-4">
        <center>
          <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className="h-40 w-auto rounded-full"/>
        </center>
      </div>
      <div className="h-full overflow-y-auto hide-scrollbar ">
            {filteredMenu.map((menu) => (
              <MenuComponent
                key={menu.id}
                menu={menu}
                isActive={location.pathname === menu.link}
                submenuOpen={submenuOpen}
                toggleSubmenu={toggleSubmenu}
                navigate={navigate}
              />
            ))}
            <div className="ml-8 pt-1">
              <div className="flex cursor-pointer" onClick={headlelogout}>
                <FaPowerOff className='h-5 w-auto fill-[#7e7c88]'/>
                <p className="text-gray-500 pl-2">Logout</p>
              </div>
              
            </div>
          </div>
      <hr />    
      
    </div>
  );
}

const MenuComponent = ({ menu, isActive, submenuOpen, toggleSubmenu, navigate }) => (
  <div className=''>
    <div
      className={`my-2 text-[#7e7c88] duration-300 py-1 pl-6 px-4 pb-2 flex items-center justify-between cursor-pointer mx-2 rounded-xl ${isActive ? 'bg-[#7466f1] text-gray-100' : 'hover:bg-[#9e94f5]/40 hover:shadow-md'}`}
      onClick={() => menu.submenu ? toggleSubmenu(menu.id) : navigate(menu.link)}
    >
      <div className="flex">
        <div className="pt-1 pr-2">{menu.icon}</div>
        <div className="pt-1">{menu.name}</div>
      </div>
      {menu.submenu && (
        <div className="">
          {submenuOpen[menu.id] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      )}
    </div>
    {menu.submenu && submenuOpen[menu.id] && (
      <div className="my-1">
        <div className="bg-none mx-4 ">
          {menu.submenu.map((submenu) => (
            <Link to={submenu.link} key={submenu.id}>
              <div className={`my-2 duration-300 hover:bg-[#7466f1] text-[#7e7c88] hover:text-white rounded-md py-1 px-2 text-sm ${isActive ? 'bg-white' : ''}`}>
                <p className="pl-6">{submenu.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default DashSide