import { axiosConfig } from "../configuration/axiosConfig"

//obtiene todas las boletas
const getBoletas = async () => {
    const response = await axiosConfig.get('/boletas')
    return response.data
}

//crea una boleta
const createBoleta = async (boleta) => {
    const response = await axiosConfig.post('/boletas', boleta)
    return response.data
}

//elimina una boleta
const deleteBoleta = async (id) => {
    const response = await axiosConfig.delete(`/boletas/${id}`)
    return response.data
}

//actualiza una boleta
const updateBoleta = async (id, boleta) => {
    const response = await axiosConfig.put(`/boletas/${id}`, boleta)
    return response.data
}

//exportamos boleteriaService
export const boleteriaService = {
    getBoletas,
    createBoleta,
    deleteBoleta,
    updateBoleta
}


