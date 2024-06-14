import React from 'react'
import { userMenu } from './Menus/userMenu'
import { Link, useLocation } from 'react-router-dom'
import '../../../styles/Layout.css'

const SideBar = () => {

  const location = useLocation();

  return (
    <>
      <div className='sidebar'>
         <div className='menu'>
            {userMenu.map((menu,index) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div className={`menu-item ${isActive && 'active'}`} key={index}>
                     <i className={menu.icon}></i>
                     <Link to={menu.path}>{menu.name}</Link>
                  </div>
                )
            })}
         </div>
      </div>  
    </>
  )
}

export default SideBar