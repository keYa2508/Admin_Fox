import React, { useState } from 'react'
import '../TraineeMenu/TraineeMenu.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
import {GiProgression} from 'react-icons/gi'
import {RiAccountCircleFill} from 'react-icons/ri'
import { LuLogOut} from 'react-icons/lu'

function TraineeMenu() {

    const navigate = useNavigate()
    
    const [logout, setLogout] = useState(false)

  return (
    <div className='Page'>
      <div className=" Menubar col-2">
        <div className="Menu-Head col-12">Menu</div>
        <div className="options">
          <NavLink to={"/trainee/dashboard"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')}>
            <MdDashboard/>
          <span> DASHBOARD </span>
          </NavLink>
          <NavLink to={"/trainee/progress"} className={({isActive}) => (isActive ? 'option-select' : 'option-unselect')}>
            <GiProgression/>
            <span> PROGRESS </span>
          </NavLink>
        </div>
      </div>
      <div className='Body'>
      <div className='Body-Head'>
          <div className='Welcome'>Welcome to your Dashboard</div>
          <div>
            <div className='Profile' onClick={()=>setLogout(!logout)}><span>Amresh Sriram</span><RiAccountCircleFill/></div>
          {logout && (
            <button className='shadow rounded-md hover:bg-red-500 fs-5 fw-bold hover:text-white p-2 position-absolute end-10 b-50 d-flex align-items-center' style={{zIndex:999, gap:'15px'}} onClick={()=>navigate('/')}>
            Logout<LuLogOut/>
          </button>
          )}
          </div>
        </div>
        <Outlet/>
        </div>
    </div>
  )
}

export default TraineeMenu