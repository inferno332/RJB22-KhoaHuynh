import React from 'react'
import './ChartBar1.css'
import PropTypes from "prop-types";

export default function ChartBar1(props) {
    const {text, percentage, color} = props;
    return (
    <>
        <div className='row m-5'>
            <div className='cb-block col-12'>
                <h1 className='' style={{backgroundColor: `#${color}` }}>{text}</h1>
                <div className=' progress-bar percentage pl-3' style={{backgroundColor: `#${color}` ,width:`${percentage}%` ,textAlign: 'left'}}>{`${percentage}%`}</div>
            </div>
        </div>  
    </>   
  )
}


ChartBar1.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}