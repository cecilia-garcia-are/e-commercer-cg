import React, { useState } from 'react'
import useCartApi from '../../hooks/useCartApi'
import './styles/ProductInfo.css'

const ProductInfo = ({ product }) => {

    //mi contador de productos agregados al carrito
    const [counter, setCounter] = useState(1)

    const handleMore = () => {
       setCounter(counter + 1)

    }

    const handleMinus = () => {
        if(counter -1 >= 1){
            setCounter(counter - 1)
        }
    }

    //PARA AGREGAR MÁS PROD A MI CARRITO DESDE LA INFO

    const {addProductInCart} = useCartApi()

    const handleAddCart = () => {
        const data = {
            quantity: counter,
            productId: product.id
        }
        
        addProductInCart(data)

    }


  return (
    <article className='prodInfo__container'>
        <h4 className='prodInfo__brand'>{product?.brand} </h4>
        <h3 className='prodInfo__title'>{product?.title}</h3>
        <p className='prodInfo__description'>{product?.description}</p>

        <div className='prodInfo__container-secc'>

        <section className='prodInfo__secc'>
            <h4 className='prodInfo__secc-title'>Price</h4>
            <span className='prodInfo__secc-info'>{product?.price}</span>
        </section>

        <section className='prodInfo__secc' >
            <h4 className='prodInfo__secc-title'>Quantity</h4>
            
            <div className='prodInfo__secc-counter'>

                <button className='counter__btn' onClick={handleMinus}>-</button>
                <span className='counter__btn'>{counter}</span>
                <button className='counter__btn' onClick={handleMore}>+</button>
            </div>
        </section>

        </div>

        <footer>
            <button  className='prodInfo__btn' onClick={handleAddCart}>Add to Cart <i className='bx bxs-cart-add' ></i> </button>
        </footer>

    </article>
  )
}

export default ProductInfo