import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import './styles/ProductId.css'
import SliderImgs from "../components/ProductIdPage/SliderImgs"

const ProductIdPage = () => {

   const { id }= useParams()

   const [product, getSingleProduct]= useFetch()

   useEffect(() => {
     getSingleProduct(`/products/${id}`)

   },[id])

  return (
    <div className="productid__container">
      <div className="productid__info">
      <SliderImgs
      product={product}
      />
        <ProductInfo
        product={product}
        />

      </div>

       <div className="prodid__similar">
        <SimilarProducts
        product={product}
        />
        </div>
    </div>
  )
}

export default ProductIdPage