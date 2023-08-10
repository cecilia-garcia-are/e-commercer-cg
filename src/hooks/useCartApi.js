import { useDispatch } from "react-redux"
import { deleteCartG, getCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/configToken"
import axios from "axios"


const useCartApi = () => {

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    const dispatch = useDispatch()

    //POST
    const addProductInCart = (data) => {
     const url= `${baseUrl}/cart`
    axios
    .post(url, data, getConfigToken())
    .then(resp => {
        console.log (resp.data)
        dispatch(getCartThunk())
    
    })
    .catch(err => console.log(err))
}


    //DELETE
    const deleteProductInCart = (id) => {
        const url = `${baseUrl}/cart/${id}`
        axios
        .delete(url, getConfigToken())
        .then(resp =>{
             console.log(resp.data)
             //dispatch(getCartThunk())
             // Usar la  action para eliminar el producto del estado global
             dispatch(deleteCartG(id))
            })
        .catch(err => console.log(err))
    }

    return {addProductInCart, deleteProductInCart}
  
}
export default useCartApi