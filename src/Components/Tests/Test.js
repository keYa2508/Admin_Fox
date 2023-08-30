import React from 'react'
import Question from '../../Data/Questions.json'
import {GiStopwatch} from 'react-icons/gi'
import '../Tests/Test.css'

function Test() {
  return (
    <div className='Page'><div>
      <div className='d-flex p justify-content-between align-items-center'>
      <div className='timer d-flex justify-content-center align-items-center gap-2'>
        <GiStopwatch/>
        <span className='static-time'>01:45:30</span>
      </div>

      <div className='Test-Topic'>REACT JS</div>

      <button className='submit'>SUBMIT</button>
    </div>
    <div className='p-5 d-flex flex-column gap-3'>
            {
                Question.map((items,index) =>{
                    return <div key={index} className='d-flex flex-column gap-3 qn-box p-4'>
                        <div className='qn'>{items.question}</div>
                        <div className='choice d-flex flex-wrap gap-x-14 gap-y-2'>
                            {
                                items.options.map((option, optionIndex) =>{
                                    return <label key={optionIndex} className='d-flex gap-2'>
                                        <input className='radio-button' type='radio'
                                            name={`items_${index}`} value={option} />
                                        {option}
                                    </label>
                                })
                            }
                        </div>
                        </div>
            })
            }
        </div>  </div>
    </div>
  )
}

export default Test