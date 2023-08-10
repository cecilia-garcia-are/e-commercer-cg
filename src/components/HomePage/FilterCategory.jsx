import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"
import './styles/FilterCategory.css'


const FilterCategory = () => {

    const [categories, getAllCatgories] = useFetch()
    const dispatch= useDispatch()

    useEffect(() => {
        getAllCatgories('/categories')

    },[])

    const handleAllCategories = () => {
      dispatch ( getAllProductsThunk())
    }

    const handleCategories = id => {
        dispatch(getFilteredProductsThunk(id))
    }

  return (
    <article className="category__container">
      
        <h3 className="category__title">Category</h3>

        <ul className="category__info">


            <li className="category__list" onClick={handleAllCategories}>All categories</li>
            {
                categories?.map( category => (
                    <li className="category__list" onClick={() => handleCategories(category.id)} key={category.id}>
                            {category.name}
                         </li>

                ))
            }

        </ul>
    </article>
  )
}

export default FilterCategory