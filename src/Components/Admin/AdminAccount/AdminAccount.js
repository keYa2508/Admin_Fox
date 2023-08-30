import React, { useState } from 'react'
import '../AdminAccount/AdminAccount.css'
import { Form_input } from '../../components_File/components'

function AdminAccount() {

  const [name, setname] = useState("")
    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")

  return (

        <div className='Dashboard '>
          <div className='Dashboard-Head '>
            MASTER ADMIN DETAILS
          </div>

          <div className='Admin-Account-Details col-12'>
          <Form_input
                    label={'NAME'}
                    dropdown={false}
                    placeholder={'Amresh Sriram'}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <Form_input
                    label={'E-MAIL'}
                    dropdown={false}
                    placeholder={'sriram.kpost@gmail.com'}
                    value={mail}
                    onChange={(e) => setmail(e.target.value)}
                />
                <Form_input
                    label={'PASSWORD'}
                    dropdown={false}
                    placeholder={'123456789@'}
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />

          <div className='flex justify-center items-center Button_main'>
            <button className=' confirm_button hover:bg-green-500 hover:text-white'>
                    CONFIRM
            </button>
          </div>
          </div>
        </div>
  )
}

export default AdminAccount