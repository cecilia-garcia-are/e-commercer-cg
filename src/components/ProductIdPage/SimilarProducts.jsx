import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from '../HomePage/CardProduct'
import './styles/SimilarProducts.css'


const SimilarProducts = ({product}) => {

    const [ productsByCategory, getProductsByCategory ] = useFetch()

    useEffect( () => {
        if(product) { 
         getProductsByCategory(`/products?categoryId=${product.categoryId}`)
        }
    }, [product])

    const cbFilter = prod =>{
        if(prod.id !== product.id){
            return prod
        }

    }


  return (
    <div className="prodS__container">
        
        <h3 className="prodS__title">Similar Products</h3>

        <div className="prodS__group">
            {
                productsByCategory?.filter(cbFilter).map(prod => (
                    <CardProduct
                    key={prod.id}
                    product={prod}
                    />

                ))
            }
        </div>
    </div>
  )
}

export default SimilarProducts