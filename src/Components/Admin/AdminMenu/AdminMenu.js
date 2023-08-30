import React, { useState } from 'react'
import '../AdminMenu/AdminMenu.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {PiFilesBold} from 'react-icons/pi'
import {FaFileUpload} from 'react-icons/fa'
import {MdDashboard} from 'react-icons/md'
import {LuFileEdit, LuLogOut} from 'react-icons/lu'
import {RiAccountCircleFill} from 'react-icons/ri'

function AdminMenu() {

    const navigate = useNavigate()

    const [logout, setLogout] = useState(false)

  return (
    <div className='Page'>
        {/* <Outlet> */}
        <div className=" Menubar col-2">
        <div className="Menu-Head col-12">Menu</div>
        <div className="options">
          <NavLink to={"/admin/dashboard"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')} >
            <MdDashboard/>
          <span> DASHBOARD </span>
          </NavLink>
          <NavLink to={"/admin/taskmanage"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')}>
            <LuFileEdit/>
            <span> TASK MANAGEMENT </span>
          </NavLink>
          <NavLink to={"/admin/report"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')}>
          <PiFilesBold/>
            <span >REPORT</span>
          </NavLink>
          <NavLink to={"/admin/contentupload"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')}>
          <FaFileUpload/>
            <span >CONTENT UPLOADING</span>
          </NavLink>
          <NavLink to={"/admin/account"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')}>
            <RiAccountCircleFill/>
            <span >ACCOUNT</span>
          </NavLink>
        </div>
      </div>
      <div className='Body'>
        <div className='Body-Head'>
          <div className='Welcome'>Welcome to your Dashboard</div>
          <div>
            <div className='Profile'><span onClick={() => navigate("/admin/account")} >Amresh Sriram</span><RiAccountCircleFill onClick={()=>setLogout(!logout)}/></div>
          {logout && (
            <button className='shadow rounded-md hover:bg-red-500 fs-5 fw-bold hover:text-white p-2 position-absolute end-10 b-50 d-flex align-items-center p-3 mt-4' style={{zIndex:999, gap:'15px'}} onClick={()=> navigate('/')}>
            Logout<LuLogOut/>
          </button>
          )}
          </div>
        </div>
      <Outlet />

      </div>
    </div>
  )
}

export default AdminMenu