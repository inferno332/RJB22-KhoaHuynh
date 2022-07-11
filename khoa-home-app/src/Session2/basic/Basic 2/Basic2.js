import React from 'react'
import './Basic2.css'


export default function basic2() {
    

    const renderStar = (star) => {
        let content = [];

        for (let index = 0; index < star; index++) {
            content.push(<i className="fa-regular fa-star checked"></i>);
        }

        for (let index = star; index < 5; index++) {
            content.push(<i className="fa-regular fa-star"></i>);
        }

        return content;
    }

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
                    <div>{renderStar(4)}</div>
                    <span>02</span>
                </div>
                <div className='price'>$599</div>
            </div>
        </div>
    </>
  )
}
