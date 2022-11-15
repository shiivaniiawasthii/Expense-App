import React from 'react'
import "./ChartBar.css"
function ChartBar(props) {
        // how much bar should be filled-logic building
        let barFilledHeight = "0%";
        console.log(props.maxValue)
        if(props.maxValue>0){
                barFilledHeight = Math.round((props.value / props.maxValue)*100)+"%"
        }
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
             <div className='chart-bar__fill'>
                {/*how much bar should be filled,so didnt add
                height in class dynamically,it will depend
                upon relationship btwn value and max value
                which is coming from chart.js  */}
        </div>  
        <div className='chart-bar__label' style={{height:barFilledHeight}}>
           {props.label} 
               {/*months */}
        </div> 
        </div>


    </div>
  )
}

export default ChartBar