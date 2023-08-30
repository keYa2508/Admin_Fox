import React, {useState} from 'react'
import './AddUser.css'
import { Form_input } from '../../components_File/components'

const AddUser = () => {

  const [name, setname] = useState("")
    const [text, settext] = useState("")
    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    const [selectedValue, setSelectedValue] = useState('')

  return (
    <div className='Dashboard'>
      <div className='Dashboard-Head'>
               ADDING USER
            </div>
           
            <div className='flex flex-col text-2xl sm:font-bold gap-5'>
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
                label={'REPORTING TO'}
                dropdown={true}
                placeholder={'Enter Password'}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
            />


            <span className=' flex justify-center items-center gap-5'>
              <button className='cancel_button'>CANCEL</button>
                <button className='confirm_button hover:bg-green-500 hover:text-white'>
                    CONFIRM
                </button>
            </span>
            </div>
    </div>
  )
}

export default AddUser