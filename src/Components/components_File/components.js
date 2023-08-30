import React from 'react'
import '../components_File/component.css'

export  function TableHead({
    name,type,date,status,assignedBy,editLogo,deleteLogo
}){
    return(
            <div className='Table-Head col-12'>
              <div className='col-2'>{name}</div>
              <div className='col-2'>{type}</div>
              <div className='col-2'>{date}</div>
              <div className='col-2'>{status}</div>
              <div className='col-2'>{assignedBy}</div>
              <div className='col-1'>{editLogo}</div>
              <div className='col-1'>{deleteLogo}</div>
            </div>
    )
}

export  function TableBody({
    name,type,date,status,assignedBy,editLogo,deleteLogo
}) {
    
  return (
        
                <div className='Table-Data col-12 p-3'>
                    <div className='col-2'>{name}</div>
                    <div className='col-2'>{type}</div>
                    <div className='col-2'>{date}</div>
                    <div className='col-2'>{status}</div>
                    <div className='col-2'>{assignedBy}</div>
                    <div className=' col-1'>{editLogo}</div>
                    <div className=' col-1'>{deleteLogo}</div>
                </div>
  )
}

export function Form_input({ label,placeholder,value,onChange,dropdown} ) {

  const data = [
      {label: 'Amresh Sriram' , value : 'Amresh Sriram'},
      {label: 'Ramesh' , value : 'Ramesh'},
      {label: 'Kalai Selvan' , value : 'Kalai Selvan'},
      {label: 'Sakthi Naveen' , value : 'Sakthi Naveen'}
  ]

return (
  <div className='flex flex-row justify-evenly w-full items-center '>
    <label className='border-b-4 text-xl font-weight:800 p-1 flex items-center justify-center w-1/6'>{label}</label>
    {dropdown ? <DropDown_Field
      data={data} 
    value={value}
       onChange={onChange}/> : 
    <input className='w-75 border-b-4 text-xl font-weight:800 flex items-center p-1 text-center justify-center ' style={{outline:'none'}}
       placeholder={placeholder}
       value={value}
       onChange={onChange}
       />}
  </div>
)
}

export function DropDown_Field({value, onChange, data}) {
  return (
    <div className='w-75 border-b-4 text-xl font-weight:800 p-1 text-center'>
      <select className='w-full text-center' value={value} onChange={onChange}>
           <option disabled>Choose any one</option>
            {
                data.map((items, index) =>
                      <option key={index} value={data.value}>                   
                        {items.label}                    
                      </option> 
            )}
            
        </select>
    </div>
  )
}

export  function DeleteTable ({name , deleteIcon}){
  return(
    <div className='Delete-Data col-12 p-3'>
      <div className='col-8'>{name}</div>
      <div className='col-2'>{deleteIcon}</div>
    </div>
  )
}