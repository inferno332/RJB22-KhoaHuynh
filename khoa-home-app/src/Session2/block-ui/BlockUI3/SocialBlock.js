import React from 'react'
import PropTypes from 'prop-types'
import './SocialBlock.css'

export default function SocialBlock(props) {
    const {
        text,
        color,
        iconName,
        total,
        unit,
      } = props;
    return (
      <div className='sb-block' style={{backgroundColor: `#${color}`}}>
        <div className='h-100 d-flex justify-content-between flex-column'>
          <i class={`${iconName}`} style={{fontSize: '4rem'}}></i>
          
          <div>
            <h1 >{text}</h1>
            <div className='d-flex'>
              <p>{total}</p>
              <span className='pl-2'>{unit}</span>
            </div>
          </div>
        </div>
    </div>  
  )
}

SocialBlock.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  iconName: PropTypes.string,
  total: PropTypes.number,
  unit: PropTypes.string,
}
