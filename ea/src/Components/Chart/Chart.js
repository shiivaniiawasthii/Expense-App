import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"
function Chart(props) {
        const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value)
        const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className='chart'>
    {
        props.dataPoints.map((el)=>(<ChartBar
                                key={el.label}
                                value={el.value}
                                maxValue={totalMaximum}
                                label={el.label}/>
    ))}
    </div>
  )
}

export default Chart