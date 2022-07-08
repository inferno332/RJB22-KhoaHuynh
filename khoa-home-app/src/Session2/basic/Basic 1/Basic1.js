import React from 'react'
import './Basic1.css'


export default function Basic1(props) {
    const {
        imageUrl, 
        heading, 
        category1,
        category2,
        category3,
        category4,
    } = props;
    return (
    <div className='wrapper1 row'>
        <div className='col-5 pt-2'>
            <img src={`${imageUrl}`}></img>
        </div>    
        <div className='col-7 pt-3'>
            <h1>{heading}</h1>
            <p>{category1}</p>
            <p>{category2}</p>
            <p>{category3}</p>
            <p>{category4}</p>
        </div>
    </div>
  )
}
