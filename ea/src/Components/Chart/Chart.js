import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"
function Chart(props) {
  return (
    <div className='chart'>
    {
        props.dataPoints.map((el)=>(<ChartBar
                                key={el.label}
                                value={el.value}
                                maxValue={null}
                                label={el.label}/>
    ))}
    </div>
  )
}

export default Chart