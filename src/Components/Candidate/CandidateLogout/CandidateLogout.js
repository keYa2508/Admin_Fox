import React from 'react'
import Logout from '../../../Assets/Logout.png'
import {LuLogOut} from 'react-icons/lu'
import './CandidateLogout.css'
import { useNavigate } from 'react-router-dom'

function CandidateLogout() {

  const navigate = useNavigate()

  return (
    <div className='Candidate-Page'>
      <div className='d-flex justify-content-center align-items-center'>
      <div className='logout-body d-flex flex-column p-3 justify-content-center align-items-center'>
         <div className='thankyou'>THANK YOU FOR PARTICIPATING...</div>
         <img src={Logout} alt='Thank you for participating'/>
         <button className='logout-button d-flex justify-content-center align-items-center' onClick={() => navigate('/')}>LOGOUT <LuLogOut/></button>
      </div>
    </div>
    </div>
  )
}

export default CandidateLogout