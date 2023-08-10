import './styles/ProductPurchase.css'

const ProductPurchase = ({purchase}) => {
  return (
    <article className='purchase-container'>
        <header className='purchase__header'>
            <img className='purchase__img' src={purchase.product.images[0].url} alt="" />
        </header>

        <div className='purchase__container-info'>
        <h3 className='purchase__title'>{purchase.product.title}</h3>

        <div className='purchase__quantity'> Quantity: {purchase.quantity}</div>
        <div className='purchase__total'> Total: {purchase.quantity * purchase.product.price}</div>

        </div>
    </article>
  )
}

export default ProductPurchase