import React, { useState } from 'react'
import '../AdminDashboard/AdminDashboard.css'
import { MdPersonSearch} from 'react-icons/md'
import { RiDeleteBin4Line, RiFolderTransferLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import {IoMdAddCircle} from 'react-icons/io'
import Dashboard from '../../../Data/Dashboard.json';
import {TableBody, TableHead} from '../../components_File/components'
function AdminDashboard() {

  const navigate = useNavigate()


  const allUsersComp = Dashboard.NameList.map((items, index)=>(
    <TableBody
    name={items.name}
    type={items.type}
    date={items.date}
    status={items.status}
    assignedBy={items.assignedBy}
    editLogo={<div className='Table-Edit'><RiFolderTransferLine onClick={()=>navigate('/admin/userupdate')}/></div>}
    deleteLogo={<div className='Table-Delete'><RiDeleteBin4Line/></div>}
    />
  ))

  const traineeComp =Dashboard.NameList.map((items, index)=>(
    <TableBody
    name={items.name}
    type={items.type}
    date={items.date}
    status={items.status}
    assignedBy={items.assignedBy}
    editLogo={<div className='Table-Edit'><RiFolderTransferLine onClick={()=>navigate('/admin/userupdate')}/></div>}
    deleteLogo={<div className='Table-Delete'><RiDeleteBin4Line/></div>}
    />
  ))


  const candidateComp =Dashboard.NameList.map((items, index)=>(
    <TableBody
    name={items.name}
    type={items.type}
    date={items.date}
    status={items.status}
    assignedBy={items.assignedBy}
    editLogo={<div className='Table-Edit'><RiFolderTransferLine onClick={()=>navigate('/admin/userupdate')}/></div>}
    deleteLogo={<div className='Table-Delete'><RiDeleteBin4Line/></div>}
    />
  ))

  const [options , setOptions] = useState(allUsersComp)
  const [clrChange, setClrChange] = useState(0)

  const allUsersClick = () =>{
    setOptions(allUsersComp)
    setClrChange(0)
  }

  const traineeClick = () => {
    setOptions(traineeComp)
    setClrChange(1)
  }

  const candidateClick = () => {
    setOptions(candidateComp)
    setClrChange(2)
  }


  return (
        <div className='Dashboard'>
          <div className='Dashboard-Head'>Dashboard</div>
          <div className='Admin-User-Counts'>
            <div className='Admin-Count-box col-2'>
              <div className='Admin-Count-Type'>TOTAL USERS</div>
              <div className='Admin-Count'>07</div>
            </div>
            <div className='Admin-Count-box col-2'>
              <div className='Admin-Count-Type'>CANDIDATES</div>
              <div className='Admin-Count'>07</div>
            </div>
            <div className='Admin-Count-box col-2'>
              <div className='Admin-Count-Type'>TRAINEES</div>
              <div className='Admin-Count'>07</div>
            </div>
          </div>
          <div className='Admin-Dashboard-Menus'>
            <div className='Admin-Handle-Search'><MdPersonSearch/></div>
            <div className={clrChange === 0 ? 'Admin-Handle-Option-Select' : 'Admin-Handle-Option-Unselect'} onClick={allUsersClick}>ALL USERS</div>
            <div className={clrChange === 1 ? 'Admin-Handle-Option-Select' : 'Admin-Handle-Option-Unselect'} onClick={traineeClick}>TRAINEE</div>
            <div className={clrChange === 2 ? 'Admin-Handle-Option-Select' : 'Admin-Handle-Option-Unselect'} onClick={candidateClick}>CANDIDATE</div>
            <div className='Admin-Handle-Option-Add' onClick={()=> navigate('/admin/adduser')}>ADD USER &nbsp;<span><IoMdAddCircle/></span></div>
          </div>
          <div className='Admin-Dashboard-Table col-12'>
            <TableHead
            name={"Name"}
            type={"Type"}
            date={"Date"}
            status={"Status"}
            assignedBy={"Assigned By"}
            />
            <div className='Admin-Dasboard-Table-Body d-flex flex-column gap-4'>
              {options}
            </div>
        </div>
      </div>
  )
}

export default AdminDashboard