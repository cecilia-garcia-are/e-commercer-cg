import { useSelector } from "react-redux"
import CardProduct from "../components/HomePage/CardProduct"
import "./styles/Home.css"
import { useRef, useState } from "react"
import FilterCategory from "../components/HomePage/FilterCategory"
import FilterPrice from "../components/HomePage/FilterPrice"

const HomePage = () => {
  //filter
  const [nameValue, setNameValue] = useState("")
  const  [fromTo, setFromTo]= useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector((reducer) => reducer.products)

  const inputName = useRef()

  const handleFilterName = () => {
    setNameValue(inputName.current.value)
  }

  const cbFilter = prod => {
    //filtro por nombre
    const inputNameLower = nameValue.toLocaleLowerCase().trim()
    const nameReal =prod.title.toLocaleLowerCase()
    const filterName = nameReal.includes(inputNameLower)
    //filtro por  precio
    const price = Number(prod.price) //iterador para cambiar de string a numero
    const filterPrice = fromTo.from <= price && price <= fromTo.to
    
    return filterName && filterPrice
  }

  return (
    <div className="home__container">

      <input className="home__input"
      value={nameValue} 
      ref={inputName}
      onChange={handleFilterName} 
      type="text"
      placeholder= "Search" />
      
      <div className="home__filter">
      <FilterCategory/>

      <FilterPrice
      setFromTo={setFromTo}
      />
      </div>

      <div className="home__products">
      {
          products?.filter(cbFilter).length
            ? products?.filter(cbFilter).map((prod) => (
              <CardProduct key={prod.id} product={prod} />
            ))
            : <h2>Sorry 😭, not exist products with that filters. ❌</h2>
        }
      </div>
    </div>
  )
}

export default HomePage
