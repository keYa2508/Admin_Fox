import React, { useState } from 'react'
import '../TraineeDashboard/TraineeDashboard.css'
import { TableBody, TableHead } from '../../components_File/components'
import TaskBoard from '../../../Data/TaskBoard.json'
import { useNavigate } from 'react-router-dom'

function TraineeDashboard() {

  const navigate =useNavigate()

  const taskBoard =TaskBoard.map((items)=>(
          <TableBody
          name={items.taskName}
          type={items.startDate}
          date={items.endDate}
          status={items.assignedBy}
          assignedBy={<a href={items.reference} target='blank'>WWW.W3Schools.com</a>}
          />
        ))
  
  const testBoard = TaskBoard.map((items)=>(
        <TableBody
        name={items.taskName}
        type={items.startDate}
        date={items.endDate}
        status={items.assignedBy}
        assignedBy={<a href={items.reference} target='blank'>WWW.W3Schools.com</a>}
        deleteLogo={<button className='Test-Start' onClick={() => navigate('/test')}>Start</button>}
        />
      ))

  const [option, setOption] = useState(taskBoard)
  const [clrChange, setClrChange] = useState(0)

  const taskClick = () => {
    setOption(taskBoard)
    setClrChange(0)
  }

  const testClick = () => {
    setOption(testBoard)
    setClrChange(1)
  }

  return (
        <div className='Dashboard'>
          <div className='Dashboard-Head'>Dashboard</div>
    <div className='d-flex gap-3'>
      <div className={clrChange === 0 ? 'Dashboard-Head-Select' : 'Dashboard-Head-Unselect'} onClick={taskClick}>Task Board</div>
      <div className={clrChange === 1 ? 'Dashboard-Head-Select' : 'Dashboard-Head-Unselect'} onClick={testClick}>Test Board</div>
    </div>
    <div className='Dashboard-Table col-12'>
      <TableHead
      name={"Topic Name"}
      type={"Start Date"}
      date={"End Date"}
      status={"Assigned by"}
      assignedBy={"Reference"}
      />
    <div className='Trainee-Dashboard-Table-Body d-flex flex-column gap-4'>
          {option}
        </div>
        </div>
        </div>
  )
}

export default TraineeDashboard