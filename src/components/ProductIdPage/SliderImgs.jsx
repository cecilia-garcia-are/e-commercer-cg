import { useState } from 'react'
import './styles/SliderImgs.css'

const SliderImgs = ({product}) => {

    const [imgSlected, setImgSelected] = useState(0)

    const movableStyle = {
        transform: `translateX(calc(-${imgSlected}/3 * 100%))`
    }


    const handlePrev = () =>{
        if(imgSlected - 1 >= 0) {
            setImgSelected(imgSlected - 1)

        }else {
            setImgSelected(2)
        }
    }
    

    const handleNext = () => {
        if(imgSlected + 1 <= 2) {
            setImgSelected(imgSlected + 1)
        }else {
            setImgSelected(0)
        }
    }

    
  return (
    <div className="slider">
        <button onClick={handlePrev} className='slider__btn slider__prev'>&#60;</button>
        <div style={movableStyle} className="slider__movable">
            {
                product?.images.map( imgInfo => (
                    <div className="slider__container-img" key={imgInfo.id}>
                        <img className="slider__img" src={imgInfo.url} alt="" />
                    </div>

                ))
            }

        </div>

        <button onClick={handleNext} className='slider__btn slider__next'>&#62;</button>

    </div>
  )
}

export default SliderImgs