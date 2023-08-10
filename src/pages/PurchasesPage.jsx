
import { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchase from '../components/PurchasesPage/ProductPurchase'
import './styles/PurchasesPage.css'

const PurchasesPage = () => {

   const {getAllPurchases, purchases} = usePurchases()
   
   useEffect(() => {
    getAllPurchases()

   },[])

  return (
    <section className='purchases__container'>
        <h2 className='purchases__title'>My Purchases</h2>
        <div className='purchases__products'>
            {
              purchases?.map( purch => (
                <ProductPurchase
                key={purch.id}
                purchase={purch}
                />
              ))
            }
        </div>
    </section>
  )
}

export default PurchasesPage