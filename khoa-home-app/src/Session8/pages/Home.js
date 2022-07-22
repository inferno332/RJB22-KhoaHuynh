import React, {useState} from 'react'
import '../assets/ImageSlider.css'

const ImageData = [
  {
      image: 
      'https://images.unsplash.com/photo-1657788913609-952b3a20b162'
  },
  {
      image: 
      'https://images.unsplash.com/photo-1657724258343-7d0aee3cddac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  },
  {
      image: 
      'https://images.unsplash.com/photo-1657635257152-2d5b74088ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
      image: 
      'https://images.unsplash.com/photo-1657572655977-3cce0304789d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80'
  },
  {
      image: 
      'https://images.unsplash.com/photo-1639838311730-8fab8160a13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
]
export default function Home() {
    
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
