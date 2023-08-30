import React, { useState } from 'react'
import '../TraineeDashboard/TraineeDashboard.css'
import { PieChart } from '@mui/x-charts/PieChart'
import './TraineeProgress.css'

function TraineeProgress() {


  const htmlData = [
    { lable:'Correct Answer',  value: 70 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 50, color:'#fcdc65' },
  ]

  const cssData = [
    { lable:'Correct Answer',  value: 90 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 30, color:'#fcdc65' },
  ]

const bootstrapData = [
    { lable:'Correct Answer',  value: 90 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 30, color:'#fcdc65' },
  ]

  const javaScriptData = [
    { lable:'Correct Answer',  value: 70 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 50, color:'#fcdc65' },
  ]

  const eScriptData = [
    { lable:'Correct Answer',  value: 90 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 30, color:'#fcdc65' },
  ]

const reactData = [
    { lable:'Correct Answer',  value: 90 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 30, color:'#fcdc65' },
  ]

  const gitData = [
    { lable:'Correct Answer',  value: 70 , color:'#47ace1'},
    {  lable:'Wrong Answer',value: 40, color:'#ec6f55' },
    { lable:'Not Answered', value: 50, color:'#fcdc65' },
  ]


  const htmlChart =<PieChart
                series={[
                  {
                    data: htmlData,
                    innerRadius: 60,
                    outerRadius: 170,
                    paddingAngle: 5,
                    cornerRadius: 5,
                  }]}
                  height={400}
                  width={800}
              />

  const cssChart =<PieChart
              series={[
                {
                  data: cssData,
                  innerRadius: 60,
                  outerRadius: 170,
                  paddingAngle: 5,
                  cornerRadius: 5,
                }]}
                height={400} 
                width={800}
                />

  const bootstrapChart =<PieChart
                    series={[
                      {
                        data: bootstrapData,
                        innerRadius: 60,
                        outerRadius: 170,
                        paddingAngle: 5,
                        cornerRadius: 5,
                      }]}
                      height={400} 
                      width={800}
                      />

  const jScriptChart =<PieChart
                    series={[
                      {
                        data: javaScriptData,
                        innerRadius: 60,
                        outerRadius: 170,
                        paddingAngle: 5,
                        cornerRadius: 5,
                      }]}
                      height={400} 
                      width={800}
                      />

  const egmaChart = <PieChart
                series={[
                  {
                    data: eScriptData,
                    innerRadius: 60,
                    outerRadius: 170,
                    paddingAngle: 5,
                    cornerRadius: 5,
                  }]}
                  height={400} 
                  width={800}
                  />

  const reactChart =<PieChart
                series={[
                  {
                    data: reactData,
                    innerRadius: 60,
                    outerRadius: 170,
                    paddingAngle: 5,
                    cornerRadius: 5,
                  }]}
                  height={400} 
                  width={800}
                  />

  const gitChart =<PieChart
              series={[
                {
                  data: gitData,
                  innerRadius: 60,
                  outerRadius: 170,
                  paddingAngle: 5,
                  cornerRadius: 5,
                }]}
                height={400} 
                width={800}
                />


  const [option, setOption] = useState(htmlChart)
  const [clrChange, setClrChange] = useState(0)

  const htmlClick = () => {
    setOption(htmlChart)
    setClrChange(0)
  }

  const cssClick = () => {
    setOption(cssChart)
    setClrChange(1)
  }

  const bootstrapClick = () => {
    setOption(bootstrapChart)
    setClrChange(2)
  }

  const jScriptClick = () => {
    setOption(jScriptChart)
    setClrChange(3)
  }

  const eScriptClick = () => {
    setOption(egmaChart)
    setClrChange(4)
  }

  const gitClick = () => {
    setOption(gitChart)
    setClrChange(6)
  }

  const reactClick = () => {
    setOption(reactChart)
    setClrChange(5)
  }
  
  return (
        <div className='Dashboard'>
          <div className='Dashboard-Head'>Progress</div>
    <div className='d-flex gap-5'>
            <div className='col-3 border border-3 d-flex flex-col gap-4 shadow p-3 bg-body-tertiary rounded'>
              <div className={clrChange === 0 ? 'Active' : 'Deactive'} onClick={htmlClick}>HTML</div>
              <div className={clrChange === 1 ? 'Active' : 'Deactive'} onClick={cssClick}>CSS3</div>
              <div className={clrChange === 2 ? 'Active' : 'Deactive'} onClick={bootstrapClick}>BOOTSTRAP</div>
              <div className={clrChange === 3 ? 'Active' : 'Deactive'} onClick={jScriptClick}>JAVA SCRIPT</div>
              <div className={clrChange === 4 ? 'Active' : 'Deactive'} onClick={eScriptClick}>ECMA SCRIPT</div>
              <div className={clrChange === 5 ? 'Active' : 'Deactive'} onClick={reactClick}>REACT JS</div>
              <div className={clrChange === 6 ? 'Active' : 'Deactive'} onClick={gitClick}>GIT</div>
            </div>
        <div className='col-8 border border-3 shadow p-3 bg-body-tertiary rounded'>
          {option}
<div className='d-flex gap-3 align-items-center ml-5'>
  <div className='Crt-Ans'><span>.</span>Correct Answer</div>
  <div className='Wrg-Ans'><span>.</span>Wrong Answer</div>
  <div className='Not-Ans'><span>.</span>Not Answered</div>
</div>
        </div></div>
          </div>
  )
}

export default TraineeProgress