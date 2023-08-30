import React from 'react'
import '../CandidateTask/CandidateTask.css'
import HTML from '../../../Assets/html 1.png'
import Css from '../../../Assets/css(1) 1.png'
import Bootstrap from '../../../Assets/bootstrap 1.png'
import JavaScript from '../../../Assets/javascript 1.png'
import ReactJs from '../../../Assets/react 1.png'
import Github from '../../../Assets/github 1.png'
import NodeJS from '../../../Assets/nodejs 1.png'
import MangoDB from '../../../Assets/Mangodb.png'
import { useNavigate } from 'react-router-dom'


function CandidateTask() {

  const navigate = useNavigate()

  const ReactTest = [
    {Tobic:<img src={HTML} alt='Html'/>},
    {Tobic:<img src={Css} alt='css'/>},
    {Tobic:<img src={Bootstrap} alt='bootstrap'/>},
    {Tobic:<img src={JavaScript} alt='js'/>},
    {Tobic:<img src={ReactJs} alt='react'/>},
    {Tobic:<img src={Github} alt='git'/>},
    {Tobic:<img src={NodeJS}  alt='node'/>},
    {Tobic:<img src={MangoDB} alt='mangodb'/>}
  ]
  return (
    <div className='Candidate-Page'>
      <div className='Candidate-Name'>Welcome Sakthi Naveen</div>
      <div className='Candidate-Taskbox'>
        <div className='Candidate-Tasks'>
        {ReactTest.map((x)=>(
          <div className='Candidate-Task'>{x.Tobic}</div>
        ))}
        </div>
        <div className='Candidate-StartTest' onClick={()=> navigate('/test')}>Start Test</div>
      </div>
    </div>
  )
}

export default CandidateTask