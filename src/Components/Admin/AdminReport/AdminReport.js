import React from 'react'
import {BiSolidCloudDownload} from 'react-icons/bi'
import { TableBody, TableHead } from '../../components_File/components'
import Report from '../../../Data/Reports.json'

function AdminReport() {

  return (
        <div className='Dashboard'>
            <div className='Dashboard-Head'>Report</div>
            <div className='flex items-center justify-between  flex-end p-1'>
                <button className='btn btn-primary d-flex align-items-center fw-bolder gap-3'>
                    Download <BiSolidCloudDownload className='fs-5'/>
                </button>
                <select className='shadow-md sm:font-semibold p-1 w-56'>
                    <option>
                        sakthi Naveen
                    </option>
                    <option>
                        Kalai Selvan
                    </option>
                </select>
            </div>
            <div className='Admin-Dashboard-Table col-12'>
        <TableHead
        name={"Task Name"}
        type={"Start Date"}
        date={"End Date"}
        status={"Assigned by"}
        assignedBy={"Percentage"}
        editLogo={"Status"}
        />
      <div className='Trainee-Dashboard-Table-Body d-flex flex-column gap-4'>
        {Report.map((items)=>(
          <TableBody
          name={items.taskName}
          type={items.startDate}
          date={items.endDate}
          status={items.assignedBy}
          assignedBy={items.percentage}
          />
        ))}
      </div>
      </div>
        </div>
  )
}

export default AdminReport