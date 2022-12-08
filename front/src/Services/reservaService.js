import { axiosConfig } from "../configuration/axiosConfig"

//obtiene todas las reservas
export const getReservas = async () => {
    const response = await axiosConfig.get('/reservas')
    return response.data
}

//crea una reserva
export const createReserva = async (reserva) => {
    const response = await axiosConfig.post('/reservas', reserva)
    return response.data
}

//elimina una reserva
export const deleteReserva = async (id) => {
    const response = await axiosConfig.delete(`/reservas/${id}`)
    return response.data
}

//actualiza una reserva
export const updateReserva = async (id, reserva) => {
    const response = await axiosConfig.put(`/reservas/${id}`, reserva)
    return response.data
}

//obtiene todas las reservas de un usuario
export const getReservasUsuario = async (id) => {
    const response = await axiosConfig.get(`/reservas/usuario/${id}`)
    return response.data
}

