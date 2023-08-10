import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const  productsSlice= createSlice({
    name: 'products',
    initialState: null,
    reducers:{
        setProductsG: ( state, action ) => action.payload


    }
})

export const { setProductsG } = productsSlice.actions
export default productsSlice.reducer

//tunk (para mi peticion asincronica y hacer guardar en un estado global)
//FUNCION QUE RETORNA OTRA FUNCION, CON MI DISPATCH EN EL 2DO PARAMETRO SIEMPRE

export const getAllProductsThunk = () => dispatch => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
 axios
 .get(url)
 .then(resp => dispatch (setProductsG(resp.data)))
 .catch(err => console.error(err))
}

export const getFilteredProductsThunk = (id) => dispatch => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
 axios
 .get(url)
 .then(resp => dispatch (setProductsG(resp.data)))
 .catch(err => console.error(err))
}
