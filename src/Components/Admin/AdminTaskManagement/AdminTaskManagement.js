import React, { useState } from 'react'
import { Form_input } from '../../components_File/components'

function AdminTaskManagement() {

  const [name, setname] = useState("")
    const [text, settext] = useState("")
    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    const [selectedValue, setSelectedValue] = useState('')
    const [reference, setReference] = useState("")

  return (
        <div className='Dashboard'>
          <div className='Dashboard-Head'>
               TASK MANAGEMENT
            </div>
            <div className='flex items-center justify-between   flex-end p-1'>
                <span className='text-2xl  sm:font-bold'>
                    TASK ASSIGN
                </span>
                <select className='shadow-md sm:font-semibold p-1 w-56'>
                    <option>
                        sakthi Naveen
                    </option>
                    <option>
                        Kalai Selvan
                    </option>
                </select>
            </div>
            <div className='flex flex-col text-2xl sm:font-bold gap-4 p-3'>
                <Form_input
                    label={'NAME'}
                    dropdown={false}
                    placeholder={'Enter Name'}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <Form_input
                    label={'TYPE'}
                    dropdown={false}
                    placeholder={'Enter Type'}
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                />
                <Form_input
                    label={'E-MAIL'}
                    dropdown={false}
                    placeholder={'Enter E-Mail'}
                    value={mail}
                    onChange={(e) => setmail(e.target.value)}
                />
                <Form_input
                    label={'PASSWORD'}
                    dropdown={false}
                    placeholder={'Enter Password'}
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <Form_input
                    label={'UPDATED BY'}
                    dropdown={true}
                    placeholder={'Enter Password'}
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                />
                <Form_input
                    label={'REFFERENCE'}
                    dropdown={false}
                    placeholder={'your ref. website goes here '}
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                />


                <span className=' flex justify-center items-center '>
                    <button className='confirm_button hover:bg-green-500 hover:text-white'>
                        CONFIRM
                    </button>
                </span>
            </div>
        </div>
  )
}

export default AdminTaskManagement