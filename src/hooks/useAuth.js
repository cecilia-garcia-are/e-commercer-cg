import axios from "axios"


const useAuth = () => {
  
    const createUser = (data, navigate) =>{
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios
        .post(url, data)
        .then(resp => {
            console.log (resp.data)
            navigate('/login')
        })
        .catch(err => console.error(err))
    }
    const loginUser = (data, navigate) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios
        .post(url, data)
        .then(resp =>{
            console.log (resp.data)
            localStorage.setItem('token', resp.data.token )
            navigate('/')
        })
        .catch(err => {
            console.error(err)
            localStorage.removeItem('token')
        })

    }

    return { createUser, loginUser}
}

export default useAuth