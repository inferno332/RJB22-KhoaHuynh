import React from 'react'
import './Basic2.css'


export default function basic2() {
    return (
    <>
        <div className='wrapper'>
            <div className='head'>
                <img src='/images/basic-images/2.jpg'></img>
                <span>Young shop</span>
            </div>
            <div className='foot'>
                <p>Samsung UHD TV 24inch</p>
                <div className='rating'>
                    <i class="fa-regular fa-star checked"></i>
                    <i class="fa-regular fa-star checked"></i>
                    <i class="fa-regular fa-star checked"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <span>02</span>
                </div>
                <div className='price'>$599</div>
            </div>
        </div>
    </>
  )
}
