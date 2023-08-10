

const getConfigToken = () => {
  return {
    //headers son cabeceras o informacion adicional que se envia al backen para que se utilice

    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }

  }
}

export default getConfigToken