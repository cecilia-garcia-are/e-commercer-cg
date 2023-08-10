import React from 'react'
import useCartApi from '../../hooks/useCartApi'
import './styles/ProductInCart.css'

const ProductInCart = ({prodCart}) => {
    
    const {deleteProductInCart } = useCartApi()

const handleDleteCart = () => {
    deleteProductInCart(prodCart.id)

}

  return (
   <article className='prodcart__container'>
    <header className='prodcart__header'>
        <img className='prodcart__img' src={prodCart.product.images[0].url} alt="" />
    </header>

    <section className='prodcart__secc-container'>
        <h3 className='prodcart__title'>{prodCart.product.title} </h3>
        
        <div className='prodcart__group'>
        <span className='prodcart__quantity'> Quantity: {prodCart.quantity}</span>
        <button className='prodcart__btn' onClick={handleDleteCart}><i className='bx bx-trash bx-sm'></i></button>
        </div>
        
    </section>

    <footer className='prodcart__footer'>
        <span className='footer__total'>Price Uni</span>
        <span className='footer__unidad'>{prodCart.product.price}</span>
        <span className='footer__total'>Subtotal</span>
        <span className='footer__unidad'>{prodCart.product.price* prodCart.quantity}</span>
    </footer>

   </article>
  )
}

export default ProductInCart