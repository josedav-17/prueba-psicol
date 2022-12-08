import { axiosConfig } from "../configuration/axiosConfig"

//obtiene todos los clientes
const getClientes = async () => {
    const response = await axiosConfig.get('/clientes')
    return response.data
}

//obtiene un cliente por id
const getCliente = async (id) => {
    const response = await axiosConfig.get(`/clientes/${id}`)
    return response.data
}

//crea un cliente
const createCliente = async (cliente) => {
    const response = await axiosConfig.post('/clientes', cliente)
    return response.data
}

//actualiza un cliente
const updateCliente = async (id, cliente) => {
    const response = await axiosConfig.put(`/clientes/${id}`, cliente)
    return response.data
}

//elimina un cliente
const deleteCliente = async (id) => {
    const response = await axiosConfig.delete(`/clientes/${id}`)
    return response.data
}

//
exports = {
    getClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
}



