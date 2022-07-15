import React, {useState} from 'react'
import {ImageData} from './ImageData'
import './ImageSlider.css'

export default function ImageSlider() {
    const [current, setCurrent] = useState(1);
    const length = ImageData.length

    const nextSlide = () => {
        setCurrent(current === length ? 1 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 1 ? length : current - 1)
    }
    console.log(current)
    return (
    <div className="slider">
        <i 
            className="fa-solid fa-arrow-left left-arrow"
            onClick={prevSlide}
        ></i>
        <i 
            className="fa-solid fa-arrow-right right-arrow"
            onClick={nextSlide}
        ></i>
        {ImageData.map(({image}, index) => {
            return (
                <div key={index}>
                    {(index + 1 === current) &&
                        <img src ={image} className="image" />
                    }
                </div>
            )
        })}
    </div>
  )
}
